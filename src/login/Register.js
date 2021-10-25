import React, { useState, useRef } from 'react';
import Button from '../components/button/Button';
import { userSessionAPI } from '../api/API';
import { NavLink } from 'react-router-dom';
import './login.css';
import Toast from '../components/toast/Toast';

const Register = () => {
    const registerEmailRef = useRef(null);
    const registerPasswordRef = useRef(null);
    const registerConfirmPasswordRef = useRef(null);

    const [message, setMessage] = useState();
    const [showToast, setShowToast] = useState(false);
    const [showPassError, setShowPassError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // const onRegister = () => {
    //     handleError();

    //     // const data = {
    //     //     url: 'auth',
    //     //     email: registerEmailRef.current.value,
    //     //     password: registerPasswordRef.current.value,
    //     //     password_confirmation: registerConfirmPasswordRef.current.value,
    //     // };

    //     // userSessionAPI(data)
    //     //     .then((res) => {
    //     //         setMessage('Registration Success');
    //     //         setShowToast(true);
    //     //         console.log('res', res);
    //     //     })
    //     //     .catch((err) => {
    //     //         setMessage('Something went wrong. Please try again');
    //     //         setShowToast(true);
    //     //         console.log('err', err);
    //     //     });
    // };

    const onRegister = () => {
        if (
            registerPasswordRef.current.value !==
            registerConfirmPasswordRef.current.value
        ) {
            setMessage('Password did not match');
            setShowPassError(true);
            registerPasswordRef.current.focus();
            setTimeout(() => {
                setShowPassError(false);
            }, 3000);
        } else if (registerPasswordRef.current.value.length < 6) {
            setMessage('Password is too short');
            setShowPassError(true);
            setTimeout(() => {
                setShowPassError(false);
            }, 3000);
        } else if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                registerEmailRef.current.value
            )
        ) {
            setMessage('Please enter valid email');
            setShowPassError(true);
            registerEmailRef.current.focus();
            setTimeout(() => {
                setShowPassError(false);
            }, 3000);
        } else {
            const data = {
                url: 'auth',
                email: registerEmailRef.current.value,
                password: registerPasswordRef.current.value,
                password_confirmation: registerConfirmPasswordRef.current.value,
            };

            userSessionAPI(data)
                .then((res) => {
                    setMessage('Registration Success');
                    setShowToast(true);
                    setIsSuccess(true);
                    console.log('res', res);
                })
                .catch((err) => {
                    setMessage('Something went wrong. Please try again');
                    setShowToast(true);
                    setIsSuccess(false);
                    console.log('err', err);
                });
        }
    };

    return (
        <div className="login-page">
            <h2 className="login-title">Let's get started!</h2>
            <p className="login-subtitle">
                Sign up for an account to connect with other people
            </p>
            <form
                className="login-container"
                onSubmit={(e) => {
                    e.preventDefault();
                    onRegister();
                }}
            >
                <br />

                <label className="input-container">
                    <span>Email</span>
                    <input
                        type="email"
                        name="register-email"
                        id="register-email"
                        ref={registerEmailRef}
                    />
                </label>

                <label className="input-container">
                    <span>Password</span>
                    <input
                        type="password"
                        name="register-name"
                        min="6"
                        id="register-password"
                        ref={registerPasswordRef}
                    />
                </label>

                <label className="input-container">
                    <span>Confirm Password</span>
                    <input
                        type="password"
                        name="register-name"
                        min="6"
                        id="register-passconfirm"
                        ref={registerConfirmPasswordRef}
                    />
                </label>

                <Button text="Register" type="submit" className="button" />
            </form>
            <div>
                Already have an account?{' '}
                <NavLink className="hyperlink" to="/login">
                    Log in.
                </NavLink>
            </div>
            {showToast || showPassError ? (
                <Toast
                    className={
                        isSuccess
                            ? 'toast-message toast-message-success'
                            : 'toast-message toast-message-error'
                    }
                    text={message}
                />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Register;
