import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gymReducer from "./gymReducer";

const rootReducer = combineReducers({
  gymReducer: gymReducer,
  authReducer: authReducer,
});

export default rootReducer;
