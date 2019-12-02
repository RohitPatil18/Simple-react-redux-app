import { ADD_BOARD } from "./boardsActions.js";

var initialState = JSON.parse(localStorage.getItem("data"));

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD:
      return [...state, action.newBoard];
    default:
      return state;
  }
};

export default boardsReducer;
