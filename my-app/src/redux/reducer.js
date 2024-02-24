const initialState = {
  questionList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addQuestionList":
      return { state, questionList: [...action.payload] };

    default:
      return state;
  }
};

export default reducer;
