import "./floatingSidebar.css";

import { useSelector } from "react-redux";

import QuestionsList from "../../questionList/questionList";

function FloatingSideBar() {
  const questionsList = useSelector((state) => state.questionsList);
  const sidebarDisplay = useSelector((state) => state.sidebarDisplay);

  return (
    <div
      className="floatingSideBar"
      style={{ display: sidebarDisplay ? "block" : "none" }}
    >
      <div className="lesson">
        <div className="lesson-header">
          <div className="upper-section">
            <img className="upper-section-image" src="assets/Book.png" alt="" />
            <p className="upper-section-text">Saxon Math 5/4</p>
          </div>
          <div className="lower-section">
            <img src="assets/search-icon.png" className="search-icon" alt="" />
            <input className="input" type="'text" placeholder="Search" />
          </div>
        </div>
        <div className="questions">
          <div className="lesson5">
            <p>
              <img src="assets/icon.png" /> Lesson 5
            </p>
          </div>
          <div>
            <h3>Assignment Title Here</h3>
            <div className="labels">
              <p>Questions:</p>
              <p className="numberOfQuestions">
                {questionsList.length} questions
              </p>
            </div>
            <div className="scroll-list">
              <QuestionsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloatingSideBar;
