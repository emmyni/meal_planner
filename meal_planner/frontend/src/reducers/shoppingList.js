import {
  GET_SHOPPING_LIST,
  DELETE_SHOPPING_LIST,
  ADD_SHOPPING_LIST,
} from "../actions/types.js";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SHOPPING_LIST:
      return {
        ...state,
        items: action.payload,
      };
    case DELETE_SHOPPING_LIST:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case ADD_SHOPPING_LIST:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}
