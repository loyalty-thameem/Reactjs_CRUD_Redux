import ActionTypes from "../../constants";

const initialState = {
  todoData: [],
  singleTodoData: ""
};

const todoDataReducer = (state = initialState, action) => {
  console.log("action.payload", action.payload);
  switch (action.type) {
    case ActionTypes.CREATE_TODO:
      return {
        ...state,
        todoData: [action.payload, ...state.todoData]
      };

    //   return Object.assign({}, state, {
    //     todoData:[action.payload, ...state.todoData]
    // })
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todoData: [...state.todoData].filter(
          (item, index) => item.id !== action.payload
        )
      };

    case ActionTypes.DONE_TODO:
      return {
        ...state,
        todoData: [...state.todoData].map((item, index) =>
          item.id === action.payload.id
            ? { ...item, complete: !action.payload.complete }
            : item
        )
      };

    case ActionTypes.EDIT_TODO:
      return {
        ...state,
        singleTodoData: [...state.todoData].find(
          (item, index) => item.id === action.payload.id
        ),
        todoData: [...state.todoData]?.map((item, index) =>
          item.id === action.payload.id
            ? (item = {
                id: action.payload.id,
                title: action.payload.title,
                complete: false
              })
            : { ...item }
        )
      };

    default:
      return state;
  }
};
export default todoDataReducer;
