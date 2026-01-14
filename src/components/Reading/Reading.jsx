import React from "react";
import "./Reading.scss";
import { Link } from "react-router-dom";
const Reading = () => {
  return (
    <div>
      <div className="reading readingpage">
        <div className="reading__header">
          <div className="container">
            <div className="reading__wrapper">
              <Link to="/tests">
                <button className="reading__btn">
                  <img src="./arrow1.svg" alt="" />
                </button>
              </Link>
              <h2 className="reading__title">Reading test</h2>
              <div className="reading__time"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="reading__task">
            <h1>IELTS reading Test</h1>
            <h4>Improve comprehension skills</h4>

            <div className="reading__card">
              <img src="./wallet.svg" alt="" className="reading__image" />
              <div className="reading__text">
                <h3>40</h3>
                <p>reading Questions</p>
              </div>
            </div>
            <div className="reading__card">
              <img src="./clock.svg" alt="" className="reading__image" />
              <div className="reading__text">
                <h3>60 mins</h3>
                <p>Total Duration</p>
              </div>
            </div>
            <div className="reading__card">
              <img src="./wallet.svg" alt="" className="reading__image" />
              <div className="reading__text">
                <h3>True Band Estimate</h3>
                <p>Based on official IELTS criteria</p>
              </div>
            </div>
          </div>
          <div className="reading__rule">
            <h1>Before you start</h1>
            <ul>
              <li>
                The test contains 3 reading passages with increasing difficulty.
              </li>
              <li>
                You must complete all questions within the 60-minute limit.
              </li>
              <li>No extra time will be provided for transferring answers.</li>
              <li>Every correct answer gives 1 mark; no negative marking.</li>
              <li>
                Your score will be instantly converted to an estimated band.
              </li>
            </ul>
          </div>
        </div>
        <Link to="/tests/reading/test">
          <div className="reading__bottom">
            <button>Start reading test</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Reading;
