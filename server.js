require("dotenv").config();
const express = require("express");

const server = express();

server.use(express.json());
const userRouter = require("./app/routes/userRouter");
const { default: mongoose } = require("mongoose");

server.use("/", userRouter);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
