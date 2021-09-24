import './App.css';
import axios from 'axios';
import Login from './login/Login';
import { useState } from 'react';

function App() {
    //Current user information
    const [currentUser, setUser] = useState('');

    //Access tokens
    const [currentHeaders, setHeaders] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginMessage, setLoginMessage] = useState('');

    //Logout function
    const logoutFunction = () => {
        setUser('');
        setHeaders('');
        setIsLoggedIn(false);
        setLoginMessage('');
    };

    return (
        <div className="App">
            {!isLoggedIn ? (
                <Login
                    setIsLoggedIn={setIsLoggedIn}
                    setUser={setUser}
                    setHeaders={setHeaders}
                    setLoginMessage={setLoginMessage}
                    loginMessage={loginMessage}
                />
            ) : (
                <button onClick={logoutFunction}>Logout</button>
            )}
            {loginMessage !== '' ? <div>{loginMessage}</div> : ''}
            {currentUser !== '' ? <div>Email: {currentUser.email}</div> : ''}
            {currentUser !== '' ? <div>User ID: {currentUser.id}</div> : ''}
            {currentHeaders !== '' ? (
                <div>Access token: {currentHeaders['access-token']}</div>
            ) : (
                ''
            )}
            {currentHeaders !== '' ? (
                <div>Expiry: {currentHeaders['expiry']}</div>
            ) : (
                ''
            )}
        </div>
    );
}

export default App;
