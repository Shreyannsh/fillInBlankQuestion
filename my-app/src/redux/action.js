import { useSelector } from "react-redux";
import { fakeFetch } from "../fakeFetch/fakeFetch";

export const fetchQuestions = () => async (dispatch) => {
  try {
    const response = await fakeFetch("https://example.com/api/questions");
    if (response.status === 200) {
      dispatch({ type: "addQuestionList", payload: response.data.questions });
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateAnswer = (id, isCorrect, answer) => async (dispatch) => {
  try {
    dispatch({ type: "startLoading" });
    const response = await fakeFetch(
      "https://example.com/api/questions",
      true,
      false,
      id,
      isCorrect,
      answer
    );

    if (response.status === 200) {
      dispatch({ type: "addQuestionList", payload: response.data.questions });
      dispatch({ type: "stopLoading" });
    }
  } catch (error) {
    console.log(error);
  }
};
export const isbookmarked = (id, isbookmarked) => async (dispatch) => {
  try {
    const response = await fakeFetch(
      "https://example.com/api/questions",
      false,
      true,
      id,
      null,
      null,
      isbookmarked
    );

    if (response.status === 200) {
      dispatch({ type: "addQuestionList", payload: response.data.questions });
    }
  } catch (error) {
    console.log(error);
  }
};
