import React from 'react';

import Gallery from "./Gallery";
import Products from "./Products";

const Main = () => {
    return (
        <main className="main">
            <div className="main__wrapper">
                <aside className="sidebar">
                    <nav className="sidebar__nav">
                        <a href="" className="sidebar__link">Пункт меню 1</a>
                        <a href="" className="sidebar__link">Пункт меню 2</a>
                        <a href="" className="sidebar__link">Пункт меню 3</a>
                        <a href="" className="sidebar__link">Пункт меню 4</a>
                    </nav>
                </aside>

                <section className="content">
                    <h1>GRID Layout - Практика</h1>
                    <Gallery />
                    <Products />
                </section>
            </div>
        </main>

    );
};

export default Main;