import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gymReducer from "./gymReducer";
import classReducer from "./classReducer";
const rootReducer = combineReducers({
  gymReducer: gymReducer,
  authReducer: authReducer,
  classReducer: classReducer,
});

export default rootReducer;
