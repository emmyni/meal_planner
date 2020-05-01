import axios from "axios";
import { returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GENERATE_MEALPLAN } from "./types.js";

// generate mealplan
export const generateMealplan = (mealplanFormData) => (dispatch, getState) => {
  axios
    .get("/api/mealplan/", mealplanFormData, tokenConfig(getState))
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
