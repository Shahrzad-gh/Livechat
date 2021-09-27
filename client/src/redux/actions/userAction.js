import axios from "axios";
import { userConstant } from "./Types";

export const getUser = () => {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.get("/getuser");
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
