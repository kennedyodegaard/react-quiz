import React from "react";
import mainImage from "./images/main-img.jpg";
import { Link } from "react-router-dom";

function Start(props) {
  return (
    <div className="start-page">
      <div className="content">
        <img className="animated bounceInUp" src={mainImage} alt="UBF_logo" />
        <p className="animated bounceInLeft">
          A REVOLUTION IN AVIATION TRAINING <br />
          NEXT-GENERATION SOFTWARE SOLUTIONS FOR INDIVIDUALS, AIRLINES & ATOS{" "}
          <br /> <strong>Pick your plan!</strong>
        </p>
        <div className="subscription-options">
          <div className="subscription-option">
            <p>
              With the <strong>Free</strong> subscription plan, you can answer
              and submit the quiz. When you click, you will start the quiz
              immediately. Be sure to study!
            </p>
            <Link to="/quiz" className="animated bounceInRight start-button">
              Free Plan
            </Link>
          </div>
          <div className="subscription-option">
            <p>
              With a <strong>Gold</strong> subscription plan, you can answer and
              submit the quiz and access documentation to prepare for the quiz.
              It costs <strong>£12</strong> a year or{" "}
              <strong>£1.10 a month</strong>.{" "}
            </p>
            <Link
              to="/documentation"
              className="animated bounceInRight start-button"
            >
              Gold Plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
