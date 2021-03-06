import React from "react";
import { Link } from "react-router-dom";

function Finish(props) {
  return (
    <div className="finish-page">
      <div className="content-finish content__finish-page animated slideInRight">
        <p className="score">
          {props.score}/{props.questions.length} <br /> <span>Your Score</span>
        </p>

        <Link to="/" className="start-button">
          Play Again
        </Link>
      </div>
    </div>
  );
}

export default Finish;
