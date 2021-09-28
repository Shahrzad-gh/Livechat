import axios from "axios";
import { userConstant } from "./Types";

export const getUser = (id) => {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.get("/getuser", id);
      dispatch({
        type: userConstant.GET_USER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: userConstant.GET_USER_FAILURE,
        payload: res.error,
      });
    }
  };
};
