import { useEffect, useState } from "react";

const QuizGame = () => {

    const [quizzes, setQuizzes] = useState(null)

    useEffect(() => {
        const fetchQuizzes = async () => {
            const response = await fetch ('/api/historyquizzes')
            const json = await response.json()

            if (response.ok) {
                setQuizzes(json)
            }
        }

        fetchQuizzes()

    }, [])
    return(
        <div class="quiz-container">
            <h1>History Quiz</h1>
            <hr />
            {quizzes && quizzes.map(quiz => (
                <form id="quiz-form">
                <div class="d-flex">
                <div class="question">
                    <p key={quiz._id}>1. {quiz.question}</p>
                    <div class="answers">
                    <label>
                        <input key={quiz.answer1} type="radio" name="q1" value="a" />
                        Paris
                    </label>
                    <label>
                        <input key={quiz.answer2} type="radio" name="q1" value="b" />
                        Madrid
                    </label>
                    <label>
                        <input key={quiz.answer3} type="radio" name="q1" value="c" />
                        London
                    </label>
                    <label>
                        <input key={quiz.answer4} type="radio" name="q1" value="d" />
                        Rome
                    </label>
                    </div>
                </div>
                
                </div>
                <button onClick={() => calculateScore()} type="submit" class="submit-btn">Submit</button>
            </form>

            ))}
            
  
  <div class="result" id="result"></div>
</div>

    )
}

export default QuizGame

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