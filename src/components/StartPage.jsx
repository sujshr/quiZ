import React from "react";
import "./StartPage.css";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div id="startPage">
      <h2>Begin Quiz Mania</h2>
      <Link to="/quiz">
        <button id="startButton">Start quiz</button>
      </Link>
    </div>
  );
};

export default StartPage;
