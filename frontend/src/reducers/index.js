import { combineReducers } from "redux";
import pantry from "./pantry";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import mealplans from "./mealplans";
import recipes from "./recipes";
import shoppingList from "./shoppingList";
import apiRecipes from "./spoonacular/recipes";
import apiMealplans from "./spoonacular/mealplans";

export default combineReducers({
  pantry,
  errors,
  messages,
  auth,
  mealplans,
  apiMealplans,
  recipes,
  apiRecipes,
  shoppingList,
});
