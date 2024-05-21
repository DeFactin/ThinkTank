import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages and components
<<<<<<< HEAD
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Flashcards from "./pages/Flashcards";
import Quizzes from "./pages/Quizzes";
import NewQuiz from "./pages/NewQuiz";
=======
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Flashcards from './pages/Flashcards'
import Quizzes from './pages/Quizzes'
import NewQuiz from './pages/NewQuiz'
import HistoryQuiz from './pages/HistoryQuiz'
>>>>>>> ec6ce16e8b5c8a141419e92365255aeb3dc3bf28

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Home />}></Route>
            <Route path="/flashcards" element={<Flashcards />}></Route>
            <Route path="/quizzes" element={<Quizzes />}></Route>
            <Route path="/newquiz" element={<NewQuiz />}></Route>
=======
            <Route
              path="/"
              element={<Home />}
            >
            </Route>
            <Route
              path="/flashcards"
              element={<Flashcards />}
            >
            </Route>
            <Route
              path="/quizzes"
              element={<Quizzes />}
            >
            </Route>
            <Route
              path="/historyquiz"
              element={<HistoryQuiz />}
            >
            </Route>
>>>>>>> ec6ce16e8b5c8a141419e92365255aeb3dc3bf28
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
