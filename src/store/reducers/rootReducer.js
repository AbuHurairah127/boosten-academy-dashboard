import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import studentReducer from "./studentReducer";
import authReducer from "./authReducer";
const rootReducer = combineReducers({
  adminReducer,
  authReducer,
  studentReducer,
});
export default rootReducer;
