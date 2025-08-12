import { combineReducers } from "redux";
import authReducer from "../auth/redux/authReducer";
import coreReducer from "../core/redux/coreReducer";

export default combineReducers({
  // add all reducers
  // authReducer, ProfileReducer // postreducer
  authReducer,
  coreReducer,
});
