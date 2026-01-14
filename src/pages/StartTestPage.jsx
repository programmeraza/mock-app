import { useParams, Navigate } from "react-router-dom";
import ListeningTest from "../components/ListeningTest/ListeningTest";
import ReadingTest from "../components/ReadingTest/ReadingTest";
import WritingTest from "../components/WritingTest/WritingTest"
import SpeakingTest from "../components/SpeakingTest/SpeakingTest"

const StartTestPage = () => {
  const { type } = useParams();

  if (type === "listening") return <ListeningTest />;
  if (type === "reading") return <ReadingTest />;
  if (type === "writing") return <WritingTest />;
  if (type === "speaking") return <SpeakingTest />;

  return <Navigate to="/tests" />;
};

export default StartTestPage;
