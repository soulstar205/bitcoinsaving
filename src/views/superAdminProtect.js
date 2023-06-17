import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const SuperAminProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/super-admin/login" />
        )
      }
    />
  );
};

export default SuperAminProtectedRoute;
