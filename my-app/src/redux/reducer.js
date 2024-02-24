const initialState = {
  questionsList: [],
  a: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addQuestionList":
      return { state, questionsList: [...action.payload] };
    case "addQuestionNumber":
      return { state, questionNumber: action.payload };
    default:
      return state;
  }
};

export default reducer;
