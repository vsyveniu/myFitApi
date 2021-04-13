const mongoose = require("mongoose");

const chainSchema = new mongoose.Schema({
  _id: {
    type: String,
    requiered: true,
  },
  seq: {
    type: Number,
    requiered: true,
  },
});

module.exports = mongoose.model("counter", counterSchema);
