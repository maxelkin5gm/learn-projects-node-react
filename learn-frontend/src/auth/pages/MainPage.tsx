import React from 'react';
import {Link} from "react-router-dom";


const MainPage = () => {
    return (
        <div style={{fontSize: 25}}>
            <h1>Main Page</h1>

            <hr/>
            <Link to={'/login'}>Login</Link>
            <hr/>
            <Link to={'/registration'}>Registration</Link>
            <hr/>
            <Link to={'/protected-page'}>Protected Page</Link>
        </div>
    );
};

export default MainPage;