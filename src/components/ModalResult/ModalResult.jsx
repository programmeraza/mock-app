import "./ModalResult.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ModalResult = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (!open) return null;

  const handleSubmit = () => {
    setLoading(true);

    // здесь позже будет запрос к backend (ИИ анализ)
    setTimeout(() => {
      setLoading(false);
      alert("Result analyzed successfully ✅");
    }, 2500);
  };

  const handleBack = () => {
    navigate("/"); // главная страница
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Mock Test Completed 🎉</h2>
        <p>Your answers are ready to be analyzed.</p>

        {loading ? (
          <div className="loader">Analyzing your result...</div>
        ) : (
          <div className="actions">
            <button className="submit" onClick={handleSubmit}>
              Finish & Submit
            </button>
            <button className="back" onClick={handleBack}>
              Go Back to Test
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalResult;
