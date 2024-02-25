import "./questionSection.css";

import { useSelector } from "react-redux";

function QuestionSection() {
  // const questionsList = useSelector((state) => state.questionsList);
  // const questionNumber = useSelector((state) => state.questionNumber);
  const test = useSelector((state) => state.random);
  // console.log(questionsList);
  // console.log(questionNumber);
  console.log(test);

  // const question = questionsList.find(
  //   (question) => question.id === questionNumber
  // );

  return <div className="question">{/* <p>{question?.question}</p> */}</div>;
}

export default QuestionSection;
