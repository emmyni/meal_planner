import {
  GET_RECIPE_RANDOM,
  GET_RECIPE_BY_INGREDIENTS,
  GET_RECIPE_BY_TYPE,
} from "../../actions/types.js";

const initialState = {
  recipes: [],
  recipesFetched: false,
  totalRecipes: 0,
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
    case GET_RECIPE_BY_TYPE:
      return {
        ...state,
        recipes: action.payload.results,
        recipesFetched: true,
        totalRecipes: action.payload.totalResults,
      };
    default:
      return state;
  }
}
