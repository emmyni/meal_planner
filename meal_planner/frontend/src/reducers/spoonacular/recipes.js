import { GET_RECIPE_RANDOM } from "../../actions/types.js";

const initialState = {
  randomRecipes: [],
  randomRecipesFetched: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECIPE_RANDOM:
      return {
        ...state,
        randomRecipes: action.payload.recipes,
        randomRecipesFetched: true,
      };
    default:
      return state;
  }
}
