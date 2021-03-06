import axios from "axios";
import { createMessage, returnErrors } from "../messages";

import {
  GET_RECIPE_RANDOM,
  GET_RECIPE_BY_INGREDIENTS,
  GET_RECIPE_BY_TYPE,
  GET_RECIPE_INFO,
  GET_RECIPE_INFO_BULK,
} from "../types.js";

const apiKey = "522849782e3d45af9d6f0734cde16125";

// get a random recipe
export const getRandomRecipe = (info) => (dispatch, getState) => {
  info.apiKey = apiKey;
  axios
    .get("https://api.spoonacular.com/recipes/random", {
      params: info,
    })
    .then((res) => {
      if (res.data.recipes.length > 0) {
        dispatch({
          type: GET_RECIPE_RANDOM,
          payload: res.data.recipes,
        });
      } else {
        dispatch(
          createMessage({
            noResult: "No Results Found. Try a different search",
          })
        );
      }
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
      // get more detailed recipe
      let recipeIds = res.data.map((a) => a.id);
      let recipeIdString = recipeIds.toString();
      if (res.data.length > 0) {
        return axios.get(
          "https://api.spoonacular.com/recipes/informationBulk",
          {
            params: {
              ids: recipeIdString,
              includeNutrition: true,
              apiKey,
            },
          }
        );
      } else {
        dispatch(
          createMessage({
            noResult: "No Results Found. Try a different search",
          })
        );
      }
    })
    .then((res) => {
      if (res) {
        dispatch({
          type: GET_RECIPE_BY_INGREDIENTS,
          payload: res.data,
        });
      }
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
      // get more detailed recipe
      let recipeIds = res.data.results.map((a) => a.id);
      let recipeIdString = recipeIds.toString();

      // check if there are at least 1 result
      if (res.data.totalResults > 0) {
        return (
          axios
            .get("https://api.spoonacular.com/recipes/informationBulk", {
              params: {
                ids: recipeIdString,
                includeNutrition: true,
                apiKey,
              },
            })
            // add the total results from the first call into the result of the second call
            .then((result) => {
              result.totalResults = res.data.totalResults;
              return result;
            })
        );
      } else {
        dispatch(
          createMessage({
            noResult: "No Results Found. Try a different search",
          })
        );
      }
    })
    .then((res) => {
      if (res) {
        let finalResult = {
          recipes: res.data,
          totalResults: res.totalResults,
        };
        dispatch({
          type: GET_RECIPE_BY_TYPE,
          payload: finalResult,
        });
      }
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// get additional recipe info (for 1 recipe)
export const getRecipeInfo = (id) => (dispatch, getState) => {
  axios
    .get(`https://api.spoonacular.com/recipes/${id}/information`, {
      params: { includeNutrition: true, apiKey },
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
  info.apiKey = apiKey;
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
