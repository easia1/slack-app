import axios from 'axios';
import Button from '../components/Button'
import { useEffect, useState } from 'react';

const Login = () => {
    useEffect(() => {
        axios
            .post('/api/v1/auth/sign_in', {
                email: 'easia@test.com',
                password: 'password',
            })
            .then(({ data: data }) => console.log(data));
    });

    return (
        <div>
            <form action="">
                <label htmlFor="login-email">Email</label>
                <input type="text" name="login-email" id="login-email" />

                <label htmlFor="login-password">Password</label>
                <input
                    type="password"
                    name="login-password"
                    id="login-password"
                />
                <Button text="Submit" />
            </form>
        </div>
    );
};

export default Login;
