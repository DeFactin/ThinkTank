import { Link } from "react-router-dom"

const HistoryQuiz = () => {
  return(
    <div class="quiz-container">
  <h1>History Quiz</h1>
  <hr />
  <form id="quiz-form">
    <div class="d-flex">
      <div class="question">
        <p>1. What is the capital of France?</p>
        <div class="answers">
          <label>
            <input type="radio" name="q1" value="a" />
            Paris
          </label>
          <label>
            <input type="radio" name="q1" value="b" />
            Madrid
          </label>
          <label>
            <input type="radio" name="q1" value="c" />
            London
          </label>
          <label>
            <input type="radio" name="q1" value="d" />
            Rome
          </label>
        </div>
      </div>
      
      <div class="question">
        <p>2. What is the largest planet in our solar system?</p>
        <div class="answers">
          <label>
            <input type="radio" name="q2" value="a" />
            Venus
          </label>
          <label>
            <input type="radio" name="q2" value="b" />
            Mars
          </label>
          <label>
            <input type="radio" name="q2" value="c" />
            Jupiter
          </label>
          <label>
            <input type="radio" name="q2" value="d" />
            Saturn
          </label>
        </div>
      </div>
    </div>
    <button onClick={() => calculateScore()} type="submit" class="submit-btn">Submit</button>
  </form>
  
  <div class="result" id="result"></div>
</div>
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