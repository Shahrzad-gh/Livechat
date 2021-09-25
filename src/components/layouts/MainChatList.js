import React from "react";
import { makeStyles } from "@mui/styles";

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
function MainChatLists() {
  const classes = useStyles();

  return (
    <div className={classes.info}>
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
        </div>
        <div>
          <ul className={classes.navStyle}>
            <li>message</li>
            <li>call</li>
            <li>groups</li>
          </ul>
        </div>
      </div>
      <div className={classes.chatList}>
        <div>
          <div className={classes.chatBarStyle}>
            <div>
              <p>
                <b>Chats</b>
              </p>
            </div>
            <div>
              <span>+</span>
            </div>
          </div>
          <div>search</div>
        </div>
        <ul className={classes.pvList}>
          <li>
            <div className={classes.avatarStyle}>
              <div>
                {" "}
                <div>
                  <img
                    alt="Pic"
                    src="https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280-600x600.png"
                    width={25}
                    height={25}
                    style={{ borderRadius: 50, border: "1px solid gray" }}
                  />
                </div>
              </div>
              <div>
                <div>Mina</div>
                <div>Hi I wanna be ...</div>
              </div>
            </div>
            <div>
              <div> 11:24</div>
              <div>2</div>
            </div>
          </li>
          <li>
            <div className={classes.avatarStyle}>
              <div>
                {" "}
                <div>
                  <img
                    alt="Pic"
                    src="https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280-600x600.png"
                    width={25}
                    height={25}
                    style={{ borderRadius: 50, border: "1px solid gray" }}
                  />
                </div>
              </div>
              <div>
                <div>AmirHossein B</div>
                <div>Hi I wanna be ...</div>
              </div>
            </div>
            <div>
              <div> 11:24</div>
              <div>2</div>
            </div>
          </li>
          <li>
            <div className={classes.avatarStyle}>
              <div>
                {" "}
                <div>
                  <img
                    alt="Pic"
                    src="https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280-600x600.png"
                    width={25}
                    height={25}
                    style={{ borderRadius: 50, border: "1px solid gray" }}
                  />
                </div>
              </div>
              <div>
                <div>Sherry Gh</div>
                <div>Hi I wanna be ...</div>
              </div>
            </div>
            <div>
              <div> 11:24</div>
              <div>2</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainChatLists;
