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

    const onRegister = () => {
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
                        id='register-password'
                        ref={registerPasswordRef}
                    />
                </label>

                <label className='input-container'>
                    <span>Confirm Password</span>
                    <input
                        type='password'
                        name='register-name'
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
            {showToast ? (
                <Toast className='toast-message' text={message} />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Register;
