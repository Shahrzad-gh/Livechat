import React, { useState } from "react";

import { makeStyles } from "@mui/styles";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authAction";

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

function Signin() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  function handleOnChange(e) {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  }
  const { email, password } = loginInfo;

  function handleOnSubmit(e) {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    console.log("comp", loginData);
    dispatch(login(loginInfo));
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
              name="email"
              id="filled-basic"
              label="email"
              variant="filled"
              onChange={handleOnChange}
              className={classes.inputStyle}
            />
            <TextField
              name="password"
              id="filled-basic"
              label="password"
              variant="filled"
              onChange={handleOnChange}
              className={classes.inputStyle}
            />
            <Button
              type="submit"
              variant="outlined"
              className={classes.buttonStyle}
            >
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signin;
