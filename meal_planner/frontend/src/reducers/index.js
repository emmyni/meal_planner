import { combineReducers } from "redux";
import pantry from "./pantry";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import mealplan from "./mealplan";
import recipes from "./recipes";
import shoppingList from "./shoppingList";
import apiRecipes from "./spoonacular/recipes";

export default combineReducers({
  pantry,
  errors,
  messages,
  auth,
  mealplan,
  recipes,
  apiRecipes,
  shoppingList,
});
