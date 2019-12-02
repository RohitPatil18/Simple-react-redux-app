import { ADD_COMMENT } from "./commentsActions";

var initialState = [];

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.newComment];
    default:
      return state;
  }
};

export default commentsReducer;
