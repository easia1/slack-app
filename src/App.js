import './App.css';
import './login/login.css';
import Login from './login/Login';
import Register from './login/Register';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { userSessionAPI } from './api/API';
import Loginhero from './login/Loginhero';
import Main from './Main';
import Loading from './components/loading/Loading';

function App() {
    //Current user information
    const [currentUser, setUser] = useState(null);

    // const [isLoading, setIsLoading] = useState(false);

    //Access tokens
    const [currentHeaders, setHeaders] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginMessage, setLoginMessage] = useState('');

    const [sidebarMode, setSidebarMode] = useState('dm');

    //Logout function
    const logoutFunction = () => {
        localStorage.setItem('User', null);
        /* localStorage.setItem('Headers', null); */
        setUser(null);
        setHeaders(null);
        setIsLoggedIn(false);
        setLoginMessage('');
        setSidebarMode('dm');
    };

    //Toast Message

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
            // setIsLoading(true);

            userSessionAPI(localStorageLoginUser)
                .then((res) => {
                    setHeaders(res.headers);
                    setUser(res.data.data);
                    setLoginMessage('Logged in!');
                    setIsLoggedIn(true);
                    // setIsLoading(true);
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
                                    />
                                )}
                            />
                            <Route
                                path="/signup"
                                exact
                                component={() => <Register />}
                            />
                        </Switch>
                        {/* {loginMessage ? <div>{loginMessage}</div> : ''} */}
                    </div>
                ) : (
                    <Main
                        logoutFunction={logoutFunction}
                        sidebarMode={sidebarMode}
                        setSidebarMode={setSidebarMode}
                        currentHeaders={currentHeaders}
                        currentUser={currentUser}
                        isLoggedIn={isLoggedIn}
                        // setIsLoading={setIsLoading}
                        // isLoading={isLoading}
                    />
                )}

                {/* {currentUser ? <div>Email: {currentUser.email}</div> : ''}

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
