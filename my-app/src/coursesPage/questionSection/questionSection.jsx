import { useEffect, useState } from "react";
import "./questionSection.css";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import { isbookmarked, updateAnswer } from "../../redux/action";
import Footer from "../footer/pageFooter";

function QuestionSection() {
  const dispatch = useDispatch();
  const questionsList = useSelector((state) => state.questionsList);
  const questionNumber = useSelector((state) => state.questionNumber);
  const isLoading = useSelector((state) => state.isLoading);

  const [answerOptions, setAnswerOptions] = useState([]);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [answerNotFilled, setAnswerNotFilled] = useState(false);
  const [fillInBlankArray, setFillInBlankArray] = useState();
  //  / console.log(input1, input2);
  const question = questionsList?.find(
    (question) => question.id === questionNumber
  );

  const splitedQuestion = question?.question?.split(" ");

  const answer = splitedQuestion?.filter((word) => word.includes("{"));
  // console.log(answer);
  const fillInBlankArrayFunction = () => {
    console.log("hi");
    let num = 1;
    const displayedArray = splitedQuestion?.map((word, index) => {
      if (word.includes("{")) {
        if (num === 1) {
          num = num + 1;
          return (
            <input
              key={index}
              value={input1}
              type="text"
              onChange={(e) => setInput1(e.target.value)}
              className="input-area"
            />
          );
        } else if (num === 2) {
          return (
            <input
              key={index}
              value={input2}
              type="text"
              onChange={(e) => setInput2(e.target.value)}
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
  // console.log(answerOptions);

  const checkAnswerFunction = () => {
    console.log(input1);
    console.log(input2);
    console.log(answerOptions.length);
    if (answerOptions.length === 1 && input1 === "") {
      setAnswerNotFilled(() => "please provide answer");
    } else if (answerOptions.length === 2 && (input1 === "" || input2 === "")) {
      setAnswerNotFilled(() => "please provide both the answers");
    } else {
      answerOptions.map((answer, index) => {
        if (index === 0) {
          console.log(answer, index, input1);
          if (answer.includes(input1)) {
            console.log(" 0 if");
            setAnswerNotFilled(() => false);
            dispatch(updateAnswer(question.id, "correct", input1));
          } else {
            console.log("0 else");
            setAnswerNotFilled(() => false);
            dispatch(updateAnswer(question.id, "wrong", input1));
          }
        } else if (index === 1 && question.answered === "correct") {
          console.log(answer, index, input2);
          if (answer.includes(input2)) {
            console.log("1 if");
            setAnswerNotFilled(() => false);
            dispatch(updateAnswer(question.id, "correct", input2));
          } else {
            console.log("1 else");
            setAnswerNotFilled(() => false);
            dispatch(updateAnswer(question.id, "wrong", input2));
          }
        }
      });
    }
  };
  //console.log(fillInBlankArray);

  useEffect(() => {
    fillInBlankArrayFunction();
  }, [question, input1, input2]);

  useEffect(() => {
    if (question?.answer.length) {
      setInput1(() => question?.answer[0]);
      setInput2(() => question?.answer[1]);
    }
    getAnswersFunction();
  }, [question]);

  useEffect(() => {
    return () => {
      setInput1(() => "");
      setInput2(() => "");
      setAnswerNotFilled(() => "");
    };
  }, [questionNumber]);

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
