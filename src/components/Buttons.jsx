import React from "react";
import "./Buttons.css";

const Buttons = (props) => {
  return (
    <div id="buttonDiv">
      <button id="previous" onClick={props.previous}>
        Previous
      </button>
      <button id="next" onClick={props.next}>
        Next
      </button>
      <button id="quit" onClick={props.setDisplay}>
        Quit
      </button>
    </div>
  );
};

export default Buttons;
