import {
  GET_RECIPE_RANDOM,
  GET_RECIPE_BY_INGREDIENTS,
} from "../../actions/types.js";

const initialState = {
  recipes: [],
  recipesFetched: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECIPE_RANDOM:
      return {
        ...state,
        recipes: action.payload.recipes,
        recipesFetched: true,
      };
    case GET_RECIPE_BY_INGREDIENTS:
      return {
        ...state,
        recipes: action.payload,
        recipesFetched: true,
      };
    default:
      return state;
  }
}
