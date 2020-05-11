import {
  GET_RECIPE_RANDOM,
  GET_RECIPE_BY_INGREDIENTS,
  GET_RECIPE_BY_TYPE,
  GET_RECIPE_INFO,
  GET_RECIPE_INFO_BULK,
} from "../../actions/types.js";

const initialState = {
  randomRecipes: [],
  ingredientRecipes: [],
  typeRecipes: [],
  recipesFetched: false,
  totalRecipes: 0,
  recipesExtended: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECIPE_RANDOM:
      return {
        ...state,
        randomRecipes: action.payload,
        recipesFetched: true,
      };
    case GET_RECIPE_BY_INGREDIENTS:
      return {
        ...state,
        ingredientRecipes: action.payload,
        recipesFetched: true,
      };
    case GET_RECIPE_BY_TYPE:
      return {
        ...state,
        typeRecipes: action.payload.recipes,
        recipesFetched: true,
        totalRecipes: action.payload.totalResults,
      };
    case GET_RECIPE_INFO:
      return {
        ...state,
        recipesExtended: [action.payload],
      };
    case GET_RECIPE_INFO_BULK:
      return {
        ...state,
        recipesExtended: action.payload,
      };

    default:
      return state;
  }
}
