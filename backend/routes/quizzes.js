const express = require("express")
const Quiz = require('../models/quizzesModels')

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
router.post("/", async (req, res) => {
  const {title, question, answer1, answer2, answer3, answer4} = req.body

  try {
    const quiz = await Quiz.create({
      title,
      question,
      answer1,
      answer2,
      answer3,
      answer4,
    });
    res.status(200).json(quiz)
  }
  catch (error) 
  {
    res.status(400).json({error: error.message})
  }
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
