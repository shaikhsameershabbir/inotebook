import mongoose from "mongoose";
const { Schema } = mongoose;

const NoteSchema = new Schema({
  title: {
    type: String,
    require: true,
  },

  discription: {
    type: String,
    require: true,
  },
  tag: {
    type: String,
    require: true,
    default: "General",
  },
  date: {
    type: date,
    require: Date.now,
  },
});

module.exports = mongoose.model("notes", NoteSchema);
