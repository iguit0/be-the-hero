import { createReducer } from "reduxsauce";

import { Types } from "../actionCreators";

export const INITIAL_STATE = {
  isAuthing: false,
  isAuth: false,
  isSignIn: false,
  user: {},
  error: false,
  errorMessage: ""
};

export const signInRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSignIn: true,
    error: false,
    errorMessage: ""
  };
};

export const signInSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isAuth: true,
    isSignIn: false,
    user: action.user
  };
};

export const signInFail = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSignIn: false,
    error: true,
    errorMessage: action.error
  };
};

export const HANDLERS = {
  [Types.SIGNIN_REQUEST]: signInRequest,
  [Types.SIGNIN_SUCCESS]: signInSuccess,
  [Types.SIGNIN_FAIL]: signInFail
};

export default createReducer(INITIAL_STATE, HANDLERS);
