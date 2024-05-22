import { Link } from "react-router-dom"
import QuizGame from '../components/QuizGame'
const HistoryQuiz = () => {
  return(
    <QuizGame></QuizGame>
  ) 
};

export default HistoryQuiz

const calculateScore = () => {
    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    const correctAnswers = ['a', 'c'];

    quizForm.addEventListener('submit', e => {
      e.preventDefault();
      
      let score = 0;
      const userAnswers = [quizForm.q1.value,quizForm.q2.value];
      userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
          score += 1;
        }
      });

      if (score < 3) {
        resultDiv.innerHTML = `You need to study harder! Score is ${score}/${correctAnswers.length},`;
      }
      else if (score == 4) {
        resultDiv.innerHTML = `You are very good, but still need little more practise! Score is ${score}/${correctAnswers.length},`;
      }
    
      else if (score == 5) {
        resultDiv.innerHTML = `You are brilliant! Keep up! Score is ${score}/${correctAnswers.length},`;
    
    }});
};