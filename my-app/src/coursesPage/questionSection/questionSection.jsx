import { useEffect, useState } from "react";
import "./questionSection.css";

import { useDispatch, useSelector } from "react-redux";
import { updateAnswer } from "../../redux/action";

function QuestionSection() {
  const dispatch = useDispatch();
  const questionsList = useSelector((state) => state.questionsList);
  const questionNumber = useSelector((state) => state.questionNumber);
  console.log(questionsList);
  const [answerOptions, setAnswerOptions] = useState([]);
  const [input, setInput] = useState();

  const question = questionsList?.find(
    (question) => question.id === questionNumber
  );

  const splitedQuestion = question?.question?.split(" ");

  const answer = splitedQuestion?.find((word) => word.includes("{"));

  const fillInBlankArray = splitedQuestion?.map((word, index) =>
    word.includes("{") ? (
      <input
        key={index}
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="input-area"
      />
    ) : (
      <span className="question-word" key={index}>
        {word}
      </span>
    )
  );

  const getAnswersFunction = () => {
    const splited = answer?.split("");

    let opening = "";
    let open = -1;
    let word = "";
    let answers = [];

    splited?.map((alphabet, index) => {
      if (alphabet === "[") {
        opening = alphabet;
        open = index;
      }

      if (opening === "[" && alphabet !== "]" && index > open) {
        word = word + alphabet;
      }
      if (alphabet === "]" && opening === "[") {
        answers = [...answers, word];
        opening = "";
        open = -1;
        word = "";
      }
    });

    setAnswerOptions(answers);
  };

  const checkAnswerFunction = () => {
    if (answerOptions.includes(input)) {
      dispatch(updateAnswer(question.id, "correct"));
    } else {
      dispatch(updateAnswer(question.id, "wrong"));
    }
  };

  useEffect(() => {
    getAnswersFunction();
  }, [question]);

  return (
    <div className="question-section">
      <div className="question-section-header">
        <p className="question-number">Question {question?.id}</p>
        <div className="isFlaged-section">
          {question?.isFlaged ? (
            <img className="bookmark-img" src="/assets/bookmark-fill.png" />
          ) : (
            <img className="bookmark-img" src="/assets/bookmark-empty.png" />
          )}
          <span className="flag">Flag for later</span>
        </div>
      </div>
      <div className="question-check-section">
        <div className="question">{fillInBlankArray?.map((word) => word)} </div>
        <div className="button-section">
          <button className="check-btn" onClick={() => checkAnswerFunction()}>
            Check
          </button>
          <span className="attempt">6 attempts left</span>
        </div>
      </div>
      <p
        className="answer"
        style={{
          color: question?.answered === "wrong" ? "red" : "rgb(22, 167, 22)",
        }}
      >
        {question?.answered}
        {question?.answered === "wrong" ? (
          <img className="result-img" src="/assets/wrong.png" alt="" />
        ) : (
          <img className="result-img" src="/assets/correct.png" alt="" />
        )}
      </p>
    </div>
  );
}

export default QuestionSection;
