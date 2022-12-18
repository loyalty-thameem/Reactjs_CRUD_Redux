import { createStore } from "redux";
// import { allReducer } from "../reducers";
import todoDataReducer from "../reducers/todoDataReducer";
export const store = createStore(todoDataReducer);
