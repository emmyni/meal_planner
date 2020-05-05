import axios from "axios";
import { returnErrors } from "../messages";

import { GET_RECIPE_RANDOM } from "../types.js";

// generate mealplan based on mealplan form information
export const getRandomRecipe = (info) => (dispatch, getState) => {
  axios
    .get("https://api.spoonacular.com/recipes/random", {
      params: info,
    })
    .then((res) => {
      dispatch({
        type: GET_RECIPE_RANDOM,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
