/* eslint-disable default-param-last */

import * as ACTION from "./authActionType.js";

const initialState = {
  user: "Submit",
  isLoading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.LOGIN_SUBMIT:
      return {
        ...state,
        user: "Sami",
        isLoading: true
      };
    case ACTION.LOGIN_SUCCESS:
      return {
        ...state,
        user: "Sami",
        isLoading: false
      };
    default:
      return state;
  }
};

export const authData = (state) => state.authReducer;

export default authReducer;
