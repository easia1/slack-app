import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
    isLoggedIn,
    component: Component,
    restricted,
    setIsLoggedIn,
    setUser,
    setHeaders,
    setLoginMessage,
    loginMessage,
    localStorageLogin,
    ...rest
}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route
            {...rest}
            render={(props) =>
                isLoggedIn && restricted ? (
                    <Redirect to="/app" />
                ) : (
                    <Component
                        {...props}
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        setUser={setUser}
                        setHeaders={setHeaders}
                        setLoginMessage={setLoginMessage}
                        loginMessage={loginMessage}
                    />
                )
            }
        />
    );
};

export default PublicRoute;
