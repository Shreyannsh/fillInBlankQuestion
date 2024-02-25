import { applyMiddleware, createStore } from "redux";

import { thunk } from "redux-thunk";

import questionReducer from "./questionReducer";

const store = createStore(questionReducer, applyMiddleware(thunk));

export default store;
