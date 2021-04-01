const mongoose = require("mongoose");

const chainSchema = new mongoose.Schema({
  onwer: {
    type: String,
    requiered: true,
    max: 255,
    min: 3,
  },
  id: {
    type: Number,
    unique: true,
    requiered: true,
  },
  set: {
    type: Array,
  },
});

module.exports = mongoose.model("chain", chainSchema);
