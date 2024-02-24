import { fakeFetch } from "../fakeFetch/fakeFetch";

export const fetchQustions = () => async (dispatch) => {
  try {
    const response = await fakeFetch("https://example.com/api/questions");
    if (response.status === 200) {
      dispatch({ type: "addQuestionList", payload: response.data.questions });
    }
  } catch (error) {
    console.log(error);
  }
};
