import React from "react";

import { makeStyles } from "@mui/styles";
import { TextField, Button } from "@mui/material";

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

  return (
    <div>
      <form className={classes.formStyle}>
        <div>
          <b>Live</b>Chat
        </div>
        <div className={classes.formStyle}>
          <div>
            <TextField
              id="filled-basic"
              label="firstName"
              variant="filled"
              className={classes.inputStyle}
            />
            <TextField
              id="filled-basic"
              label="lastName"
              variant="filled"
              className={classes.inputStyle}
            />
            <TextField
              id="filled-basic"
              label="username"
              variant="filled"
              className={classes.inputStyle}
            />
            <TextField
              id="filled-basic"
              label="password"
              variant="filled"
              className={classes.inputStyle}
            />
          </div>
          <div>
            <Button variant="outlined" className={classes.buttonStyle}>
              Register
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signin;
