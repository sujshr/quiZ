import React, { useState } from "react";
import Buttons from "./Buttons";
import "./Questions.css";
import EndDiv from "./EndDiv";

const Questions = ({
  data,
  increaseScore,
  setAttempted,
  attempted,
  score,
  resetQuiz,
}) => {
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [display, setDisplay] = useState("none");
  const [display2, setDisplay2] = useState("none");

  const goToPrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const goToNext = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleOptionSelect = (selectedOption) => {
    setAnswered(true);
    const correctAnswer = data[index].answer;

    if (!attempted.includes(index)) {
      setAttempted([...attempted, index]);
      if (selectedOption == correctAnswer) increaseScore(score + 1);
    }

    if (selectedOption === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      setAnswered(false);
      setIsCorrect(false);
    }, 1000);
    goToNext();
  };

  return (
    <div id="questionDiv">
      <EndDiv
        display={display}
        setdisplay={() => {
          setDisplay("none");
        }}
        path="/"
        resetQuiz={resetQuiz}
      />
      <EndDiv
        display={display2}
        setdisplay={() => {
          setDisplay2("none");
        }}
        path="/result"
      />
      {answered && (
        <div id="message">
          {isCorrect ? "Correct Answer!!" : "Wrong Answer :("}
        </div>
      )}
      <div id="question">
        <p>
          Question {index + 1}/{data.length}
        </p>
        <p id="q">{data[index].question}</p>
      </div>

      <div id="options">
        <div
          className="option"
          onClick={() => handleOptionSelect(data[index].optionA)}
        >
          <p>{data[index].optionA}</p>
        </div>
        <div
          className="option"
          onClick={() => handleOptionSelect(data[index].optionB)}
        >
          <p>{data[index].optionB}</p>
        </div>
        <div
          className="option"
          onClick={() => handleOptionSelect(data[index].optionC)}
        >
          <p>{data[index].optionC}</p>
        </div>
        <div
          className="option"
          onClick={() => handleOptionSelect(data[index].optionD)}
        >
          <p>{data[index].optionD}</p>
        </div>
      </div>
      <Buttons
        previous={goToPrevious}
        next={goToNext}
        setDisplay={() => {
          setDisplay("flex");
        }}
      />
      <button
        id="finishButton"
        onClick={() => {
          setDisplay2("flex");
        }}
      >
        Finish
      </button>
    </div>
  );
};

export default Questions;
