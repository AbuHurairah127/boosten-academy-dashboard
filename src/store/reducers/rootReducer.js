import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import studentReducer from "./studentReducer";
import authReducer from "./authReducer";
import attendanceReducer from "./attendanceReducer";
import marksReducer from "./marksReducer";

const rootReducer = combineReducers({
  adminReducer,
  authReducer,
  studentReducer,
  attendanceReducer,
  marksReducer,
});
export default rootReducer;
