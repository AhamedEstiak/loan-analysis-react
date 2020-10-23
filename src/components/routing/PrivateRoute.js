import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('clientId');

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/"/>
                )
            }
        />
    )
};

export default PrivateRoute;
