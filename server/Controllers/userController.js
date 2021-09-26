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
  console.log(email, password);

  try {
    const user = await User.login({
      email,
      password,
    });
    const token = createToken(user._id);
    res.cookie("token", token, { httpOnly: false });

    res.status(201).json({ user: user._id });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.signout = (req, res) => {};
