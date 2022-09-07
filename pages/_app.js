import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/styles.css";
import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import UserLayout from "../components/Layout/UserLayout";
import { loginSuccess } from "../store/auth/authReducer";

const MyApp = ({ Component, pageProps }) => {
  
  return (
    <Provider store={store}>
      <UserLayout>
        <Component {...pageProps} />
      </UserLayout>
    </Provider>
  );
}

export default MyApp;
