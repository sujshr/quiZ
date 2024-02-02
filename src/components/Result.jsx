import React from "react";
import { Link } from "react-router-dom";
const Result = ({ score, attempted, numberOfQuestions, resetQuiz }) => {
  const percentage = ((score / numberOfQuestions) * 100).toFixed(2);

  return (
    <div id="result">
      <h2>You Scored: {score}</h2>
      <p>Total Questions : {numberOfQuestions}</p>
      <p>You Attempted: {attempted}</p>
      <p>The percentage: {percentage}%</p>
      <Link to="/">
        <button id="playAgain" onClick={resetQuiz}>
          Play Again
        </button>
      </Link>
    </div>
  );
};

export default Result;
