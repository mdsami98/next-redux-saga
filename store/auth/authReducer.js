/* eslint-disable default-param-last */

// import * as ACTION from "./authActionType.js";

// const initialState = {
//   user: "Submit",
//   isLoading: false
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ACTION.LOGIN_SUBMIT:
//       return {
//         ...state,
//         user: "Sami",
//         isLoading: true
//       };
//     case ACTION.LOGIN_SUCCESS:
//       return {
//         ...state,
//         user: "Sami",
//         isLoading: false
//       };
//     default:
//       return state;
//   }
// };

// export const authData = (state) => state.authReducer;

// export default authReducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  user: "Not Clicked",
  login: false
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSubmit: (state) => {
      state.user = "Clicked";
      state.loading = true;
      state.login= false;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.login= true;
    },
    loginFailed: (state) => {
      state.user = "Sami";
      state.loading = false;
      state.login= false;
    }
  }
});

export default authSlice.reducer;
export const authSelector = (state) => state.auth;
export const { loginSubmit, loginSuccess, loginFailed } = authSlice.actions;
