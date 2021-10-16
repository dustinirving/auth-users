import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface ProtectedRouteProps {
  component: any;
  path?: any;
  auth?: boolean;
  exact?: boolean;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (auth ? <Component {...rest} {...props} /> : <Redirect to="/login" />)}
    />
  );
};

export default ProtectedRoute;
