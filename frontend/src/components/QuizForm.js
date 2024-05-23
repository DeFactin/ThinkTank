import { useState } from "react";

const QuizForm = () => {
  const [title, setTitle] = useState("");
  const [question1, setQuestion1] = useState({
    questionText: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });
  const [question2, setQuestion2] = useState({
    questionText: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });
  const [question3, setQuestion3] = useState({
    questionText: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });
  const [question4, setQuestion4] = useState({
    questionText: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });
  const [question5, setQuestion5] = useState({
    questionText: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const quiz = {
      title,
      questions: [question1, question2, question3, question4, question5],
    };

    const response = await fetch("/api/quizzes", {
      method: "POST",
      body: JSON.stringify(quiz),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setError(null);
      setTitle("");
      setQuestion1({
        questionText: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
      });
      setQuestion2({
        questionText: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
      });
      setQuestion3({
        questionText: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
      });
      setQuestion4({
        questionText: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
      });
      setQuestion5({
        questionText: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
      });

      console.log("new quiz added:", json);
    }
  };

  const handleInputChange = (setQuestion, question, field) => (e) => {
    setQuestion({
      ...question,
      [field]: e.target.value,
    });
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Quiz</h3>

      <label>Quiz Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <div>
        <hr></hr>
        <label>
          <b>Question 1:</b>
        </label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion1, question1, "questionText")}
          value={question1.questionText}
        />
        <label>A:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion1, question1, "answer1")}
          value={question1.answer1}
        />
        <label>B:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion1, question1, "answer2")}
          value={question1.answer2}
        />
        <label>C:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion1, question1, "answer3")}
          value={question1.answer3}
        />
        <label>D:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion1, question1, "answer4")}
          value={question1.answer4}
        />
      </div>

      <div>
        <label>
          <b>Question 2:</b>
        </label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion2, question2, "questionText")}
          value={question2.questionText}
        />
        <label>A:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion2, question2, "answer1")}
          value={question2.answer1}
        />
        <label>B:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion2, question2, "answer2")}
          value={question2.answer2}
        />
        <label>C:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion2, question2, "answer3")}
          value={question2.answer3}
        />
        <label>D:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion2, question2, "answer4")}
          value={question2.answer4}
        />
      </div>

      <div>
        <label>
          <b>Question 3:</b>
        </label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion3, question3, "questionText")}
          value={question3.questionText}
        />
        <label>A:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion3, question3, "answer1")}
          value={question3.answer1}
        />
        <label>B:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion3, question3, "answer2")}
          value={question3.answer2}
        />
        <label>C:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion3, question3, "answer3")}
          value={question3.answer3}
        />
        <label>D:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion3, question3, "answer4")}
          value={question3.answer4}
        />
      </div>

      <div>
        <label>
          <b>Question 4:</b>
        </label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion4, question4, "questionText")}
          value={question4.questionText}
        />
        <label>A:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion4, question4, "answer1")}
          value={question4.answer1}
        />
        <label>B:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion4, question4, "answer2")}
          value={question4.answer2}
        />
        <label>C:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion4, question4, "answer3")}
          value={question4.answer3}
        />
        <label>D:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion4, question4, "answer4")}
          value={question4.answer4}
        />
      </div>

      <div>
        <label>
          <b>Question 5:</b>
        </label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion5, question5, "questionText")}
          value={question5.questionText}
        />
        <label>A:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion5, question5, "answer1")}
          value={question5.answer1}
        />
        <label>B:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion5, question5, "answer2")}
          value={question5.answer2}
        />
        <label>C:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion5, question5, "answer3")}
          value={question5.answer3}
        />
        <label>D:</label>
        <input
          type="text"
          onChange={handleInputChange(setQuestion5, question5, "answer4")}
          value={question5.answer4}
        />
      </div>

      <button className="add">Add quiz</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default QuizForm;
