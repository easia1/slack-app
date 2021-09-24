import './App.css';
import Login from './login/Login';
import Register from './login/Register';
import { useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

function App() {
    //Current user information
    const [currentUser, setUser] = useState('');

    //Access tokens
    const [currentHeaders, setHeaders] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginMessage, setLoginMessage] = useState('');

    //Logout function
    const logoutFunction = () => {
        localStorage.setItem('User', null);
        localStorage.setItem('Headers', null);
        setUser(null);
        setHeaders(null);
        setIsLoggedIn(false);
        setLoginMessage('');
    };

    const localStorageLogin = (data, headers) => {
        localStorage.setItem('User', JSON.stringify(data));
        localStorage.setItem('Headers', JSON.stringify(headers));
    };

    // Logged In
    useEffect(() => {
        const localStorageLoginUser = JSON.parse(localStorage.getItem('User'));
        const localStorageLoginHeader = JSON.parse(
            localStorage.getItem('Headers')
        );

        if (localStorageLoginUser) {
            setIsLoggedIn(true);
            setHeaders(localStorageLoginHeader);
            setUser(localStorageLoginUser);
        }
    }, []);

    return (
        <div className='App'>
            {!isLoggedIn ? (
                <Login
                    setIsLoggedIn={setIsLoggedIn}
                    setUser={setUser}
                    setHeaders={setHeaders}
                    setLoginMessage={setLoginMessage}
                    loginMessage={loginMessage}
                    localStorageLogin={localStorageLogin}
                />
            ) : (
                <button onClick={logoutFunction}>Logout</button>
            )}
            {loginMessage ? <div>{loginMessage}</div> : ''}
            {currentUser ? <div>Email: {currentUser.email}</div> : ''}
            {currentUser ? <div>User ID: {currentUser.id}</div> : ''}
            {currentHeaders ? (
                <div>Access token: {currentHeaders['access-token']}</div>
            ) : (
                ''
            )}
            {currentHeaders ? (
                <div>Expiry: {currentHeaders['expiry']}</div>
            ) : (
                ''
            )}
            <br />
            <Register />
        </div>
    );
}

export default App;
