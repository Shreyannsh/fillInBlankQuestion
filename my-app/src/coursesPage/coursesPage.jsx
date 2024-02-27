import "./coursesPage.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import SideBar from "./siderBar/sideBar";
import { fetchQuestions } from "../redux/action";
import QuestionSection from "./questionSection/questionSection";

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
