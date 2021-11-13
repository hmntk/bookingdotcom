const express = require("express");
const connect = require("./configs/db");

const app = express();

app.use(express.json());

const userController = require("./controllers/userController");
app.use("/users", userController);

const hotelController = require("./controllers/hotelController");
app.use("/hotel", hotelController);

// const userRegister = require("./controllers/userRegister");
// app.use("/register", userRegister);

app.get("/", (req, res) => {
  res.send("hello and welcome");
});

app.post("/", (req, res) => {
  const users = req.body;
  res.send({ users: users });
});

const start = async (req, res) => {
  await connect();
  app.listen(1234, () => {
    console.log("listening to port 1234");
  });
};

module.exports = start;
