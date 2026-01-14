import "./MockStep.scss";
// Импортируем готовые тесты
import ListeningTest from "../ListeningTest/ListeningTest";
import ReadingTest from "../ReadingTest/ReadingTest";
import WritingTest from "../WritingTest/WritingTest";
import SpeakingTest from "../SpeakingTest/SpeakingTest";

const MockStep = ({ type }) => {
  return (
    <>
     {/* <div className="mock-step"> */}
      {/* <h2 style={{ marginBottom: "1.5rem", textAlign: "center", color: "#333" }}>
        {type} Test
      </h2> */}

      <div className="test-container">
        {type === "Listening" && <ListeningTest />}
        {type === "Reading" && <ReadingTest />}
        {type === "Writing" && <WritingTest />}
        {type === "Speaking" && <SpeakingTest />}
      </div>
    {/* </div>   */}
    </>
  );
};

export default MockStep;
