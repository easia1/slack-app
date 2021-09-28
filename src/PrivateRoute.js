import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
    isLoggedIn,
    component: Component,
    setIsLoggedIn,
    setUser,
    setHeaders,
    setLoginMessage,
    loginMessage,
    localStorageLogin,
    ...rest
}) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route
            {...rest}
            render={(props) =>
                isLoggedIn ? (
                    <Component
                        {...props}
                        setIsLoggedIn={setIsLoggedIn}
                        setUser={setUser}
                        setHeaders={setHeaders}
                        setLoginMessage={setLoginMessage}
                        loginMessage={loginMessage}
                        localStorageLogin={localStorageLogin}
                    />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
};

export default PrivateRoute;
