import React from 'react';

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Footer from "./components/Footer";

import './styles/main.scss'

function Design() {
    return (
        <>
            <Section1/>
            <Section2/>
            <Section3/>

            <Footer />
        </>
    );
}

export default Design;
