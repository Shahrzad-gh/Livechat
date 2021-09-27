import { authConstant } from "./Types";
import axios from "axios";

export const register = (data) => {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.post("register", data);
      console.log(res.data);
      dispatch({
        type: authConstant.SIGN_UP_SUCCESS,
        payload: res.data,
      });
      window.location = `/profile/${res.data.user}`;
    } catch (error) {
      dispatch({
        type: authConstant.SIGN_UP_FAILURE,
        payload: error,
      });
      window.location = "/authentication";
    }
  };
};

export const login = (data) => {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.post("login", data);
      console.log("action", res.data);

      dispatch({
        type: authConstant.SIGN_IN_SUCCESS,
        payload: res.data,
      });
      window.location = "/livechat";
    } catch (error) {
      dispatch({
        type: authConstant.SIGN_IN_FAILURE,
        payload: error,
      });
      window.location = "/authentication";
    }
  };
};
