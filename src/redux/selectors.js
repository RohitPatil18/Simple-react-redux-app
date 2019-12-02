export const selectComments = (state, props) => {
  return state.comments.filter(comment => comment.task_id === props.task.id);
};

export const selectBoard = (state, boardId) => {
  return state.boards.find(board => board.id === Number(boardId));
};

export const selectTasks = (state, boardId) => {
  return state.tasks.filter(task => task.board_id === Number(boardId));
};
