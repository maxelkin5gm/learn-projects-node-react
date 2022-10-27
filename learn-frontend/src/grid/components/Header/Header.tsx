import React, {useState} from 'react';

const Header = () => {
    const [menuActiveState, setMenuActiveState] = useState(false)

    menuActiveState ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""

    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__content">
                    <div className="header__logo">
                        <div className="header__logo-img"></div>
                    </div>
                    <nav className={"header__nav" + (menuActiveState ? " _active" : "")}>
                        <a href="" className="header__link">Пункт меню 1</a>
                        <a href="" className="header__link">Пункт меню 2</a>
                        <a href="" className="header__link">Пункт меню 3</a>
                        <a href="" className="header__link">Пункт меню 4</a>
                    </nav>

                    <div className="header__burger" onClick={() => setMenuActiveState(!menuActiveState)}>
                        <span></span>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;