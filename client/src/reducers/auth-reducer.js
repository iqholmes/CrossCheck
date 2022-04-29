import { AUTH_USER, AUTH_ERROR } from "../actions/index";

const INITIAL_STATE = {
  authenticated: localStorage.getItem("token") || "",
  errorMessage: "",
};

const authReducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload.token,
      };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}

export default authReducer;