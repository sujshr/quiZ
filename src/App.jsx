import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./components/quizQuestion.json";
import Questions from "./components/Questions";
import StartPage from "./components/StartPage";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState([]);

  const resetQuiz = () => {
    setScore(0);
    setAttempted([]);
  };

  return (
    <BrowserRouter>
      <div id="container">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route
            path="/quiz"
            element={
              <Questions
                data={Data}
                increaseScore={setScore}
                attempted={attempted}
                setAttempted={setAttempted}
                score={score}
                resetQuiz={resetQuiz}
              />
            }
          />

          <Route
            path="/result"
            element={
              <Result
                score={score}
                attempted={attempted.length}
                numberOfQuestions={Data.length}
                resetQuiz={resetQuiz}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
