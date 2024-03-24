const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes.js");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser.js");
// Get all the notes
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});
// Add New note Login REQUIRED
router.post(
  "/addnote",
  fetchUser,
  [
    body("title", "Invalid Title ").isLength({ min: 5 }),
    body("discription", "Invalid Discription").isLength({ min: 5 }),
  ],
  async (req, res) => {
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
    res.json(notes);
  }
);

module.exports = router;
