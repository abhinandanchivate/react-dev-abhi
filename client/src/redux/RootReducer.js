import { combineReducers } from "redux";
import authReducer from "../auth/redux/authReducer";

export default combineReducers({
  // add all reducers
  // authReducer, ProfileReducer // postreducer
  authReducer,
});
