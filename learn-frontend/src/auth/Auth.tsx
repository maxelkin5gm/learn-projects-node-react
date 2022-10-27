import React from 'react';
import {Provider} from "react-redux";

import App from "./App";
import {store} from "./store/store";
import {BrowserRouter} from "react-router-dom";

import './styles/global.scss'


const Auth = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );
};

export default Auth;