import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
} from 'react-router-dom';
import Login from './Login';
import Loginhero from './Loginhero';
import Register from './Register';

const LoginPage = ({
    setIsLoggedIn,
    setUser,
    setHeaders,
    setLoginMessage,
    loginMessage,
    localStorageLogin,
}) => {
    let { path, url } = useRouteMatch();
    return (
        <div className="login-main-container">
            <Loginhero />
            <Switch>
                <Route
                    path={path}
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
                <Route path={`${path}/signup`}>
                    <Register />
                </Route>
            </Switch>
        </div>
    );
};

export default LoginPage;
