import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import {
  GET_MEALPLAN,
  DELETE_MEALPLAN,
  ADD_MEALPLAN,
  UPDATE_MEALPLAN,
} from "./types.js";

// GET MEALPLAN
export const getMealplan = () => (dispatch, getState) => {
  axios
    .get("/api/mealplan/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_MEALPLAN,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete MEALPLAN
export const deleteMealplan = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/mealplan/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteItem: "Mealplan Removed" }));
      dispatch({
        type: DELETE_MEALPLAN,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// Add MEALPLAN
export const addMealplan = (item) => (dispatch, getState) => {
  axios
    .post("/api/mealplan/", item, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addItem: "Mealplan Added" }));
      dispatch({
        type: ADD_MEALPLAN,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Update MEALPLAN
export const updateMealplan = (id, item) => (dispatch, getState) => {
  axios
    .patch(`/api/mealplan/${id}/`, item, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ updateItem: "Mealplan Updated" }));
      dispatch({
        type: UPDATE_MEALPLAN,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
