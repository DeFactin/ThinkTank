import { Link } from "react-router-dom";
import "../index.css";
import { CiCirclePlus } from "react-icons/ci";

const Quizzes = () => {
  return (
    <div className="mainDiv">
      <div>
        <h4>Create new quiz</h4>
        <Link to="/NewQuiz">
          <CiCirclePlus className="newquiz" />
        </Link>
      </div>
      <br></br>
      <br></br>
      <br></br>

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
