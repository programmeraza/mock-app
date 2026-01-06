import { useState } from "react";
import { mockSteps } from "../data/mockSteps";
import MockStep from "../components/MockStep/MockStep";

const MockPage = () => {
  const [stepIndex, setStepIndex] = useState(() => {
    const saved = localStorage.getItem("mock-step");
    return saved ? Number(saved) : 0;
  });

  const nextStep = () => {
    localStorage.removeItem(`time-${mockSteps[stepIndex].key}`);

    if (stepIndex + 1 < mockSteps.length) {
      localStorage.setItem("mock-step", stepIndex + 1);
      setStepIndex(stepIndex + 1);
    } else {
      localStorage.removeItem("mock-step");
      alert("Mock Test Completed 🎉");
    }
  };

  return (
    <MockStep
      step={mockSteps[stepIndex]}
      onNext={nextStep}
    />
  );
};

export default MockPage;
