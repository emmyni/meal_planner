import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import {
  GET_PANTRY,
  DELETE_PANTRY,
  ADD_PANTRY,
  UPDATE_PANTRY,
  GET_ERRORS,
} from "./types.js";

// GET PANTRY items
export const getPantry = () => (dispatch, getState) => {
  axios
    .get("/api/pantry/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PANTRY,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Pantry item
export const deletePantry = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/pantry/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteItem: "Item Deleted" }));
      dispatch({
        type: DELETE_PANTRY,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// Add PANTRY items
export const addPantry = (item) => (dispatch, getState) => {
  axios
    .post("/api/pantry/", item, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addItem: "Item Added" }));
      dispatch({
        type: ADD_PANTRY,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Update Pantry
export const updatePantry = (id, item) => (dispatch, getState) => {
  axios
    .patch(`/api/pantry/${id}/`, item, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ updateItem: "Pantry Item Updated" }));
      dispatch({
        type: UPDATE_PANTRY,
        payload: res.data,
      });
    })
    .catch(dispatch(returnErrors(err.response.data, err.response.status)));
};
