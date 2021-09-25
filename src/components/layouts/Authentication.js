import React from "react";
import { makeStyles } from "@mui/styles";
import splashPic from "../../assets/splash.jpg";

import Signin from "../views/Signin";
import Signup from "../views/Signup";

const useStyles = makeStyles({
  root: {
    height: "90vh",
    display: "flex",
    backgroundColor: "#3b6e68",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "70%",
    height: "70%",
    backgroundColor: "#becdcc",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerItem: {
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@global": {
      img: {
        width: "-webkit-fill-available",
        height: "-webkit-fill-available",
        borderRadius: "0 25px 25px 0",
      },
    },
  },
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
    margin: "10px",
  },
  buttonStyle: {
    margin: "10px",
    "&:hover": {
      backgroundColor: "#3b6e68",
      color: "#fff",
    },
  },
});

function Authentication() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.containerItem}>
          <Signin />
          <Signup />
        </div>
        <div className={classes.containerItem}>
          <img alt="authPic" src={splashPic} />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
