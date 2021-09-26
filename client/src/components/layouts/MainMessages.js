import React from "react";
import { makeStyles } from "@mui/styles";
import Message from "./Message";
//import { TextField, Button } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const useStyles = makeStyles({
  navStyle: {
    display: "inline-flex",
    listStyle: "none",
    "@global": {
      li: {
        margin: "5px",
      },
    },
  },
  pvnav: {
    height: "auto",
    display: "flex",
    flexDirection: "row",
    //alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: " 5px",
    margin: "5px 2px 5px 3px",
    //height: "10vh",
    alignItems: "center",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "-webkit-fill-available",
  },
  boxInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
  },
  pvMess: {
    height: "100%",
    borderRadius: "5px",
    backgroundColor: "#fff",
    overflow: "scroll",
  },
  messBox: {
    height: "6vh",
    "@global": {
      input: {
        width: "90%",
        height: "4vh",
        margin: "5px",
        borderRadius: "5px",
        border: "none",
        padding: "0 !important",
      },
    },
  },
});

function MainMessages() {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <div className={classes.pvnav}>
        <div className={classes.boxInfo}>
          <div>
            {" "}
            <img
              alt="Pic"
              src="https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280-600x600.png"
              width={50}
              height={50}
              style={{ borderRadius: 50, border: "1px solid gray" }}
            />
          </div>
          <div>
            <div>Name</div>
            <div>lastseen</div>
          </div>
        </div>
        <div>
          <ul className={classes.navStyle}>
            <li>
              <VideocamIcon />
            </li>
            <li>
              <CallIcon />
            </li>
            <li>
              <MoreHorizIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.pvMess}>
        <Message />
      </div>
      <div className={classes.messBox}>
        <form>
          <input type="text" placeholder="write your message" />
          <button value="Send">Send</button>
        </form>
      </div>
    </div>
  );
}

export default MainMessages;
