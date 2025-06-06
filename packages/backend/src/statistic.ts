const mongoose = require("mongoose");

const statisticSchema = new mongoose.Schema({
  visit: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Statistic", statisticSchema);
