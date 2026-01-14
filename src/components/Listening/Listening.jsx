import React from "react";
import "./Listening.scss";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Listening = () => {
  return (
    <div>
      <div className="listening listeningpage">
        <div className="listening__header">
          <div className="container">
            <div className="listening__wrapper">
              <Link to="/tests">
                <button className="listening__btn">
                  <img src="./arrow1.svg" alt="" />
                </button>
              </Link>
              <h2 className="listening__title">Listening Test</h2>
              <div className="listening__time"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="listening__task">
            <h1>IELTS Listening Test</h1>
            <h4>Enhance concentration + audio skills</h4>

            <div className="listening__card">
              <img src="./wallet.svg" alt="" className="listening__image" />
              <div className="lestening__text">
                <h3>40</h3>
                <p>listening Questions</p>
              </div>
            </div>
            <div className="listening__card">
              <img src="./clock.svg" alt="" className="listening__image" />
              <div className="lestening__text">
                <h3>30 mins + 10 mins</h3>
                <p>Audio duration + transfer time (simulated)</p>
              </div>
            </div>
          </div>
          <div className="listening__rule">
            <h1>Before you start</h1>
            <ul>
              <li>
                You must wear headphones or be in a quiet place for clear audio.
              </li>
              <li>Audio will play only once — just like in the real exam.</li>
              <li>You cannot pause, rewind, or replay the audio.</li>
              <li>
                Answers must be selected while listening; transfer time is
                included.
              </li>
              <li>
                Your final score will be auto-calculated after submission.
              </li>
            </ul>
          </div>
        </div>
        <Link to="/tests/listening/start">
          <div className="listening__bottom">
            <button>Start listening test</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Listening;
