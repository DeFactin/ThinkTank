const Quiz = require("../models/quizzesModels");

// GET all quizzes
const getQuizzes = async (req, res) => {
    const quizzes = await Quiz.find({}).sort({createdAt: -1})


    res.status(200).json(quizzes)
}

// GEt a single quiz
const getQuiz = async (req,res) => {
    const {id} = req.params

    const quizzes = await Quiz.findById(id)

    if(!quiz) {
        return res.status(404).json({error: 'No such quiz'})
    }
    res.status(200).json(quiz)  
}

// create new quiz
const createQuiz = async (eq, res) => {
    const { title, question, answer1, answer2, answer3, answer4 } = req.body;

    // add doc to db
    try {
      const quiz = await Quiz.create({
        title,
        question,
        answer1,
        answer2,
        answer3,
        answer4,
      });
      res.status(200).json(quiz);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

// delete a quiz

// update a quiz

module.export = {
    getQuizzes,
    getQuiz,
    createQuiz
}