import React from "react";
import { makeStyles } from "@mui/styles";
import introPic from "../../assets/1.png";
import teamPic from "../../assets/2.png";
import bussinesPic from "../../assets/3.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  intro: {
    backgroundColor: "#3b6e68",
    height: "90vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    color: "#FFF",
  },
  team: {
    padding: 50,
    backgroundColor: "#fff",
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  fontStyle: {
    fontSize: 70,
    fontWeight: "bolder",
    marginBottom: 0,
  },
  text: {
    padding: 10,
    margin: "0 30px",
  },
  btnTeam: {
    width: "fit-content",
    padding: "5px 25px",
    color: "#3b6e69",
    display: "center",
    borderRadius: 25,
    backgroundColor: "#becdcc",
    "&:hover": {
      background: "#3b6e68",
      color: "#FFF",
    },
  },
  paragraphStyle: {
    width: "700px",
    textAlign: "center",
    margin: "10px",
  },
  business: {
    backgroundColor: "#ebf0f0",
    height: "90vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    color: "#000",
  },
  btnBusi: {
    width: "fit-content",
    padding: "5px 25px",
    color: "#3b6e69",
    margin: "10px",
    borderRadius: 25,
    backgroundColor: "#becdcc",
    "&:hover": {
      background: "#3b6e68",
      color: "#FFF",
    },
  },
  btnIntro: {
    width: "fit-content",
    color: "#FFF",
    margin: "10px",
    padding: "5px 25px",
    border: "2px solid #FFF",
    borderRadius: 25,
    "&:hover": {
      background: "#e36139",
    },
  },

  btn: {
    display: "inline-flex",
    "&p": {
      margin: 0,
    },
  },
  busiFontStyle: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 0,
  },
  teamFontStyle: {
    fontSize: 30,
    marginBottom: 0,
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.intro}>
        <div className={classes.text}>
          <p className={classes.fontStyle}>
            Have your <br /> best chat
          </p>
          <p>fast, easy and unlimited team chat.</p>
          <div className={classes.btn}>
            <p className={classes.btnIntro}>Try It Fee</p>
            <p className={classes.btnIntro}>Get A Demo</p>
          </div>
        </div>
        <div>
          <img src={introPic} alt="IntoPicture" />
        </div>
      </div>
      <div className={classes.team}>
        <p>
          <b className={classes.teamFontStyle}>Instant team chat</b>
        </p>
        <p className={classes.paragraphStyle}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab harum
          nihil commodi, doloribus dolorem dicta qui dolorum perferendis?
          Beatae, ipsum alias voluptas corrupti veritatis nobis! Dignissimos
          voluptate aperiam at eum sed optio, incidunt fugit nostrum cupiditate
          deleniti nemo doloribus provident nisi blanditiis rerum reprehenderit
          voluptatem accusantium delectus! Doloribus, deserunt pariatur.
        </p>
        <p className={classes.btnTeam}>Learn More</p>
        <img src={teamPic} alt="teamChatPicture" />
      </div>
      <div className={classes.business}>
        <div>
          <img src={bussinesPic} alt="IntoPicture" />
        </div>
        <div className={classes.text}>
          <p className={classes.busiFontStyle}>
            best solution for <br /> small businesses
          </p>
          <p>pricing plans that fit like a glove.</p>
          <div className={classes.btn}>
            <p className={classes.btnBusi}>Try It Fee</p>
            <p className={classes.btnBusi}>Get A Demo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
