import { useSelector } from "react-redux";
import QuestionsList from "../../questionList/questionList";
import "./sideBar.css";

function SideBar() {
  const questionsList = useSelector((state) => state.questionsList);
  console.log(questionsList);
  return (
    <div className="sideBar">
      <div className="cursor">
        <img src="assets/Featured icon.png" alt="" />
      </div>
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

          <h3>Assignment Title Here</h3>
          <div className="labels">
            <p>Questions:</p>
            <p className="numberOfQuestions">
              {questionsList.length} questions
            </p>
          </div>
          <div>
            <QuestionsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
