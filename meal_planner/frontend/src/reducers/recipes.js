import { GET_RECIPE, DELETE_RECIPE, ADD_RECIPE } from "../actions/types.js";

const initialState = {
  myRecipes: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECIPE:
      return {
        ...state,
        myRecipes: action.payload,
      };
    case DELETE_RECIPE:
      return {
        ...state,
        myRecipes: state.recipes.filter(
          (recipe) => recipe.id !== action.payload
        ),
      };
    case ADD_RECIPE:
      return {
        ...state,
        myRecipes: [state.recipes, action.payload],
      };
    default:
      return state;
  }
}
