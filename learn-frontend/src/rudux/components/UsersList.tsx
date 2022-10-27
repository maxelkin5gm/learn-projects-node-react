import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../store/hooks";
import {fetchUsers} from "../services/fetchUsers";


const UsersList = () => {
    const userState = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    useEffect(() => {
        fetchUsers(dispatch)
    }, [dispatch])

    return (
        <div style={{textAlign: "center"}}>
            <h1>Список пользователей:</h1>

            {userState.isLoading && <h1>Loading</h1>}
            {userState.error && <h1>{userState.error}</h1>}
            {userState.users.map((user, index) => (<h1 key={index}>{index + 1}. {user.name} : {user.age}</h1>))}
        </div>
    );
};

export default UsersList;