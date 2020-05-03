import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { ADD_RECIPE, GET_ERRORS } from "./types.js";

// Add PANTRY items
export const addRecipe = (item) => (dispatch, getState) => {
  axios
    .post("/api/recipe/", item, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ recipeAdded: "Recipe Added" }));
      dispatch({
        type: ADD_RECIPE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
