import React from 'react';

// images
import img1 from "../../img/1.jpg"
import img2 from "../../img/2.jpg"
import img3 from "../../img/3.jpg"
import img4 from "../../img/4.jpg"
import img5 from "../../img/5.jpg"


const Gallery = () => {
    return (
        <section className="content__gallery gallery">
            <h2 className="gallery__title">Галерея</h2>

            <div className="gallery__items">
                <div className="gallery__item gallery__item_big">
                    <img src={img1} alt=""/>
                </div>
                <div className="gallery__item">
                    <img src={img2} alt=""/>
                </div>
                <div className="gallery__item">
                    <img src={img3} alt=""/>
                </div>
                <div className="gallery__item">
                    <img src={img4} alt=""/>
                </div>
                <div className="gallery__item">
                    <img src={img5} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Gallery;