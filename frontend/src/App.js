import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages and components

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Flashcards from './pages/Flashcards'
import Quizzes from './pages/Quizzes'
import NewQuiz from './pages/NewQuiz'
import HistoryQuiz from './pages/HistoryQuiz'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>

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
            <Route
              path="/newquiz"
              element={<NewQuiz/>}
            >
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;