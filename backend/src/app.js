const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173","https://ai-interview-helper-ten.vercel.app"],
    credentials: true,
  }),
);

//Require all the routes here
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

// using all the routes here
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);
//testing route
app.get("/test", (req, res) => {
  res.send("Your app is runnning")
})

module.exports = app;
