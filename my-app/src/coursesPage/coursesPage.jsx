import "./coursesPage.css";

import QuestionSection from "./questionSection/questionSection";
import SideBar from "./siderBar/sideBar";

function CoursesPage() {
  return (
    <div className="coursesPage">
      <SideBar />
      <QuestionSection />
    </div>
  );
}

export default CoursesPage;
