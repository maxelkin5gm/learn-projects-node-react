import React from 'react';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

import './styles/main.scss'


const Grid = () => {
    return (
        <>
            <div className="root-wrapper">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </>
    );
};

export default Grid;