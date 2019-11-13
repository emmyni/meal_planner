import { combineReducers } from "redux";
import pantry from "./pantry";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  pantry,
  errors,
  messages
});
