import React from 'react';

// images
import logo from "../img/logo.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper-small">
                <div className="footer__wrapper">
                    <img src={logo} alt=""/>

                    <div className="footer_company">
                        <h4>Company</h4>
                        <a href="">About</a>
                        <a href="">Term</a>
                        <a href="">Career</a>
                        <a href="">Privacy Policy</a>
                    </div>

                    <div className="footer__locations">
                        <h4>Locations</h4>
                        <a href="">Tokyo</a>
                        <a href="">Kyoto</a>
                        <a href="">Osaka</a>
                        <a href="">Hokkaido</a>
                    </div>

                    <div className="footer__social">
                        <h4>Social Media</h4>
                        <a href="">Facebook</a>
                        <a href="">Twitter</a>
                        <a href="">Instagram</a>
                        <a href="">YouTube</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;