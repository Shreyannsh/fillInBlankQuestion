import { useEffect } from "react";
import "./coursesPage.css";

import QuestionSection from "./questionSection/questionSection";
import SideBar from "./siderBar/sideBar";
import { fetchQuestions } from "../redux/action";
import { useDispatch } from "react-redux";
import Footer from "./footer/FOOTER.JSX";

function CoursesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch({ type: "addQuestionNumber", payload: 1 });
  }, []);

  return (
    <div className="coursesPage">
      <SideBar />
      <QuestionSection />
      <Footer />
    </div>
  );
}

export default CoursesPage;
