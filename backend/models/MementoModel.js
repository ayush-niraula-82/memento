const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mementoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  mood: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Memento", mementoSchema);
