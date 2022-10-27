import React from 'react';
import {useIsAuth} from "../hooks/useIsAuth";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {AuthService} from "../services/AuthService";


const ProtectedPage = () => {
    const user = useAppSelector(state => state.auth.user)
    const dispatch = useAppDispatch();

    if (!useIsAuth()) return <>Loading...</>

    return (
        <div style={{fontSize: 25}}>
            <h1>Protected Page</h1>
            <hr/>
            {user && <span>Email: {user?.email}</span>}
            <br/>
            <button onClick={() => AuthService.logout(dispatch)}>Logout</button>
            <hr/>
            <Link to={'/'}>Go Main Page</Link>
        </div>
    );
};

export default ProtectedPage;