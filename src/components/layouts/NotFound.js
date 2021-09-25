import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    color: "#FFF",
    backgroundColor: "#3b6e68",
  },
});

function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {"404"}
      <br />
      {"Something went wrong"}
    </div>
  );
}

export default NotFound;
