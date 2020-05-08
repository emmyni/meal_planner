import {
  GENERATE_MEALPLAN,
  GENERATE_MEALPLAN_EXTENDED,
} from "../../actions/types.js";

const initialState = {
  mealplanShort: [],
  mealplanFetched: false,
  mealplanExtended: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GENERATE_MEALPLAN:
      return {
        ...state,
        mealplanShort: action.payload,
        mealplanFetched: true,
      };
    case GENERATE_MEALPLAN_EXTENDED:
      return {
        ...state,
        mealplanExtended: action.payload,
      };
    default:
      return state;
  }
}
