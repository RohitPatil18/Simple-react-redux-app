export const ADD_COMMENT = "ADD_COMMENT";

export const addComment = newComment => {
  return {
    type: ADD_COMMENT,
    newComment: newComment
  };
};
