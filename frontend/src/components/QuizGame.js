import { useEffect, useState } from "react";

const QuizGame = () => {

    const [quizzes, setQuizzes] = useState(null)

    useEffect(() => {
        const fetchQuizzes = async () => {
            const response = await fetch ('/api/quizzes')
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

            
            {quizzes && quizzes.map(quiz => (
                <form id="quiz-form">
                <div class="d-flex">
                <div class="question">
                    <p key={quiz._id}> {quiz.question}</p>
                    <div class="answers">
                    <label>
                        <input type="radio" name="q1" value="a" />{quiz.answer1}
                        
                    </label>
                    <label>
                        <input type="radio" name="q2" value="b" />{quiz.answer2}
                        
                    </label>
                    <label>
                        <input type="radio" name="q3" value="c" />{quiz.answer3} 
                        
                    </label>
                    <label>
                        <input type="radio" name="q4" value="d" />{quiz.answer4}
                    </label>
                    </div>
                </div>
                
                </div>
               
            </form>

            ))}

             <button type="submit" class="submit-btn">Submit</button>
            
</div>

    )
}

export default QuizGame

/*const calculateScore = () => {
    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    const correctAnswers = ['c','b','c','b','c'];

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
};*/