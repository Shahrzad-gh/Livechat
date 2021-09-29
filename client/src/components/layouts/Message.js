import React from "react";
import { makeStyles } from "@mui/styles";
import CheckIcon from "@mui/icons-material/Check";
import moment from "moment";

const useStyles = makeStyles({
  ownRoot: {
    height: "auto",
    display: "flex",
    alignItems: " center",
    backgroundColor: "#becdcc",
    borderRadius: "5px",
    width: "max-content",
    padding: 5,
    margin: 5,
    placeSelf: "flex-end",
  },
  messageRoot: {
    height: "auto",
    alignItems: " center",
    backgroundColor: "#fff",
    borderRadius: "5px",
    width: "max-content",
    padding: 5,
    margin: 5,
    placeSelf: "flex-start",
  },
  sendInfo: {
    display: "flex",
    flexDirection: "row",
  },
});

function Message({ own, message }) {
  const classes = useStyles();

  return (
    <div className={own ? classes.ownRoot : classes.messageRoot}>
      <div>{message?.text}</div>
      <div className={classes.sendInfo}>
        <div>{moment(message.createdAt).calendar()}</div>
        <div>{own ? <CheckIcon /> : null}</div>
      </div>
    </div>
  );
}

export default Message;
