import {
  GET_PANTRY,
  DELETE_PANTRY,
  ADD_PANTRY,
  UPDATE_PANTRY,
} from "../actions/types.js";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PANTRY:
      return {
        ...state,
        items: action.payload,
      };
    case DELETE_PANTRY:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case ADD_PANTRY:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case UPDATE_PANTRY:
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
