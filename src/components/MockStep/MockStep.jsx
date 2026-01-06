import Timer from "../Timer/Timer";
import "./MockStep.scss";

const MockStep = ({ step, onNext }) => {
  return (
    <div className="mock-step">
      <header className="mock-step__header">
        <h2>{step.title}</h2>

        <Timer
          duration={step.time}
          storageKey={`time-${step.key}`}
          onFinish={onNext}
        />
      </header>

      <div className="mock-step__content">
        {/* здесь позже будут реальные задания */}
        <p>{step.title} section content goes here…</p>
      </div>

      <button className="mock-step__btn" onClick={onNext}>
        Finish {step.title}
      </button>
    </div>
  );
};

export default MockStep;
