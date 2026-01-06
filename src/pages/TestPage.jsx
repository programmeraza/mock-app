import { useParams } from "react-router-dom";
import PracticeBlock from "../components/PracticeBlock/PracticeBlock";
import { tests } from "../data/tests";

const TestPage = () => {
  const { type } = useParams();

  // 🔹 если тип не выбран — показываем выбор секции
  if (!type) {
    return <PracticeBlock />;
  }

  const sectionTests = tests[type];

  // 🔹 защита от неправильного URL
  if (!sectionTests) {
    return <PracticeBlock />;
  }

  return (
    <div className="tests">
      <h2>{type.toUpperCase()} TESTS</h2>

      {sectionTests.map((test) => (
        <div key={test.id} className="tests__card">
          <h4>{test.title}</h4>
          <p>{test.duration}</p>
          <button>Start</button>
        </div>
      ))}
    </div>
  );
};

export default TestPage;
