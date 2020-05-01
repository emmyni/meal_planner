import { GENERATE_MEALPLAN } from "../actions/types.js";

const initialState = {
  mealplanFormData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GENERATE_MEALPLAN:
      return {
        ...state,
        mealplanFormData: action.payload,
      };
    default:
      return state;
  }
}
