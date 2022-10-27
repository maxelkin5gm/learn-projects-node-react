import React from 'react';

// images
import img1 from '../img/places/Image.jpg'
import img2 from '../img/places/Image2.jpg'
import img3 from '../img/places/Image3.jpg'
import img4 from '../img/places/Image4.jpg'
import img5 from '../img/places/Image5.jpg'
import arrow from '../img/arrow.svg'

const Section3 = () => {
    return (
        <section className="section3">
            <div className="wrapper-large">
                <div className="section3__header">
                    <div className="section3__title">
                        <h2>Get inspired for your next trip</h2>
                    </div>
                    <div className="link section3__view-all">
                        <a href="">VIEW ALL</a>
                        <img src={arrow} alt="arrow"/>
                    </div>
                </div>

                <div className="section3__places">
                    <div className="section3__place">
                        <img src={img1} alt=""/>
                    </div>
                    <div className="section3__place">
                        <img src={img2} alt=""/>
                    </div>
                    <div className="section3__place">
                        <img src={img3} alt=""/>
                    </div>
                    <div className="section3__place">
                        <img src={img4} alt=""/>
                    </div>
                    <div className="section3__place">
                        <img src={img5} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;