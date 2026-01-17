import React from "react";
import { Link } from "react-router-dom";
import "./Result.scss";
import { FaSmile } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { BsArrowRepeat } from "react-icons/bs";
import { MdOutlineSaveAlt } from "react-icons/md";
import { PiSmileySadFill } from "react-icons/pi";
import { IoHeadset } from "react-icons/io5";

const Result = () => {
  return (
    <div>
      <div className="result">
        <div className="result__header">
          <div className="container">
            <div className="result__wrapper">
              <Link to="/tests">
                <button className="result__btn">
                  <img src="./arrow1.svg" alt="" />
                </button>
              </Link>
              <h2 className="result__title">Your result</h2>
              <div className="result__time"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="result__boxes">
            <div className="result__box">
              <h1>🎉 </h1>
              <h2>
                You’ve Completed <span>the Full IELTS Mock Test!</span>
              </h2>
              <p>
                Here’s your performance breakdown based on IELTS scoring
                criteria.
              </p>
              <p>12.12.2025</p>
            </div>
            <div className="result__box">
              <h4>Overall Band Score</h4>
              <h2>Band 6.5</h2>
              <div className="result__card">
                <div className="result_icon-1">
                  <FaSmile />
                </div>
                <div className="result__text">
                  <h3>Reading, Listening</h3>
                  <h6>Strong Areas</h6>
                </div>
              </div>
              <div className="result__card">
                <div className="result_icon-2">
                  <PiSmileySadFill />
                </div>
                <div className="result__text">
                  <h3>Writing, Speaking</h3>
                  <h6>Needs Improvement</h6>
                </div>
              </div>
            </div>
            <div className="result__box">
              <h4>Section Breakdown</h4>
              <div className="result__card">
                <div className="result_icon-listening">
                  <img src="/listening.svg" alt="" />
                </div>
                <div className="result__text">
                  <h3>
                    6.0 / 32 <span>Right answers</span>
                  </h3>
                  <h6>Listening</h6>
                </div>
              </div>
              <div className="result__card">
                <div className="result_icon-reading">
                  <img src="/reading.svg" alt="" />
                </div>
                <div className="result__text">
                  <h3>
                    6.0 / 32 <span>Right answers</span>
                  </h3>
                  <h6>Reading</h6>
                </div>
              </div>
              <div className="result__card">
                <div className="result_icon-writing">
                  <img src="/writing.svg" alt="" />
                </div>
                <div className="result__text">
                  <h3>6.0</h3>
                  <h6>writing</h6>
                </div>
              </div>
              <div className="result__card">
                <div className="result_icon-speaking">
                  <img src="/speaking.svg" alt="" />
                </div>
                <div className="result__text">
                  <h3>6.0</h3>
                  <h6>Speaking</h6>
                </div>
              </div>
            </div>
            <div className="result__box">
              <h4>Performance Insights</h4>
              <h2>Personalized highlights</h2>
              <ul>
                <li>
                  You performed better than 78% of learners using the app.
                </li>
                <li>
                  Your strengths include identifying key ideas and understanding
                  complex audio sections.
                </li>
                <li>
                  To improve your overall score, focus more on structured
                  writing and speaking fluency.
                </li>
              </ul>
            </div>
            <div className="result__box">
              <h4>Recommendations</h4>
              <h2>Recommendations</h2>
              <ul>
                <li>Practice 2–3 full mock tests per week.</li>
                <li>
                  Take targeted Reading & Listening mini-tests to boost
                  consistency.
                </li>
                <li>Use AI Speaking sessions daily for fluency improvement.</li>
                <li>Attempt Writing Task 2 practice prompts regularly.</li>
              </ul>
            </div>
            <div className="result__buttons">
              <Link className="result__btn-1" to="/">
                <button className="result__footer-btn">
                  <GrHomeRounded />
                </button>
              </Link>
              <Link className="result__btn-1" to="/tests/mock">
                <button className="result__footer-btn">
                  <BsArrowRepeat />
                </button>
              </Link>
              <Link className="result__btn-1" to="/tests/mock">
                <button className="result__footer-btn">
                  <MdOutlineSaveAlt />
                </button>
              </Link>
              <Link className="result__btn-2" to="/tests/mock">
                <button className="result__footer-btn">Review Answers </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
