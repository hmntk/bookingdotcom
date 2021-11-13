const mongoose = require("mongoose");
require("dotenv").config();

const connect = () =>
  mongoose.connect(
    `mongodb+srv://admin:${process.env.PASSWORD}@cluster0.pfsfr.mongodb.net/db?retryWrites=true&w=majority`
  );
// mongoose.connect("mongodb://127.0.0.1:27017/pagination");

module.exports = connect;
