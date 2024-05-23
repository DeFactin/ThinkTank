const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  questionText: {
    type: String,
    required: true,
  },
  answer1: {
    type: String,
    required: true,
  },
  answer2: {
    type: String,
    required: true,
  },
  answer3: {
    type: String,
    required: true,
  },
  answer4: {
    type: String,
    required: true,
  },
});

const quizSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [questionSchema], // embed the questions schema as an array
});

module.exports = mongoose.model("Quiz", quizSchema);
