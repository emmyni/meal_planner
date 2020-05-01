import { combineReducers } from "redux";
import pantry from "./pantry";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import mealplan from "./mealplan";

export default combineReducers({
  pantry,
  errors,
  messages,
  auth,
  mealplan,
});
