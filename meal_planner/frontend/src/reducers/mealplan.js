import { GENERATE_MEALPLAN } from "../actions/types.js";

const initialState = {
  mealplanData: [],
  mealplanFetched: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GENERATE_MEALPLAN:
      return {
        ...state,
        mealplanData: action.payload,
        mealplanFetched: true,
      };
    default:
      return state;
  }
}
