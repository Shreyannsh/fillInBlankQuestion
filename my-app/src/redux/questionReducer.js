const initialState = {
  questionsList: [],
  questionNumber: 0,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addQuestionList":
      return { ...state, questionsList: [...action.payload] };
    case "addQuestionNumber":
      return { ...state, questionNumber: action.payload };
    default:
      return state;
  }
};

export default questionReducer;
