import "./questionList.css";
import { useDispatch, useSelector } from "react-redux";

function QuestionsList() {
  const questionsList = useSelector((state) => state.questionsList);
  const questionNumber = useSelector((state) => state.questionNumber);

  const dispatch = useDispatch();

  return (
    <div className="questionList">
      {questionsList?.map((ques) => (
        <div
          to={`/question/${ques.id}`}
          className="questionNumberContainer"
          key={ques.id}
          onClick={() =>
            dispatch({ type: "addQuestionNumber", payload: ques.id })
          }
          style={{
            boxShadow:
              questionNumber === ques.id &&
              "0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
            border:
              questionNumber === ques.id && "1px solid rgba(51, 51, 255, 1)",
            background: questionNumber === ques.id && "rgba(242, 242, 255, 1)",
          }}
        >
          {ques.answered === "correct" && (
            <img className="correct-icon" alt="" src="/assets/correct.png" />
          )}
          {ques.answered === "wrong" && (
            <img className="wrong-icon" alt="" src="/assets/wrong.png" />
          )}
          {ques.answered === "" && questionNumber !== ques.id && (
            <img alt="" src="/assets/not-attempted.png" />
          )}
          {questionNumber === ques.id && ques.answered === "" && (
            <img className="in-pogress-img" src="/assets/progress.png" alt="" />
          )}
          <p className="questionNumber">{ques.id}</p>
          <div className="bookmark-section">
            {ques.isFlaged && (
              <img
                className="bookmark-icon"
                src="/assets/bookmark-fill.png"
                alt=""
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export default QuestionsList;
