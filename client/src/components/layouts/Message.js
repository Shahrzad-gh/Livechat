import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "auto",
    display: "flex",
    alignItems: " center",
    backgroundColor: "#becdcc",
    borderRadius: "5px",
    width: "max-content",
    padding: 5,
    margin: 5,
  },
  sendInfo: {
    display: "flex",
    flexDirection: "row",
  },
});

function Message({ message }) {
  const classes = useStyles();
  console.log(message);
  return (
    <div className={classes.root}>
      <div>{message?.text}</div>
      <div className={classes.sendInfo}>
        <div>&nbsp;2:45&nbsp;</div>
        <div>&#10003;</div>
      </div>
    </div>
  );
}

export default Message;
