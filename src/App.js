import './App.css';
import './login/login.css';
import Login from './login/Login';
import Register from './login/Register';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { userSessionAPI } from './api/API';
import Loginhero from './login/Loginhero';
import Main from './Main';

function App() {
    //Current user information
    const [currentUser, setUser] = useState('');

    //Access tokens
    const [currentHeaders, setHeaders] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginMessage, setLoginMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    //Logout function
    const logoutFunction = () => {
        localStorage.setItem('User', null);
        /* localStorage.setItem('Headers', null); */
        setUser(null);
        setHeaders(null);
        setIsLoggedIn(false);
        setLoginMessage('');
    };

    const localStorageLogin = (data /* , headers */) => {
        localStorage.setItem('User', JSON.stringify(data));
        /* localStorage.setItem('Headers', JSON.stringify(headers)); */
    };

    // Logged In
    useEffect(() => {
        const localStorageLoginUser = JSON.parse(localStorage.getItem('User'));
        /* const localStorageLoginHeader = JSON.parse(
            localStorage.getItem('Headers')
        ); */

        if (localStorageLoginUser) {
            /* setIsLoggedIn(true); */
            /* setHeaders(localStorageLoginHeader); */
            /* setUser(localStorageLoginUser); */
            setLoginMessage('Logging you in...');
            setIsLoading(true);

            userSessionAPI(localStorageLoginUser)
                .then((res) => {
                    setHeaders(res.headers);
                    setUser(res.data.data);
                    setLoginMessage('Logged in!');
                    setIsLoggedIn(true);

                    setIsLoading(false);
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
        }
    }, []);

    return (
        <div className="App">
            <Router>
                {!isLoggedIn ? (
                    <div className="login-main-container">
                        <Loginhero />
                        <Switch>
                            <Route
                                path="/"
                                exact
                                component={() => (
                                    <Login
                                        setIsLoggedIn={setIsLoggedIn}
                                        setUser={setUser}
                                        setHeaders={setHeaders}
                                        setLoginMessage={setLoginMessage}
                                        loginMessage={loginMessage}
                                        localStorageLogin={localStorageLogin}
                                        isLoading={isLoading}
                                        setIsLoading={setIsLoading}
                                    />
                                )}
                            />
                            <Route
                                path="/signup"
                                exact
                                component={() => <Register />}
                            />
                        </Switch>
                    </div>
                ) : (
                    <Main logoutFunction={logoutFunction} />
                )}
                {/* {loginMessage ? <div>{loginMessage}</div> : ''}
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
            )} */}
            </Router>
        </div>
    );
}

export default App;
