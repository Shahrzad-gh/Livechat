import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    textAlign: "right",
    padding: "0 50px",
    backgroundColor: "#3b6e68",
    color: "#FFF",
    justifyContent: "space-between",
  },
  listStyle: {
    display: "inline-flex",
    listStyle: "none",
    "@global": {
      li: {
        padding: "10px",
      },
      "li:last-child": {
        backgroundColor: "#628b86",
        borderRadius: "25px",
        whiteSpace: "nowrap",
      },
    },
  },
  logoStyle: {
    margin: "1em",
    padding: "10px",
  },
  fontStyle: {
    fontSize: 20,
  },
});

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logoStyle}>
        <b className={classes.fontStyle}>Live</b>chat
      </div>
      <ul className={classes.listStyle}>
        <li>Product</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Login</li>
        <li>Try for Free</li>
      </ul>
    </div>
  );
}

export default Navbar;
