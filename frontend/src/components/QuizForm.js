import { useState } from "react";

const QuizForm = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const quiz = { title, question, answer1, answer2, answer3, answer4};

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
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setQuestion("");
      setAnswer1("");
      setAnswer2("");
      setAnswer3("");
      setAnswer4("");
      console.log("new quiz added:", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New quiz</h3>

      <label>Quiz Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Question: </label>
      <input
        type="text"
        onChange={(e) => setQuestion(e.target.value)}
        value={question}
      />

      <label>A: </label>
      <input
        type="text"
        onChange={(e) => setAnswer1(e.target.value)}
        value={answer1}
      />
      <label>B: </label>
      <input
        type="text"
        onChange={(e) => setAnswer2(e.target.value)}
        value={answer2}
      />
      <label>C: </label>
      <input
        type="text"
        onChange={(e) => setAnswer3(e.target.value)}
        value={answer3}
      />
      <label>D: </label>
      <input
        type="text"
        onChange={(e) => setAnswer4(e.target.value)}
        value={answer4}
      />

      <button>Add quiz</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default QuizForm
