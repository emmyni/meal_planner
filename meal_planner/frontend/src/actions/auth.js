import axios from "axios";
import { returnErrors } from "./messages";

import { USER_LOADING, USER_LOADED, AUTH_ERROR } from "./types";

// check token and load user
export const loadUser = () => (dispatch, getState) => {
  // user loading
  dispatch({ type: USER_LOADING });

  // get token from state
  const token = getState().auth.token;

  // headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // if token, add to headers config
  if (token) {
    config.headers["Authorication"] = `Token ${token}`;
  }

  axios
    .get("/api/auth/user", config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.date
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};
