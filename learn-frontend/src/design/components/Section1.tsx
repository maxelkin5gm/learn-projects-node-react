import React from 'react';

// images
import logo from '../img/logo.svg'


const Section1 = () => {
    return (
        <section className="section1">
            <div className="wrapper-small">
                <header className="section1__header">

                    <a href="/">
                        <img src={logo} alt="logo"/>
                    </a>

                    <nav className="section1__nav">
                        <a className="section1__nav-link" href="">Articles</a>
                        <a className="section1__nav-link" href="">Locations</a>
                        <a className="section1__nav-link" href="">Videos</a>
                        <a className="section1__nav-link" href="">Sign in</a>
                    </nav>
                </header>

                <div className="section1__title">
                    <h1 className="section1__title-h1">Discover Amazing places in Japan</h1>
                </div>

                <div className="section1__description">
                    <p>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being
                        gorgeous
                        with belly side up i could pee on this if i had the energy but under the bed, for attack the
                        child, open
                        the door,</p>
                </div>

                <form className="section1__search-form">
                    <label>
                        <input className="section1__input" placeholder="What would you like to do?" type="text"/>
                    </label>
                    <label>
                        <input className="section1__input" placeholder="Where would you like to go?" type="text"/>
                    </label>
                    <button className="section1__btn-search" type="submit">SEARCH</button>
                </form>
            </div>
        </section>
    );
};

export default Section1;