import { userConstant } from "../actions/Types";

const initialState = {
  user: {},
  error: null,
  loadding: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstant.GET_USER_SUCCESS:
      return (state = {
        ...state,
        user: action.payload,
      });
    case userConstant.GET_USER_FAILURE:
      return (state = {
        ...state,
        error: action.payload,
      });
    default:
      return state;
  }
};

export default userReducer;
