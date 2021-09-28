const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await User.create({ firstName, lastName, email, password });
    const token = createToken(user._id);
    res.cookie("token", token, { httpOnly: false, maxAge: maxAge * 1000 });

    res.status(201).json({ user: user._id });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("token", token, { httpOnly: false });

    res.status(201).json({ user: user._id });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.loggedIn = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    handleErrors(err);
    res.json(false);
  }
};
module.exports.getCurrentUser = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
      } else {
        let user = await User.findById(decodedToken.id);
        //res.locals.user = user.role;
        (user.password = undefined), res.send(user);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.getUser = async (req, res) => {
  const { userId, firstName, lastName } = req.query;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ firstName, lastName });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
};
