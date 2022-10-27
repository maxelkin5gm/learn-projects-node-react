import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import {AuthService} from "./services/AuthService";
import {useAppDispatch} from "./store/hooks";
import Container from "./components/containers/Container";
import ProtectedPage from "./pages/ProtectedPage";

const App = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        AuthService.checkAuth(dispatch)
    }, [dispatch])

    return (
        <Container>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/registration'} element={<RegistrationPage/>}/>
                <Route path={'/protected-page'} element={<ProtectedPage/>}/>
            </Routes>
        </Container>
    );
};

export default App;