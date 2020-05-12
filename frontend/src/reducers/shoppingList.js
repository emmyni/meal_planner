import {
  GET_SHOPPING_LIST,
  DELETE_SHOPPING_LIST,
  ADD_SHOPPING_LIST,
  UPDATE_SHOPPING_LIST,
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
    case UPDATE_SHOPPING_LIST:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
}
