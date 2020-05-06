import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import authedUser from "./authed";
import tweets from "./tweets";
import users from "./users";

const rootReducer = combineReducers({
  authedUser,
  tweets,
  users,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
