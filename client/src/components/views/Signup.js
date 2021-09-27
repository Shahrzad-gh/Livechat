import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { TextField, Button } from "@mui/material";
import { register } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
//import { Link } from "react-router-dom";

const useStyles = makeStyles({
  formStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& .MuiInputLabel-filled.MuiInputLabel-shrink": {
      color: "#3b6e68",
    },
    "& .MuiFilledInput-underline:after": {
      border: "1px solid #3b6e68",
    },
  },
  inputStyle: {
    margin: "10px !important",
  },
  buttonStyle: {
    width: "50%",
    border: "1px solid #3b6e68 !important",
    margin: "10px !important",
    "&:hover": {
      backgroundColor: "#3b6e68 !important",
      color: "#fff",
    },
  },
});

function Signup() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = newUser;
  const auth = useSelector((state) => state.auth);

  function handleOnChange(e) {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    const redisterData = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(register(redisterData));
  }
  return (
    <div>
      <form className={classes.formStyle} onSubmit={handleOnSubmit}>
        <div>
          <b>Live</b>Chat
        </div>
        <div className={classes.formStyle}>
          <div>
            <TextField
              name="firstName"
              id="filled-basic"
              label="firstName"
              variant="filled"
              value={firstName}
              onChange={handleOnChange}
              className={classes.inputStyle}
            />
            <TextField
              name="lastName"
              id="filled-basic"
              label="lastName"
              variant="filled"
              value={lastName}
              onChange={handleOnChange}
              className={classes.inputStyle}
            />
            <TextField
              name="email"
              id="filled-basic"
              label="email"
              type="email"
              variant="filled"
              value={email}
              onChange={handleOnChange}
              className={classes.inputStyle}
            />
            <TextField
              name="password"
              id="filled-basic"
              type="password"
              label="password"
              variant="filled"
              value={password}
              onChange={handleOnChange}
              className={classes.inputStyle}
            />
            {/* <Link to={{ pathname: "/profile", state: auth }}> */}
            <Button
              variant="outlined"
              type="submit"
              className={classes.buttonStyle}
            >
              Register
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
