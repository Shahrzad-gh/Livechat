import React from "react";
import { makeStyles } from "@mui/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "fit-content",
    flexDirection: "column",
    fontSize: 12,
  },
  links: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
  },
  list: {
    flexDirection: "column",
    display: "contents",
    "@global": {
      ul: {
        flexDirection: "column",
        listStyle: "none",
      },
      "li:first-child": {
        padding: 15,
        fontWeight: "bold",
      },
    },
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.links}>
        <div>
          <p>
            <b>Live</b>Chat
          </p>
          <p>Not all chat platforms are created equal</p>
        </div>
        <div className={classes.list}>
          <ul>
            <li>Help</li>
            <li>Support</li>
            <li>Knowledgebase</li>
            <li>Tutorials</li>
          </ul>
          <ul>
            <li>Features</li>
            <li>Support</li>
            <li>Knowledgebase</li>
            <li>Tutorials</li>
            <li>Tutorials</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>Features</li>
            <li>Support</li>
            <li>Knowledgebase</li>
            <li>Tutorials</li>
            <li>Tutorials</li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <li>info@livechat.com</li>
            <li>+12 34567890</li>
            <li>4 Beheshti Avenue,Karaj, Iran</li>
          </ul>
        </div>
      </div>
      <div className={classes.links}>
        <div>
          <p>@Copyright LiveChat Inc.</p>
          <p>All rights reserved</p>
        </div>
        <div className={classes.social}>
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
