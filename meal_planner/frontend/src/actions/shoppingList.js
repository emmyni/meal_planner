import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import {
  GET_SHOPPING_LIST,
  DELETE_SHOPPING_LIST,
  ADD_SHOPPING_LIST,
  UPDATE_SHOPPING_LIST,
  GET_ERRORS,
} from "./types.js";

// GET SHOPPING_LIST items
export const getShoppingList = () => (dispatch, getState) => {
  axios
    .get("/api/shopping-list/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SHOPPING_LIST,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Shopping_List item
export const deleteShoppingList = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/shopping-list/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteItem: "Item Deleted" }));
      dispatch({
        type: DELETE_SHOPPING_LIST,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// Add SHOPPING_LIST items
export const addShoppingList = (item) => (dispatch, getState) => {
  axios
    .post("/api/shopping-list/", item, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addItem: "Item Added" }));
      dispatch({
        type: ADD_SHOPPING_LIST,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Update SHOPPING_LIST
export const updateShoppingList = (id, item) => (dispatch, getState) => {
  axios
    .patch(`/api/shopping-list/${id}/`, item, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ updateItem: "Shopping List Item Updated" }));
      dispatch({
        type: UPDATE_SHOPPING_LIST,
        payload: res.data,
      });
    })
    .catch(dispatch(returnErrors(err.response.data, err.response.status)));
};
