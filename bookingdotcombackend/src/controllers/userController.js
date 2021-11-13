const express = require("express");
const User = require("../models/userModel");

const router = express.Router();
express().use(express.json());

router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.send(users);
  } catch (error) {
    return res.send(error);
  }
});

router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registered" });
    } else {
      const user = new User({
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "User logged in succesfully", user: user });
      } else {
        res.send({ message: "Password is not correct" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

router.put("/saved", async (req, res) => {});

router.put("/bookings", async (req, res) => {});
module.exports = router;
