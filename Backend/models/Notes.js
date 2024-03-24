const mongoose = require("mongoose");
const { Schema } = mongoose;

const NoteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

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
  // date: {
  //   type: date,
  //   require: Date.now(),
  // },
});

const Notes = mongoose.model("notes", NoteSchema);

module.exports = Notes;
