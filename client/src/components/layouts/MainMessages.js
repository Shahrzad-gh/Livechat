import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@mui/styles";
//import { TextField, Button } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import axios from "axios";
import Message from "./Message";
import { Button, TextField } from "@mui/material";
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
    backgroundColor: "#3b6e68",
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
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

function MainMessages({ currentUser, conversation }) {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const scrollRef = useRef();

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`/getmessage/${conversation?._id}`);
        setMessages(res.data.messages);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [conversation?._id]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const data = {
      conversationId: conversation._id,
      senderId: currentUser._id,
      text,
    };
    try {
      const res = await axios.post("/addmessage", data);
      setMessages([...messages, res.data.message]);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className={classes.box}>
      {conversation != null ? (
        <div className={classes.pvnav}>
          <div className={classes.boxInfo}>
            <div>
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
      ) : (
        <div className={classes.pvnav}>Start New chat</div>
      )}
      <div className={classes.pvMess}>
        {messages?.map((item) => (
          // <div ref={scrollRef}>
          <Message
            key={item._id}
            message={item}
            own={currentUser._id === item.senderId}
          />
          // </div>
        ))}
      </div>
      <div className={classes.messBox}>
        <form onSubmit={handleSendMessage}>
          <TextField
            type="text"
            value={text}
            placeholder="write your message"
            onChange={handleText}
          />
          <Button type="submit" value="Send">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default MainMessages;
