const express = require('express');
const {
  getQuizzes,
  getQuiz,
  createQuiz,
  deleteQuiz,
  updateQuiz
} = require("../controllers/quizController");

const router = express.Router();

// GET all quizzes
router.get("/", getQuizzes);
// GET single quiz
router.get("/:id", getQuiz);

// POST a new quiz
router.post("/", createQuiz);

// DELETE a quiz
router.delete("/:id", deleteQuiz);

// UPDATE a quiz
router.patch("/:id", updateQuiz);

module.exports = router;
