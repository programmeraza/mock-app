import { useNavigate } from "react-router-dom";
import "./PracticeBlock.scss";

const PracticeBlock = () => {
  const navigate = useNavigate();

  return (
    <section className="practice">
      <h2 className="practice__title">
        Ready to practice <br /> yourself today?
      </h2>

      <div className="practice__grid">
        <div onClick={() => navigate("/tests/listening")} className="practice__card">
          <span>🎧</span>
          <p>Listening</p>
        </div>

        <div onClick={() => navigate("/tests/reading")} className="practice__card">
          <span>📖</span>
          <p>Reading</p>
        </div>

        <div onClick={() => navigate("/tests/writing")} className="practice__card">
          <span>✍️</span>
          <p>Writing</p>
        </div>

        <div onClick={() => navigate("/tests/speaking")} className="practice__card">
          <span>🗣</span>
          <p>Speaking</p>
        </div>
      </div>

      <button
        className="practice__mock"
        onClick={() => navigate("/mock")}
      >
        ▶ Complete all in one go
      </button>
    </section>
  );
};

export default PracticeBlock;
