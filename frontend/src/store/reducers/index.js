import { combineReducers } from "redux";
import StudentReducer from "./student";
import BookReducer from "./book";

export default combineReducers({
  StudentReducer,
  BookReducer,
});
