import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { userSessionAPI } from '../api/API';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import Button from '../components/button/Button';
import Loading from '../components/loading/Loading';
import './login.css';
import Logo from '../components/logo/Logo';

const Login = ({
    setIsLoggedIn,
    setHeaders,
    setUser,
    setLoginMessage,
    localStorageLogin,
    isLoading,
    setIsLoading,
}) => {
    //Refs for email and password input fields
    let loginEmailRef = useRef(null);
    let loginPasswordRef = useRef(null);

    const [rememberUser, setRememberUser] = useState(null);

    const isRememberUser = (e) => {
        const checked = e.target.checked;
        if (checked) {
            setRememberUser(true);
        } else {
            setRememberUser(false);
        }
    };

    //Login function
    const loginFunction = () => {
        if (
            loginEmailRef.current.value !== '' &&
            loginPasswordRef.current.value !== ''
        ) {
            //Save login data to an object so it can be passed down to API call
            const data = {
                url: 'auth/sign_in',
                email: loginEmailRef.current.value,
                password: loginPasswordRef.current.value,
            };

            //Message for logging in while waiting for API response
            setLoginMessage('Logging you in...');
            setIsLoading(true);

            //API call for creating new user session
            userSessionAPI(data)
                .then((res) => {
                    setTimeout(() => {
                        setHeaders(res.headers);
                        setUser(res.data.data);
                        setLoginMessage('Logged in!');
                        setIsLoggedIn(true);
                        setIsLoading(false);
                        if (rememberUser) {
                            localStorageLogin(
                                /* res.data.data, res.headers */ data
                            );
                        }
                    }, 1500);
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
                        setIsLoading(false);
                    } else if (err.request) {
                        // The request was made but no response was received
                        console.log(err.request);
                        setIsLoading(false);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', err.message);
                        setIsLoading(false);
                    }
                });
        } else {
            setLoginMessage('Please fill out the required fields');
        }
    };

    return (
        <div className="login-page">
            {/* {isLoading ? <Loading /> : ''} */}
            <Logo className="hero-logo" />
            <h2 className="login-title">Let's go!</h2>
            <p className="login-subtitle">
                Log in to your account and start connecting
            </p>
            <form
                className="login-container"
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(loginEmailRef.current.value);
                    console.log(loginPasswordRef.current.value);
                    loginFunction({});
                }}
            >
                <label className="input-container">
                    <span>Email</span>
                    <input
                        type="email"
                        name="login-email"
                        id="login-email"
                        ref={loginEmailRef}
                    />
                </label>

                <label className="input-container">
                    <span>Password</span>
                    <input
                        type="password"
                        name="login-password"
                        id="login-password"
                        ref={loginPasswordRef}
                    />
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="remember-user"
                        id="remember-user"
                        onClick={(e) => {
                            isRememberUser(e);
                        }}
                    />
                    <span>Keep me logged in</span>
                </label>
                <Button type="submit" text="Login" className="login-button" />
            </form>

            <div>
                Don't have an account yet?{' '}
                <NavLink to="/signup">Sign up here.</NavLink>
            </div>
        </div>
    );
};

export default Login;
