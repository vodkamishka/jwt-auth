import React, {useContext, useEffect, useState} from 'react';
import LoginForm from './components/LoginForm';
import {Context} from './index';
import {observer} from 'mobx-react-lite';
import {IUser} from './models/IUser';
import UserService from "./services/UserService";

function App() {
    const {store} = useContext(Context)

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, [])

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    if (store.isLoading) {
        return <div>Loading...</div>
    }

    if (!store.isAuth) {
        return (
            <LoginForm/>
        )
    }

    return (
    <div>
        <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'log in'}</h1>
        <h1>{store.user.isActivated ? 'account confirmed by email' : 'confirm account'}</h1>
        <button onClick={() => store.logout()}>Log out</button>
        <div>
            <button onClick={getUsers}>Get users</button>
        </div>
        {users.map(user =>
            <div key={user.email}>{user.email}</div>
        )}
    </div>
  );
}

export default observer(App);
