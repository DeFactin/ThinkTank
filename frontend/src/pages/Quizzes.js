import { Link } from "react-router-dom";

const Quizzes = () => {
  return (
    <div className="mainDiv">
      <div>
        <Link to="/NewQuiz">
          <h1>Create New Quiz</h1>
        </Link>
      </div>

      <hr></hr>
      <h1> Play our quizzes! </h1>
      <section className="games">
      
        <div className="container">
          <div className="item">
          <Link to="/HistoryQuiz">
            <h2>History</h2>
          </Link>
        </div>
        <div className="item">
          <Link to="/">
            <h2>Math</h2>
          </Link>
        </div>
        <div className="item">
          <Link to="/">
            <h2>Geography</h2>
          </Link>
        </div>
        <div className="item">
          <Link to="/">
            <h2>Language</h2>
          </Link>
        </div>
        <div className="item">
          <Link to="/">
            <h2>Music</h2>
          </Link>
        </div>
        <div className="item">
          <Link to="/">
            <h2>Physics</h2>
          </Link>
        </div>
        </div>

      </section>
      
    </div>
  );
};

export default Quizzes;
