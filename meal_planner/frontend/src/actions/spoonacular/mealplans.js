import axios from "axios";
import { returnErrors } from "../messages";

import { GENERATE_MEALPLAN } from "../types.js";
import { GENERATE_MEALPLAN_EXTENDED } from "../types.js";

import { SPOONACULAR_API_KEY } from "../../../../../apiKey";
const apiKey = SPOONACULAR_API_KEY;

// generate mealplan based on mealplan form information
export const generateMealplan = (mealplanForm) => (dispatch, getState) => {
  mealplanForm.apiKey = apiKey;
  axios
    .get("https://api.spoonacular.com/mealplanner/generate", {
      params: mealplanForm,
    })
    .then((res) => {
      dispatch({
        type: GENERATE_MEALPLAN,
        payload: res.data,
      });

      // get more of the mealplan recipe information using the id from generateMealplan
      let meals = res.data.meals.map((a) => a.id);
      let mealString = meals.toString();

      return axios.get("https://api.spoonacular.com/recipes/informationBulk", {
        params: {
          ids: mealString,
          includeNutrition: true,
          apiKey,
        },
      });
    })
    .then((res) => {
      dispatch({
        type: GENERATE_MEALPLAN_EXTENDED,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
