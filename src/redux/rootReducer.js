import { combineReducers } from "redux";
import boardsReducer from "./boards/boardsReducer";
import tasksReducer from "./tasks/tasksReducer";
import commentsReducer from "./comments/commentsReducer";

const rootReducer = combineReducers({
  boards: boardsReducer,
  tasks: tasksReducer,
  comments: commentsReducer
});

export default rootReducer;
