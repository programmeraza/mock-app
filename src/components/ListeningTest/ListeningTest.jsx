import React, { useState } from "react";
import "./ListeningTest.scss";
import { Link } from "react-router-dom";
import { FaPlay, FaPause } from "react-icons/fa";

const ListeningTest = () => {
  const [activeTab, setActiveTab] = useState("audio");
  const [playingIndex, setPlayingIndex] = useState(null);

  const togglePlay = (index) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
    }
  };

  const parts = [
    { title: "Part 1", time: "30:00" },
    { title: "Part 2", time: "25:00" },
    { title: "Part 3", time: "20:00" },
    { title: "Part 4", time: "15:00" },
  ];

  return (
    <div className="listening listeningpage">
      <div className="listening__header">
        <div className="container">
          <div className="listening__wrapper">
            <Link to="/tests">
              <button className="listening__btn">
                <img src="./arrow1.svg" alt="back" />
              </button>
            </Link>
            <h2 className="listening__title">Listening Test</h2>
            <div className="listening__time">30:00</div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="listening__nav">
          <button
            className={activeTab === "audio" ? "active" : ""}
            onClick={() => setActiveTab("audio")}
          >
            Parts
          </button>

          <button
            className={activeTab === "questions" ? "active" : ""}
            onClick={() => setActiveTab("questions")}
          >
            Questions
          </button>
        </div>

        {activeTab === "audio" && (
          <div className="listening__audios">
            {parts.map((part, index) => (
              <div className="listening__audio" key={index}>
                <div className="listening__text">
                  <h2>{part.title}</h2>
                  <h3>{part.time}</h3>
                </div>

                <button className="play-btn" onClick={() => togglePlay(index)}>
                  {playingIndex === index ? <FaPause /> : <FaPlay />}
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "questions" && (
          <div className="listening__questions">
            <div className="listening__question">
              <h4>Question 1 /40</h4>
              <p>
                Complete the notes below. Write no more than two words and/or a
                number for each answer.
              </p>
              <h3>Express train leaves at (1) …………………….</h3>
              <h3>Nearest station is (2) …………………….</h3>
            </div>
            <div className="listening__answer">
              <h4>Write the Answer</h4>
              <input type="text" placeholder="Placeholder for 1 your answer" />
              <input type="text" placeholder="Placeholder for 2 your answer" />
            </div>
            <div className="listening__test-bottom">
              <Link to={"/tests/listening/listening-test"}>
                <button className="listening__button-1">
                  <img src="./arrow1.svg" alt="" />
                </button>
              </Link>
              <Link to={"/tests/listening/listening-test"} className="listening__btn2">
                <button className="listening__button-2">Confirm</button>
              </Link>
              <Link to={"/tests/listening/listening-test"}>
                <button className="listening__button-3">
                  <img src="./arrow1.svg" alt="" />
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListeningTest;
