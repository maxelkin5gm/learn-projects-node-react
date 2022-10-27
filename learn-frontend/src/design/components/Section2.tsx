import React from 'react';

import BenefitCard from "./BenefitCard";

// images
import icon from "../img/benefits-icon/icon.svg";
import icon2 from "../img/benefits-icon/icon2.svg";
import icon3 from "../img/benefits-icon/icon3.svg";


const Section2 = () => {
    return (
        <section className="section2">
            <div className="wrapper-large section2__wrapper">

                <div className="section2__title">
                    <div className="wrapper-small">
                        <h2>Benefits of Design</h2>
                    </div>
                </div>

                <div className="wrapper-small">
                    <div className="section2__cards">
                        <BenefitCard icon={icon} title="Welcome to Design!" hrefLearnMore="/"
                                     description="Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over."/>
                        <BenefitCard icon={icon2} title="Your Personal Japan Guide" hrefLearnMore="/"
                                     description="Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over."/>
                        <BenefitCard icon={icon3} title="Promoting Local Businesses" hrefLearnMore="/"
                                     description="Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over."/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Section2;