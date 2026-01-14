import { useParams } from "react-router-dom";
import PracticeBlock from "../components/PracticeBlock/PracticeBlock";
import Listening from "../components/Listening/Listening";
import Reading from "../components/Reading/Reading";
// import Writing from "../components/Writing/Writing";
// import Speaking from "../components/Speaking/Speaking";

const TestPage = () => {
  const { type } = useParams();

  // если /tests → показываем выбор
  if (!type) {
    return <PracticeBlock />;
  }

  // переключатель по type
  switch (type) {
    case "listening":
      return <Listening />;

    case "reading":
      return <Reading />;

    case "writing":
      // return <Writing />;

    case "speaking":
      // return <Speaking />;

    default:
      return <PracticeBlock />; 
  }
};

export default TestPage;
