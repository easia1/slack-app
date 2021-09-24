import React, { useState, useRef } from 'react';
import Button from '../components/button/Button';
import axios from 'axios';
import { userSessionAPI } from '../api/API';

const Register = () => {
    const registerEmailRef = useRef(null);
    const registerPasswordRef = useRef(null);
    const registerConfirmPasswordRef = useRef(null);

    const [message, setMessage] = useState();

    const onRegister = () => {
        const data = {
            url: 'auth',
            email: registerEmailRef.current.value,
            password: registerPasswordRef.current.value,
            password_confirmation: registerConfirmPasswordRef.current.value,
        };

        userSessionAPI(data).then((res) => {
            setMessage('Registration Successful!');
        });
    };

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onRegister();
                }}
            >
                <h2>Register</h2>
                <br />

                <label>
                    Email
                    <input
                        type="email"
                        name="register-email"
                        id="register-email"
                        ref={registerEmailRef}
                    />
                </label>

                <label>
                    Password
                    <input
                        type="password"
                        name="register-name"
                        id="register-name"
                        ref={registerPasswordRef}
                    />
                </label>

                <label>
                    Confirm Password
                    <input
                        type="password"
                        name="register-name"
                        id="register-name"
                        ref={registerConfirmPasswordRef}
                    />
                </label>

                <Button text="Register" type="submit" />
            </form>

            {message}
        </div>
    );
};

export default Register;
