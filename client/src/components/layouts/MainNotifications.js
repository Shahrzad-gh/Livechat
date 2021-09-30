import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  chatList: {
    height: "auto",
  },
  noti: {
    width: "40vw",
    overflow: "hidden",
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
    width: "100%",
    justifyContent: "space-around",
  },
  suggestionStyle: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
});

function MainNotifications() {
  const classes = useStyles();

  return (
    <div className={classes.noti}>
      <div className={classes.chatList}>
        <div>
          <p>
            <b>Notifications</b>
          </p>
        </div>
        <ul className={classes.pvList}>
          <li>
            <div className={classes.avatarStyle}>
              <div>
                {" "}
                <img
                  alt="Pic"
                  src="https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280-600x600.png"
                  width={25}
                  height={25}
                  style={{ borderRadius: 50, border: "1px solid gray" }}
                />
              </div>
              <div>
                <p>
                  <b>@Nima</b> add you to group <span>15 min ago</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className={classes.avatarStyle}>
              <div>
                {" "}
                <img
                  alt="Pic"
                  src="https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280-600x600.png"
                  width={25}
                  height={25}
                  style={{ borderRadius: 50, border: "1px solid gray" }}
                />
              </div>
              <div>
                <p>
                  <b>@Kian</b>
                  remove you from group
                  <span>15 min ago</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className={classes.avatarStyle}>
              <div>
                {" "}
                <img
                  alt="Pic"
                  src="https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280-600x600.png"
                  width={25}
                  height={25}
                  style={{ borderRadius: 50, border: "1px solid gray" }}
                />
              </div>
              <div>
                <p>
                  <b>@Mina</b>
                  mention you in a comment
                  <span> 5 min ago</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className={classes.chatList}>
        <div>
          <p>
            <b>Suggestions</b>
          </p>
        </div>
        <ul className={classes.pvList}>
          <li>
            <div className={classes.avatarStyle}>
              <div className={classes.suggestionStyle}>
                <div>
                  <img
                    alt="Pic"
                    src="https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280-600x600.png"
                    width={25}
                    height={25}
                    style={{ borderRadius: 50, border: "1px solid gray" }}
                  />
                </div>
                <div>
                  <div>
                    <p>
                      <b>Mina</b>
                    </p>
                  </div>
                  <div>
                    <span>20 Mutual</span>
                  </div>
                </div>
              </div>
              <div>Add</div>
            </div>
          </li>
          <li>
            <div className={classes.avatarStyle}>
              <div className={classes.suggestionStyle}>
                <div>
                  <img
                    alt="Pic"
                    src="https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280-600x600.png"
                    width={25}
                    height={25}
                    style={{ borderRadius: 50, border: "1px solid gray" }}
                  />
                </div>
                <div>
                  <div>
                    <p>
                      <b>Kian</b>
                    </p>
                  </div>
                  <div>
                    <span>12 Mutual</span>
                  </div>
                </div>
              </div>
              <div>Add</div>
            </div>
          </li>
          <li>
            <div className={classes.avatarStyle}>
              <div className={classes.suggestionStyle}>
                <div>
                  <img
                    alt="Pic"
                    src="https://www.senertec.de/wp-content/uploads/2020/04/blank-profile-picture-973460_1280-600x600.png"
                    width={25}
                    height={25}
                    style={{ borderRadius: 50, border: "1px solid gray" }}
                  />
                </div>
                <div>
                  <div>
                    <p>
                      <b>Shery</b>
                    </p>
                  </div>
                  <div>
                    <span>1 Mutual</span>
                  </div>
                </div>
              </div>
              <div>Add</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainNotifications;
