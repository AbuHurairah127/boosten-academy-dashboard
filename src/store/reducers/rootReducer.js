import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import studentReducer from "./studentReducer";
import authReducer from "./authReducer";
import attendanceReducer from "./attendanceReducer";

const rootReducer = combineReducers({
  adminReducer,
  authReducer,
  studentReducer,
  attendanceReducer,
});
export default rootReducer;
