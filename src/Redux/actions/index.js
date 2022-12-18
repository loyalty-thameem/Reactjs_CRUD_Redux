import ActionTypes from "../constants";

export const setTodoData = (todos) => {
  console.log("settododata", todos);
  return {
    type: ActionTypes.CREATE_TODO,
    payload: todos
  };
};
export const setTodoSingleDataDelete = (todo) => {
  console.log("setTodoSingleDataDelete", todo);
  return {
    type: ActionTypes.DELETE_TODO,
    payload: todo
  };
};
export const setTodoSingleDataDone = (todo) => {
  console.log("setTodoSingleDataComplete", todo);
  return {
    type: ActionTypes.DONE_TODO,
    payload: todo
  };
};
export const setTodoSingleDataEdit = (todo) => {
  console.log("setTodoSingleDataEdit", todo);
  return {
    type: ActionTypes.EDIT_TODO,
    payload: todo
  };
};
