import { Link } from "react-router-dom";

const Quizzes = () => {
  return (
    <div className="mainDiv">
      <div>
        <Link to="/NewQuiz">
          <h1>Create New Quiz</h1>
        </Link>
      </div>
      <div>
        <Link to="/">
          <h1>History</h1>
        </Link>
      </div>
      <div>
        <Link to="/">
          <h1>Math</h1>
        </Link>
      </div>
      <div>
        <Link to="/">
          <h1>Geography</h1>
        </Link>
      </div>
      <div>
        <Link to="/">
          <h1>Language</h1>
        </Link>
      </div>
      <div>
        <Link to="/">
          <h1>Music</h1>
        </Link>
      </div>
    </div>
  );
};

export default Quizzes;
