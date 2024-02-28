const initialState = {
  questionsList: [],
  questionNumber: 0,
  isLoading: false,
  sidebarDisplay: true,
  floatingNavbar: false,
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

    case "floatingNavbar":
      return { ...state, floatingNavbar: !state.floatingNavbar };

    default:
      return state;
  }
};

export default questionReducer;
