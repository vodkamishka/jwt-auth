import React, {FC, useState, useContext} from "react";
import {Context} from '../index';
import {observer} from "mobx-react-lite";


const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context);

    return (
        <div>
            <input
                onChange={e => setEmail(e.target.value)}
                type={'text'}
                value={email}
                placeholder={'email'}
            />
            <input
                onChange={e => setPassword(e.target.value)}
                type={'text'}
                value={password}
                placeholder={'password'}
            />
            <button onClick={()=> store.login(email, password)}>Login</button>
            <button onClick={()=> store.registration(email, password)}>Registration</button>
        </div>
    )
}

export default observer(LoginForm);