import axios from "axios";
import { returnErrors } from "../messages";

import {
  GET_RECIPE_RANDOM,
  GET_RECIPE_BY_INGREDIENTS,
  GET_RECIPE_BY_TYPE,
  GET_RECIPE_INFO,
  GET_RECIPE_INFO_BULK,
} from "../types.js";

import { SPOONACULAR_API_KEY } from "../../../../../apiKey";

// get a random recipe
export const getRandomRecipe = (info) => (dispatch, getState) => {
  info.apiKey = SPOONACULAR_API_KEY;
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
  info.apiKey = SPOONACULAR_API_KEY;
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
  info.apiKey = SPOONACULAR_API_KEY;
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

// get additional recipe info (for 1 recipe)
export const getRecipeInfo = (id) => (dispatch, getState) => {
  axios
    .get(`https://api.spoonacular.com/recipes/${id}/information`, {
      params: { includeNutrition: true, apiKey: SPOONACULAR_API_KEY },
    })
    .then((res) => {
      dispatch({
        type: GET_RECIPE_INFO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// get additional info bulk
export const getRecipeInfoBulk = (info) => (dispatch, getState) => {
  info.apiKey = SPOONACULAR_API_KEY;
  axios
    .get("https://api.spoonacular.com/recipes/informationBulk", {
      params: info,
    })
    .then((res) => {
      dispatch({
        type: GET_RECIPE_INFO_BULK,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
