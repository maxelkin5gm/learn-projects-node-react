import React from 'react';

import ToggleTheme from "./components/ToggleTheme";
import UsersList from "./components/UsersList";
import {useAppSelector} from "./store/hooks";
import {GlobalStyle} from "./styles/GlobalStyle";

const App = () => {
    const themeIsDark = useAppSelector(state => state.theme.themeIsDark);

    return (
        <div>
            <GlobalStyle themeIsDark={themeIsDark} />
            <ToggleTheme/>
            <UsersList/>
        </div>
    );
};



export default App;