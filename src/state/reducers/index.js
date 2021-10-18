import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import inputReducer from "./inputReducer";

const reducers = combineReducers({
  account: accountReducer,
  inputValue: inputReducer,
});

export default reducers;
