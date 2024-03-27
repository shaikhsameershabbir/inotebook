const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes.js");
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser.js");
// Get all the notes Login required"/api/auth/fetchallnotes"
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});
// Add New note Login REQUIRED "/api/auth/addnote"
router.post(
  "/addnote",
  fetchUser,
  [
    body("title", "Invalid Title ").isLength({ min: 5 }),
    // body("discription", "Invalid Discription").isLength({ min: 5 }),
  ],
  async (req, res) => {
    console.log(req.body);
    // If error then return bad request with error
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }
    const { title, discription, tag } = req.body;
    const note = await new Notes({
      title,
      discription,
      tag,
      user: req.user.id,
    });
    const saveNote = await note.save();
    const notes = await Notes.find({ user: req.user.id });
    console.log("-------------", notes);
    res.json(notes);
  }
);
// Update note Router Login required"/api/auth/updatenote"
router.put("/updatenote/:id", fetchUser, async (req, res) => {
  const { title, discription, tag } = req.body;

  let newNote = {};

  if (title) newNote.title = title;
  if (discription) newNote.discription = discription;
  if (tag) newNote.tag = tag;

  // find the note to be updated
  const note = await Notes.findById(req.params.id);
  if (!note) res.status(404).send("Not Found ");
  // checking if it is different user
  if (note.user.toString() !== req.user.id) res.status(404).send("Not Allowd ");
  // Updatign Note by ID
  const updatedNote = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );

  res.json(updatedNote);
});
// Delete note Router using delete  Login required"/api/auth/deletenote"
router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  const { title, discription, tag } = req.body;
  // find the note to be Deleted
  try {
    const note = await Notes.findById(req.params.id);
    // checking if it is different user
    if (note.user.toString() !== req.user.id)
      res.status(404).send("Not Allowd ");
    // Updatign Note by ID
    const del = await Notes.findByIdAndDelete(req.params.id);
    res.json({ success: "Note haasbeen deleted" });
  } catch (error) {
    // Handle any errors
    res.status(404).send("Not Allowd ");
  }
});

module.exports = router;
