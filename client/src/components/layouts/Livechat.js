import React from "react";
import { makeStyles } from "@mui/styles";
import MainNotifications from "./MainNotifications";
import MainChat from "./MainChat";
import authContext from "../../context/AuthContext";
import { useContext } from "react";

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
    // "@global": {
    //   ":-webkit-scrollbar": {
    //     display: "none",
    //   },
    // },
  },
}));

function Livechat() {
  const classes = useStyles();
  const userInfo = useContext(authContext);
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>LiveChat</div>
        <div>Create memorable talks</div>
      </div>
      <div className={classes.main}>
        <MainChat currentUser={userInfo.user} />
        <MainNotifications currentUser={userInfo.user} />
      </div>
    </div>
  );
}

export default Livechat;
