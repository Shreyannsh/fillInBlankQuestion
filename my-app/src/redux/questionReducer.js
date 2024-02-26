const initialState = {
  questionsList: [],
  questionNumber: 0,
  isLoading: false,
  sidebarDisplay: true,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addQuestionList":
      return { ...state, questionsList: [...action.payload] };
    case "addQuestionNumber":
      return { ...state, questionNumber: action.payload };
    case "startLoading":
      return { ...state, isLoading: true };
    case "stopLoading":
      return { ...state, isLoading: false };

    case "sidebarDisplay":
      return { ...state, sidebarDisplay: !state.sidebarDisplay };
    default:
      return state;
  }
};

export default questionReducer;
