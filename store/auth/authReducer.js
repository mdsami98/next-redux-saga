
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  user: null,
  login: false,
  initialization:true,
  redirectUrl:null
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSubmit: (state) => {
      state.loading = true;
      state.login= false;

    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.login= true;

    },
    loginFailed: (state) => {
      state.loading = false;
      state.login= false;

    },
    checkAuth: (state) => {
      state.user = null;
      state.initialization= true;
    },
    checkAuthSuccess: (state, action) => {
      state.user = action.payload.data;
      state.initialization= false;
    },
    checkAuthFailed: (state) => {
      state.user = null;
      state.initialization= false;
    },
    setRedirect: (state, action) => {
      state.redirectUrl= action.payload;
    },
    clearRedirect: (state) => {
      state.redirectUrl= null;
    },
    
  }
});

export default authSlice.reducer;
export const authSelector = (state) => state.auth;
export const { loginSubmit, loginSuccess, loginFailed , checkAuth,checkAuthSuccess, checkAuthFailed, setRedirect, clearRedirect} = authSlice.actions;
