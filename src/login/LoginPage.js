import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import Login from './Login';
import Loginhero from './Loginhero';
import Register from './Register';

const LoginPage = () => {
    return (
        <div className="login-main-container">
            <Loginhero />
            <Switch>
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
            </Switch>
        </div>
    );
};

export default LoginPage;
