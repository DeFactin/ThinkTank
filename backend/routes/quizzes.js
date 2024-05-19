const express = require("express");

const router = express.Router();

// GET all quizzes
router.get("/", (req, res) => {
  res.json({ msg: "GET all quizzes" });
});
// GET single quiz
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single workout" });
});

// POST a new quiz
router.post("/", (req, res) => {
  res.json({ msg: "POST a new workout" });
});

// DELETE a quiz
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" });
});

// UPDATE a quiz
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" });
});

module.exports = router;
