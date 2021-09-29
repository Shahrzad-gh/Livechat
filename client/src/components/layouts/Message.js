import React from "react";
import { makeStyles } from "@mui/styles";
// import CheckIcon from "@mui/icons-material/Check";
import moment from "moment";

const useStyles = makeStyles({
  ownRoot: {
    height: "auto",
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
    alignItems: " center",
    justifyContent: "flex-end",
  },
  timeStyle: {
    fontSize: 10,
    color: "gray",
  },
});

function Message({ own, message }) {
  const classes = useStyles();
  return (
    <div className={own ? classes.ownRoot : classes.messageRoot}>
      <div>{message?.text}</div>
      <div className={classes.sendInfo}>
        <div className={classes.timeStyle}>
          &nbsp;{moment(message.createdAt).format("LT")}&nbsp;
        </div>
        {/* <div>{own ? <CheckIcon fontSize="10px" /> : null}</div> */}
      </div>
    </div>
  );
}

export default Message;
