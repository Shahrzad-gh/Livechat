import { authConstant } from "./Types";
import axios from "axios";

export const register = (data) => {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.post("register", data);
      dispatch({
        type: authConstant.SIGN_UP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: authConstant.SIGN_UP_FAILURE,
        payload: res.error,
      });
    }
  };
};

export const login = (data) => {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.post("login", data);
      dispatch({
        type: authConstant.SIGN_IN_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: authConstant.SIGN_IN_FAILURE,
        payload: res.error,
      });
    }
  };
};
