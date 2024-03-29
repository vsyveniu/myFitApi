const mongoose = require("mongoose");

const chainSchema = new mongoose.Schema({
  owner: {
    type: String,
    requiered: true,
    max: 255,
    min: 3,
  },
  set: {
    type: Array,
  },
});

module.exports = mongoose.model("chain", chainSchema);
