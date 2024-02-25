import { useEffect, useState } from "react";
import "./questionSection.css";

import { useDispatch, useSelector } from "react-redux";
import { updateAnswer } from "../../redux/action";

function QuestionSection() {
  const dispatch = useDispatch();
  const questionsList = useSelector((state) => state.questionsList);
  const questionNumber = useSelector((state) => state.questionNumber);

  console.log(questionsList);
  console.log(questionNumber);

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
      />
    ) : (
      <span key={index}>{word}</span>
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
    <div>
      <div className="question">{fillInBlankArray.map((word) => word)} </div>
      <div>
        <button onChange={() => checkAnswerFunction()}>Check</button>
      </div>
      <p>{question.answered}</p>
    </div>
  );
}

export default QuestionSection;
