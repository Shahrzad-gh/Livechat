import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import axios from "axios";

const useStyles = makeStyles(() => ({
  navStyle: {
    display: "inline-flex",
    listStyle: "none",
    "@global": {
      li: {
        margin: "5px",
      },
    },
  },
  chatList: {
    height: "auto",
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
  pvList: {
    display: "block",
    padding: 0,
    borderRadius: "5px",
    listStyle: "none",
    "@global": {
      li: {
        borderRadius: "5px",
        margin: "5px",
        display: "flex",
        backgroundColor: "#fff",
        justifyContent: "space-around",
      },
    },
  },
  avatarStyle: {
    display: "inline-flex",
    padding: "5px",
    alignItems: "center",
    textAlign: "justify",
  },
  chatBarStyle: {
    display: "inline-flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
}));
function Conversation({ conversation, currentUser }) {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const defaultProfilePic =
    "https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280-600x600.png";
  useEffect(() => {
    const friendId = conversation.members.find(
      (item) => item !== currentUser._id
    );

    const getUser = async () => {
      const res = await axios.get(`/getUser?userId=${friendId}`);
      setUser(res.data);
    };
    getUser();
  }, [conversation.members, currentUser]);
  return (
    <div>
      <div className={classes.avatarStyle}>
        <div>
          <div>
            <img
              alt="Pic"
              src={
                user.profilePicture ? user.profilePicture : defaultProfilePic
              }
              width={25}
              height={25}
              style={{ borderRadius: 50, border: "1px solid gray" }}
            />
          </div>
        </div>
        <div>
          <div>{user.firstName}</div>
          <div>Hi I wanna be ...</div>
        </div>
      </div>
      <div>
        <div> 11:24</div>
        <div>2</div>
      </div>
    </div>
  );
}

export default Conversation;
