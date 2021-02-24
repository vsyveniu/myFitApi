const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    requiered: true,
    max: 255,
    min: 6,
  },
  email: {
    type: String,
    unique: true,
    requiered: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    requiered: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
