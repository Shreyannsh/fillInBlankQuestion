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
            dispatch({ type: "AddQuestionNumber", payload: ques.id })
          }
        >
          <p className="questionNumber">
            {ques.answered === "correct" && <img src="/assets/correct.png" />}
            {ques.answered === "wrong" && <img src="/assets/wrong.png" />}
            {questionNumber === 0 && <img src="/assets/not-attempted.png" />}
            {questionNumber !== 0 && ques.answered === "" && (
              <img src="/assets/progress.png" />
            )}
            {ques.id}
          </p>
        </div>
      ))}
    </div>
  );
}
export default QuestionsList;
