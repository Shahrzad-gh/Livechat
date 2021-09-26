import { authConstant } from "../actions/Types";

const initialState = {
  auth: {
    firstName: "",
    lastName: "",
  },
  loading: false,
  error: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case authConstant.SIGN_UP_SUCCESS:
      return (state = {
        auth: action.payload,
      });
    case authConstant.SIGN_IN_SUCCESS:
      return (state = {
        auth: action.payload,
      });
    default:
      return state;
  }
}
export default authReducer;
