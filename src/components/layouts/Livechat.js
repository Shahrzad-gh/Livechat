import React from "react";
import { makeStyles } from "@mui/styles";
import MainMessages from "./MainMessages";
import MainNotifications from "./MainNotifications";
import MainChatList from "./MainChatList";

const useStyles = makeStyles(() => ({
  root: {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    //justifyContent: "center",
    //alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#3b6e68",
    height: "5vh",
    color: "#FFF",
  },
  main: {
    width: "-webkit-fill-available",
    backgroundColor: "#becdcc",
    height: "94.3vh",
    display: "flex",
    flexDirection: "row",
    //alignItems: "center",
    justifyContent: "space-between",
  },
}));

function Livechat() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>LiveChat</div>
        <div>Create memorable talks</div>
      </div>
      <div className={classes.main}>
        <MainChatList />
        <MainMessages />
        <MainNotifications />
      </div>
    </div>
  );
}

export default Livechat;
