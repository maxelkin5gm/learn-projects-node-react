import React, {useEffect} from 'react';
import {fetchUsers} from "../services/fetchUsers";

import {userState} from "../store/userState";
import {observer} from "mobx-react-lite";


const UsersList = observer(() => {

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div style={{textAlign: "center"}}>
            <h1>Список пользователей:</h1>

            {userState.isLoading && <h1>Loading</h1>}
            {userState.error && <h1>{userState.error}</h1>}
            {userState.users.map((user, index) => (<h1 key={index}>{index + 1}. {user.name} : {user.age}</h1>))}
        </div>
    );
})

export default UsersList;