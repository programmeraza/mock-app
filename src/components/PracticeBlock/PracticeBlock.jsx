import { Link, useNavigate } from "react-router-dom";
import "./PracticeBlock.scss";
import Navigate from "../Navigate/Navigate";
import Profile from "../Profile/Profile";

const PracticeBlock = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="practice">
        <Profile />
        <div className="container">
          <h2 className="practice__title">
            Ready to practice <br /> yourself today?
          </h2>

          <div className="practice__grid">
            <div
              onClick={() => navigate("/tests/listening")}
              className="practice__card"
            >
              <img src="./listening.svg" alt="" />
              <p>Listening</p>
            </div>

            <div
              onClick={() => navigate("/tests/reading")}
              className="practice__card"
            >
              <img src="./reading.svg" alt="" />
              <p>Reading</p>
            </div>

            <div
              onClick={() => navigate("/tests/writing")}
              className="practice__card"
            >
              <img src="./writing.svg" alt="" />
              <p>Writing</p>
            </div>

            <div
              onClick={() => navigate("/tests/speaking")}
              className="practice__card"
            >
              <img src="./speaking.svg" alt="" />
              <p>Speaking</p>
            </div>
          </div>

          <button className="practice__mock" onClick={() => navigate("/mock")}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 19V5L19 12L8 19Z" fill="#A175F0" />
            </svg>
            Complete all in one go
          </button>
        </div>
      </section>

      <Navigate />
    </>
  );
};

export default PracticeBlock;
