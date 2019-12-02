export const ADD_BOARD = "ADD_BOARD";

export const addBoard = newBoard => {
  return {
    type: ADD_BOARD,
    newBoard: newBoard
  };
};
