import axios from "axios";
import { returnErrors } from "../messages";

import {
  GET_RECIPE_RANDOM,
  GET_RECIPE_BY_INGREDIENTS,
  GET_RECIPE_BY_TYPE,
} from "../types.js";

const apiKey = process.env.REACT_APP_API_KEY;

// get a random recipe
export const getRandomRecipe = (info) => (dispatch, getState) => {
  info.apiKey = apiKey;
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

// get recipe by ingredients
export const getRecipeByIngredients = (info) => (dispatch, getState) => {
  info.apiKey = apiKey;
  axios
    .get("https://api.spoonacular.com/recipes/findByIngredients", {
      params: info,
    })
    .then((res) => {
      dispatch({
        type: GET_RECIPE_BY_INGREDIENTS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// get recipe by type
export const getRecipeByType = (info) => (dispatch, getState) => {
  info.apiKey = apiKey;
  axios
    .get("https://api.spoonacular.com/recipes/search", {
      params: info,
    })
    .then((res) => {
      dispatch({
        type: GET_RECIPE_BY_TYPE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
