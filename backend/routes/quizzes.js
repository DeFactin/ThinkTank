const express = require("express");
const {
  createQuiz,
  getQuizzes,
  getQuiz,
} = require("../controllers/quizController");

const router = express.Router();

// GET all quizzes
router.get("/", getQuizzes);
// GET single quiz
router.get("/:id", getQuiz);

// POST a new quiz
router.post("/", createQuiz);

// DELETE a quiz
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" });
});

// UPDATE a quiz
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" });
});

module.exports = router;
