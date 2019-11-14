import axios from "axios";
import { createMessage, returnErrors } from "./messages";

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
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
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
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
