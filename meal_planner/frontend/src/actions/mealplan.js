import axios from "axios";
import { returnErrors } from "./messages";

import { GENERATE_MEALPLAN } from "./types.js";

// generate mealplan
export const generateMealplan = (mealplanData) => (dispatch, getState) => {
  axios
    .get("https://api.spoonacular.com/mealplanner/generate", {
      params: mealplanData,
    })
    .then((res) => {
      dispatch({
        type: GENERATE_MEALPLAN,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
