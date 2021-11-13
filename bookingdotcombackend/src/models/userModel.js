const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  saved: [{ type: Object, required: false }],
  bookings: [{ type: Object, required: false }],
});

const User = mongoose.model("users", userSchema);

module.exports = User;
