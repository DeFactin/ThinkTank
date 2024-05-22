const Quiz = require("../models/quizzesModels");
const mongoose = require("mongoose");

// GET all quizzes
const getQuizzes = async (req, res) => {
    const quizzes = await Quiz.find({}).sort({createdAt: -1})


    res.status(200).json(quizzes)
}

// GEt a single quiz
const getQuiz = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such quiz'})
    }

    const quiz = await Quiz.findById(id)

    if(!quiz) {
        return res.status(404).json({error: 'No such quiz'})
    }
    res.status(200).json(quiz)  
}

// create new quiz
const createQuiz = async (req, res) => {
  const { title, questions } = req.body; // assuming questions is an array of question objects

  // Validate that questions is an array and has at least one question
  if (!Array.isArray(questions) || questions.length === 0) {
    return res
      .status(400)
      .json({ error: "At least one question is required." });
  }

  // add doc to db
  try {
    const quiz = await Quiz.create({
      title,
      questions, // save the array of questions
    });
      
    res.status(200).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// delete a quiz
const deleteQuiz = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such quiz" });
  }

  const quiz = await Quiz.findOneAndDelete({ _id: id });

  if (!quiz) {
    return res.status(400).json({ error: "No such quiz" });
  }

  res.status(200).json(quiz);
};

//update a quiz
const updateQuiz = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such quiz" });
  }

  const quiz = await Quiz.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!quiz) {
    return res.status(400).json({ error: "No such flashcard" });
  }

  res.status(200).json(quiz);
};




module.exports = {
    getQuizzes,
    getQuiz,
    createQuiz,
    deleteQuiz,
    updateQuiz
}