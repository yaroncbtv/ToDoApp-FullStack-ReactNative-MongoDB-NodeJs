const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String },
});

module.exports = Data = mongoose.model("data", DataSchema);