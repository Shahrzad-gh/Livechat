import { authConstant } from "./Types";
import axios from "axios";

export const register = (data) => {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.post("register", data);
      console.log(res);
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
  console.log("action", data);
  return async (dispatch) => {
    let res;
    try {
      res = await axios.post("login", data);
      console.log(res);
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
