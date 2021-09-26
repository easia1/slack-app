import React, { useState, useRef } from 'react';
import Button from '../components/button/Button';
import axios from 'axios';
import { userSessionAPI } from '../api/API';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import './login.css';
import Toast from '../components/toast/Toast';

const Register = () => {
    const registerEmailRef = useRef(null);
    const registerPasswordRef = useRef(null);
    const registerConfirmPasswordRef = useRef(null);

    const [message, setMessage] = useState();
    const [showToast, setShowToast] = useState(false);
    const [showPassError, setShowPassError] = useState(false);

    const onRegister = () => {
        handleError();

        const data = {
            url: 'auth',
            email: registerEmailRef.current.value,
            password: registerPasswordRef.current.value,
            password_confirmation: registerConfirmPasswordRef.current.value,
        };

        userSessionAPI(data).then((res) => {
            setMessage('Registration Success');
            setShowToast(true);
        });
    };

    const handleError = () => {
        if (
            registerPasswordRef.current.value !==
            registerConfirmPasswordRef.current.value
        ) {
            setMessage('Password did not match');
            setShowPassError(true);
            registerPasswordRef.current.focus();
        }
        if (registerPasswordRef.current.value.length < 6) {
            setMessage('Password is too short');
            setShowPassError(true);
        }
        if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                registerEmailRef.current.value
            )
        ) {
            setMessage('Please enter valid email');
            setShowPassError(true);
        }
    };

    return (
        <div className='login-page'>
            <h2 className='login-title'>Let's get started!</h2>
            <p className='login-subtitle'>
                Sign up for an account to connect with other people
            </p>
            <form
                className='login-container'
                onSubmit={(e) => {
                    e.preventDefault();
                    onRegister();
                }}
            >
                <br />

                <label className='input-container'>
                    <span>Email</span>
                    <input
                        type='email'
                        name='register-email'
                        id='register-email'
                        ref={registerEmailRef}
                    />
                </label>

                <label className='input-container'>
                    <span>Password</span>
                    <input
                        type='password'
                        name='register-name'
                        min='6'
                        id='register-password'
                        ref={registerPasswordRef}
                    />
                </label>

                <label className='input-container'>
                    <span>Confirm Password</span>
                    <input
                        type='password'
                        name='register-name'
                        min='6'
                        id='register-passconfirm'
                        ref={registerConfirmPasswordRef}
                    />
                </label>

                <Button
                    text='Register'
                    type='submit'
                    className='login-button'
                />
            </form>
            <div>
                Already have an account? <NavLink to='/'>Log in.</NavLink>
            </div>
            {showToast || showPassError ? (
                <Toast className='toast-message' text={message} />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Register;
