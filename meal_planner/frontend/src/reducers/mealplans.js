import {
  GET_MEALPLAN,
  DELETE_MEALPLAN,
  ADD_MEALPLAN,
} from "../actions/types.js";

const initialState = {
  myMealplans: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MEALPLAN:
      return {
        ...state,
        myMealplans: action.payload,
      };
    case DELETE_MEALPLAN:
      return {
        ...state,
        myMealplans: state.mealplans.filter(
          (plan) => plan.id !== action.payload
        ),
      };
    case ADD_MEALPLAN:
      return {
        ...state,
        myMealplans: [...state.mealplans, action.payload],
      };
    default:
      return state;
  }
}
