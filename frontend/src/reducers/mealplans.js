import {
  GET_MEALPLAN,
  DELETE_MEALPLAN,
  ADD_MEALPLAN,
  UPDATE_MEALPLAN,
} from "../actions/types.js";

const initialState = {
  myMealplans: [],
  isMealplanSaved: false,
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
        myMealplans: state.myMealplans.filter(
          (plan) => plan.id !== action.payload
        ),
      };
    case ADD_MEALPLAN:
      return {
        ...state,
        myMealplans: [...state.myMealplans, action.payload],
        isMealplanSaved: true,
      };
    case UPDATE_MEALPLAN:
      return {
        ...state,
        myMealplans: state.myMealplans.map((plan) =>
          plan.id === action.payload.id ? action.payload : plan
        ),
      };
    default:
      return state;
  }
}
