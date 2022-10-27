import React from 'react';
import ReactDOM from 'react-dom/client';

import Design from './design/Design';
import Grid from "./grid/Grid";
import Redux from "./rudux/Redux";
import Mobx from "./mobx/Mobx";
import Auth from "./auth/Auth";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        {/*<Design/>  /!*  completed  *!/*/}
        {/*<Grid /> /!*  completed  *!/*/}
        {/*<Redux /> /!*  completed  *!/*/}
        {/*<Mobx /> /!*  completed  *!/*/}
        <Auth/> {/*  completed  */}
    </React.StrictMode>
);

