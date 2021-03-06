import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_RECIPE, DELETE_RECIPE, ADD_RECIPE, GET_ERRORS } from "./types.js";

// GET Recipes
export const getRecipe = () => (dispatch, getState) => {
  axios
    .get("/api/recipe/", tokenConfig(getState))
    .then((res) => {
      // res.data = res.data.slice(0, 10);
      dispatch({
        type: GET_RECIPE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Recipe
export const deleteRecipe = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/recipe/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteItem: "Recipe Removed" }));
      dispatch({
        type: DELETE_RECIPE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// Add RECIPE
export const addRecipe = (item) => (dispatch, getState) => {
  axios
    .post("/api/recipe/", item, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addItem: "Recipe Saved" }));
      dispatch({
        type: ADD_RECIPE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
