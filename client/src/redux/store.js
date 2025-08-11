import { applyMiddleware, createStore } from "redux";
import RootReducer from "./RootReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const innitialState = {};
// thunk
const middleware = [thunk];
const store = createStore(
  RootReducer,
  innitialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
//1. rootReducer
// 2. intial state
//3. middleware
export default store;
