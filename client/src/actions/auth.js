import { AUTH } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const signin = (formData, history) => async (dispatch) => {
  try {
    // Login the user
    history.push("/");
  } catch (error) {}
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // Sign up the user
    history.push("/");
  } catch (error) {}
};
