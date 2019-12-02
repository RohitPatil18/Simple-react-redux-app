import { ADD_BOARD } from "./boardsActions.js";

var initialState = [
  {
    id: 1,
    name: "Board 1"
  },
  {
    id: 2,
    name: "Board 2"
  }
];

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD:
      return [...state, action.newBoard];
    default:
      return state;
  }
};

export default boardsReducer;
