import { ADD_TASK } from "./tasksActions";

var initialState = [];

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.newTask];
    default:
      return state;
  }
};

export default tasksReducer;
