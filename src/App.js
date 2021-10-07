import './App.css';
import './login/login.css';
import Login from './login/Login';
import Register from './login/Register';
import { useState, useEffect, useContext } from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { userSessionAPI } from './api/API';
import Loginhero from './login/Loginhero';
import Main from './Main';
import { UserProvider, UserContext } from './context/UserContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function App() {
    const { setUser, setHeaders, setLoginMessage, setIsLoggedIn } =
        useContext(UserContext);

    // // Logged In
    // useEffect(() => {
    //     const localStorageLoginUser = JSON.parse(localStorage.getItem('User'));

    //     if (localStorageLoginUser) {
    //         setLoginMessage('Logging you in...');

    //         userSessionAPI(localStorageLoginUser)
    //             .then((res) => {
    //                 setHeaders(res.headers);
    //                 setUser(res.data.data);
    //                 setLoginMessage('Logged in!');
    //                 setIsLoggedIn(true);
    //             })
    //             .catch((err) => {
    //                 if (err.response) {
    //                     // Request made and server responded
    //                     console.log(err.response.data);
    //                     console.log(err.response.status);
    //                     console.log(err.response.headers);
    //                     setHeaders('');
    //                     setUser('');
    //                     setLoginMessage(err.response.data.errors[0]);
    //                     setTimeout(() => {
    //                         setLoginMessage('');
    //                     }, 3000);
    //                     setTimeout(() => {
    //                         setLoginMessage('');
    //                     }, 3000);
    //                 } else if (err.request) {
    //                     // The request was made but no response was received
    //                     console.log(err.request);
    //                     setLoginMessage('Server error, please try again.');
    //                     setTimeout(() => {
    //                         setLoginMessage('');
    //                     }, 3000);
    //                 } else {
    //                     // Something happened in setting up the request that triggered an Error
    //                     console.log('Error', err.message);
    //                 }
    //             });
    //     }
    // }, []);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <PrivateRoute component={Main} path="/" exact />

                    <div className="login-main-container">
                        <Loginhero />

                        <PublicRoute
                            component={Login}
                            restricted={true}
                            path="/login"
                            exact
                        />
                        <PublicRoute
                            component={Register}
                            restricted={true}
                            path="/signup"
                            exact
                        />
                        <Route render={() => <Redirect to="/login" />} />
                    </div>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
