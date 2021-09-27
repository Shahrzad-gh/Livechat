const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoute = require("./Routers/userRouter");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    preflightContinue: false,
    credentials: true,
  })
);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(
      PORT,
      console.log(`App is connected to MongoDB and listen to port ${PORT}`)
    )
  )
  .catch((err) => console.log(err));

app.use(userRoute);
