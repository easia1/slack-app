import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { userSessionAPI } from '../api/API';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import Button from '../components/button/Button';

const Login = ({
    setIsLoggedIn,
    setHeaders,
    setUser,
    setLoginMessage,
    localStorageLogin,
}) => {
    let loginEmailRef = useRef(null);
    let loginPasswordRef = useRef(null);

    const loginFunction = () => {
        if (
            loginEmailRef.current.value !== '' &&
            loginPasswordRef.current.value !== ''
        ) {
            const data = {
                url: 'auth/sign_in',
                email: loginEmailRef.current.value,
                password: loginPasswordRef.current.value,
            };
            setLoginMessage('Logging you in...');
            userSessionAPI(data)
                .then((res) => {
                    setHeaders(res.headers);
                    setUser(res.data.data);
                    setLoginMessage('Logged in!');
                    setIsLoggedIn(true);
                    localStorageLogin(res.data.data, res.headers);
                })

                .catch((err) => {
                    if (err.response) {
                        // Request made and server responded
                        console.log(err.response.data);
                        console.log(err.response.status);
                        console.log(err.response.headers);
                        setHeaders('');
                        setUser('');
                        setLoginMessage(err.response.data.errors[0]);
                    } else if (err.request) {
                        // The request was made but no response was received
                        console.log(err.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', err.message);
                    }
                });
        } else {
            setLoginMessage('Please fill out the required fields');
        }
    };

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(loginEmailRef.current.value);
                    console.log(loginPasswordRef.current.value);
                    loginFunction({});
                }}
            >
                <label>
                    Email
                    <input
                        type="email"
                        name="login-email"
                        id="login-email"
                        ref={loginEmailRef}
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="login-password"
                        id="login-password"
                        ref={loginPasswordRef}
                    />
                </label>
                <Button type="submit" text="Login" />
                <label>
                    <input
                        type="checkbox"
                        name="remember-user"
                        id="remember-user"
                    />
                    Keep me logged in
                </label>
            </form>
            <div>
                Don't have an account yet? <a>Sign up here.</a>
            </div>
        </div>
    );
};

export default Login;
