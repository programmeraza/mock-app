import { useState } from "react";
import MockStep from "../components/MockStep/MockStep";

const testOrder = ["Listening", "Reading", "Writing", "Speaking"];

const MockPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 1 < testOrder.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("All tests completed 🎉");
    }
  };

  return (
    <>
      <div>
        <MockStep type={testOrder[currentIndex]} />

        <button
          onClick={handleNext}
          style={{
            position: "fixed",
            bottom: "10px",
            right: "16px",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "#A175F0",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            alignSelf: "flex-end",
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default MockPage;
