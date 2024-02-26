import { useEffect } from "react";
import "./coursesPage.css";

import QuestionSection from "./questionSection/questionSection";
import SideBar from "./siderBar/sideBar";
import { fetchQuestions } from "../redux/action";
import { useDispatch } from "react-redux";

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
    </div>
  );
}

export default CoursesPage;
