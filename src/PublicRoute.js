import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from './context/UserContext';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    const { isLoggedIn } = useContext(UserContext);

    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route

        <Route
            {...rest}
            render={(props) =>
                isLoggedIn && restricted ? (
                    <Redirect to="/slack-app" exact />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PublicRoute;
