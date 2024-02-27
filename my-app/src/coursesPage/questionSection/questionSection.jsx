import "./questionSection.css";

import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { isbookmarked, updateAnswer } from "../../redux/action";

import Footer from "../footer/pageFooter";

function QuestionSection() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.isLoading);
  const questionsList = useSelector((state) => state.questionsList);
  const questionNumber = useSelector((state) => state.questionNumber);
  const [input, setInput] = useState(["", ""]);
  const [answerOptions, setAnswerOptions] = useState([]);
  const [fillInBlankArray, setFillInBlankArray] = useState();
  const [answerNotFilled, setAnswerNotFilled] = useState(false);

  const question = questionsList?.find(
    (question) => question.id === questionNumber
  );

  const splitedQuestion = question?.question?.split(" ");
  const answer = splitedQuestion?.filter((word) => word.includes("{"));

  const setValueAtIndex = (index, value) => {
    const newArray = [...input];
    newArray[index] = value;
    setInput(newArray);
  };

  const fillInBlankArrayFunction = () => {
    let num = 1;
    const displayedArray = splitedQuestion?.map((word, index) => {
      if (word.includes("{")) {
        if (num === 1) {
          num = num + 1;
          return (
            <input
              key={index}
              value={input[0] || ""}
              type="text"
              onChange={(e) => setValueAtIndex(0, e.target.value)}
              className="input-area"
            />
          );
        } else if (num === 2) {
          return (
            <input
              key={index}
              value={input[1] || ""}
              type="text"
              onChange={(e) => setValueAtIndex(1, e.target.value)}
              className="input-area"
            />
          );
        }
      } else {
        return (
          <span className="question-word" key={index}>
            {word}
          </span>
        );
      }
    });
    setFillInBlankArray(() => displayedArray);
  };

  const getAnswersFunction = () => {
    let array = [];
    answer?.map((ans) => {
      const splited = ans?.split("");
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
      array = [...array, answers];
    });
    setAnswerOptions(() => array);
  };

  const checkAnswerFunction = () => {
    let correct = false;

    if (answerOptions.length === 1 && input[0] === "") {
      setAnswerNotFilled(() => "please provide answer");
    } else if (
      answerOptions.length === 2 &&
      (input[0] === "" || input[1] === "")
    ) {
      setAnswerNotFilled(() => "please provide both the answers");
    } else {
      answerOptions.map((answer, index) => {
        if (index === 0) {
          if (answer.includes(input[0])) {
            setAnswerNotFilled(() => false);
            dispatch(updateAnswer(question.id, "correct", input));
            correct = true;
          } else {
            setAnswerNotFilled(() => false);
            dispatch(updateAnswer(question.id, "wrong", input));
          }
        } else if (index === 1) {
          if (answer.includes(input[1]) && correct) {
            setAnswerNotFilled(() => false);
            dispatch(updateAnswer(question.id, "correct", input));
          } else {
            setAnswerNotFilled(() => false);
            dispatch(updateAnswer(question.id, "wrong", input));
          }
        }
      });
    }
  };

  useEffect(() => {
    fillInBlankArrayFunction();
  }, [question, input]);

  useEffect(() => {
    setAnswerNotFilled(() => "");
    if (question?.answer.length !== 0) {
      setInput(() => [question?.answer[0], question?.answer[1]]);
    } else {
      setInput(() => ["", ""]);
    }
    getAnswersFunction();
  }, [question]);

  return (
    <div className="parent">
      <div className="question-section">
        <div className="main-content">
          <h1 className="heading">Fill in the blank</h1>
          <div className="question-section-header">
            <p className="question-number">Question {question?.id}</p>
            <div
              className="isFlaged-section"
              onClick={() =>
                dispatch(
                  isbookmarked(question?.id, question?.isFlaged ? false : true)
                )
              }
            >
              {question?.isFlaged ? (
                <img className="bookmark-img" src="/assets/bookmark-fill.png" />
              ) : (
                <img
                  className="bookmark-img"
                  src="/assets/bookmark-empty.png"
                />
              )}
              <span className="flag">Flag for later</span>
            </div>
          </div>
          <div className="question-check-section">
            <div className="question">
              {fillInBlankArray?.map((word) => word)}{" "}
            </div>
            <div className="button-section">
              <button
                className="check-btn"
                onClick={() => checkAnswerFunction()}
              >
                {isLoading ? (
                  <img
                    className="loader"
                    src="https://i.gifer.com/ZKZg.gif"
                    alt="loading"
                  />
                ) : (
                  "Check"
                )}
              </button>
              <span className="attempt">6 attempts left</span>
            </div>
          </div>
          <div className="answer-container">
            {answerNotFilled ? (
              <span className="answer provideAnswer">{answerNotFilled}</span>
            ) : (
              !isLoading && (
                <div
                  className="answer"
                  style={{
                    color:
                      question?.answered === "wrong"
                        ? "red"
                        : "rgb(22, 167, 22)",
                  }}
                >
                  <div className="result-img">
                    {question?.answered === "wrong" && <IoClose />}
                    {question?.answered === "correct" && <FaCheck />}
                  </div>

                  <span>{question?.answered}</span>
                </div>
              )
            )}
          </div>
        </div>
        <div className="question-extra-options">
          <img
            className="question-extra-options-icon"
            src="/assets/calculator-icon.png"
            alt=""
          />
          <img
            className="question-extra-options-icon"
            src="/assets/video-icon.png  "
            alt=""
          />
          <img
            className="question-extra-options-icon"
            src="/assets/problem-icon.png"
            alt=""
          />
          <img
            className="question-extra-options-icon"
            src="/assets/practice-problem-2.png"
            alt=""
          />
        </div>
      </div>
      <div
        className="cursor"
        onClick={() => dispatch({ type: "sidebarDisplay" })}
      >
        <img src="assets/Featured icon.png" alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default QuestionSection;
