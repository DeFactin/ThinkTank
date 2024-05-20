import { Link } from "react-router-dom";
import QuizForm from "../components/QuizForm";

const Quizzes = () => {
  return (
    <div className="mainDiv">
      <div>
        <QuizForm/>
      </div>

      

      <section className="games">
      <h1> Play our quizzes! </h1>
        <div className="container">
          <div className="item">
          <Link to="/HistoryQuiz.js">
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