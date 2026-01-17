import React from "react";
import { Link } from "react-router-dom";
import "./Rewiev.scss";

const Rewiev = () => {
  return (
    <div className="rewiev">
      <div className="rewiev__header">
        <div className="container">
          <div className="rewiev__wrapper">
            <Link to="/tests">
              <button className="rewiev__btn">
                <img src="./arrow1.svg" alt="back" />
              </button>
            </Link>
            <h2 className="rewiev__title">Answers review</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="rewiev__boxes">
          {/* QUESTION 1 */}
          <div className="rewiev__box">
            <input type="checkbox" id="reading-q1" />

            <label htmlFor="reading-q1">
              <h4>Listening</h4>
              <h2>Which paragraph contains the following information?</h2>
            </label>

            <div className="rewiev__content">
              <h1>
                1. How electroreception can be used to help fish reproduce
              </h1>

              <div className="rewiev__answer wrong">
                <h5>B</h5>
                <h6>Your answer</h6>
              </div>

              <div className="rewiev__answer right">
                <h5>A</h5>
                <h6>Right answer</h6>
              </div>
              <h1>
                2. How electroreception can be used to help fish reproduce
              </h1>

              <div className="rewiev__answer wrong">
                <h5>A</h5>
                <h6>Your answer</h6>
              </div>

              <div className="rewiev__answer right">
                <h5>B</h5>
                <h6>Right answer</h6>
              </div>
            </div>
          </div>

          <div className="rewiev__box">
            <input type="checkbox" id="reading-q2" />

            <label htmlFor="reading-q2">
              <h4>Reading</h4>
              <h2>Which paragraph contains the following information?</h2>
            </label>

            <div className="rewiev__content">
              <h1>
                1. Why electroreception can be used to help fish reproduce
              </h1>

              <div className="rewiev__answer wrong">
                <h5>B</h5>
                <h6>Your answer</h6>
              </div>

              <div className="rewiev__answer right">
                <h5>A</h5>
                <h6>Right answer</h6>
              </div>
            </div>
          </div>

          {/* WRITING */}
          <div className="rewiev__box">
            <h4>Writing Review</h4>
            <h2>Your essays have been analyzed by AI.</h2>
            <ul>
              <li>Task Achievement feedback</li>
              <li>Grammar corrections</li>
              <li>Vocabulary suggestions</li>
              <li>Coherence & cohesion notes</li>
              <li>Highlighted improvements</li>
            </ul>
            <button className="rewiev__button">View Feedback</button>
          </div>

          {/* SPEAKING */}
          <div className="rewiev__box">
            <h4>Speaking Review</h4>
            <h2>Your recording has been processed.</h2>
            <ul>
              <li>Pronunciation score</li>
              <li>Fluency notes</li>
              <li>Vocabulary usage</li>
              <li>Grammar suggestions</li>
              <li>Audio playback</li>
            </ul>
            <button className="rewiev__button">View Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewiev;
