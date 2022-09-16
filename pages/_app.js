import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/styles.css";
import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import UserLayout from "../components/Layout/UserLayout";
import App from "next/app";
import { getCookies } from "cookies-next";
import AuthProvider from "../components/Auth/AuthProvider";
import AuthGuard from "../components/Auth/AuthGuard";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        {Component.requireAuth ? (
          <AuthGuard>
            <UserLayout>
              <Component {...pageProps} />
            </UserLayout>
          </AuthGuard>
        ) : (
          <Component {...pageProps} />
        )}
      </AuthProvider>
    </Provider>
  );
};

// MyApp.getInitialProps = async (ctx) => {

//   const c = getCookies(ctx);
//   return { stars: c }
// }

export default MyApp;
