import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/styles.css";
import React from 'react';
import {wrapper} from '../store';

const MyApp = ({Component, pageProps}) => {
    return <Component {...pageProps}/>
}

export default wrapper.withRedux(MyApp)


