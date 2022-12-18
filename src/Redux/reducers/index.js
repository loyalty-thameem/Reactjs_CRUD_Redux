import { combineReducers } from "redux";
import todoDataReducer from "./todoDataReducer";
export const allReducer = combineReducers(todoDataReducer);
