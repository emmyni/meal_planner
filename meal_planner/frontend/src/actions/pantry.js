import axios from "axios";
import { createMessage } from "./messages";

import { GET_PANTRY, DELETE_PANTRY, ADD_PANTRY, GET_ERRORS } from "./types.js";

// GET PANTRY items
export const getPantry = () => dispatch => {
  axios
    .get("/api/pantry/")
    .then(res => {
      dispatch({
        type: GET_PANTRY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Delete Pantry item
export const deletePantry = id => dispatch => {
  axios
    .delete(`/api/pantry/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteItem: "Item Deleted" }));
      dispatch({
        type: DELETE_PANTRY,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// Add PANTRY items
export const addPantry = item => dispatch => {
  axios
    .post("/api/pantry/", item)
    .then(res => {
      dispatch(createMessage({ addItem: "Item Added" }));
      dispatch({
        type: ADD_PANTRY,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
