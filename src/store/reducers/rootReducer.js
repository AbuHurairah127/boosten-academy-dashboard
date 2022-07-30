import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import authReducer from "./authReducer";
const rootReducer = combineReducers({
  studentReducer,
  authReducer,
});
export default rootReducer;
