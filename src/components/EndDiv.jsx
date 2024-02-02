import React from "react";
import "./EndDiv.css";
import { Link } from "react-router-dom";

export default function EndDiv({ display, setdisplay, path, resetQuiz }) {
  return (
    <div id="endQuizDiv" style={{ display: display }}>
      <h2>Sure to end the quiz?</h2>
      <div id="endButtonDiv">
        <button id="cancleButton" onClick={setdisplay}>
          Cancel
        </button>

        <Link to={path}>
          <button id="endButton" onClick={resetQuiz}>
            Quit
          </button>
        </Link>
      </div>
    </div>
  );
}
