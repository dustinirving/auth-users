import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PublicRouteProps {
  component: any;
  path?: any;
  auth?: boolean;
  exact?: boolean;
}
const PublicRoute: React.FC<PublicRouteProps> = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (auth ? <Redirect to="/home" /> : <Component {...rest} {...props} />)}
    />
  );
};

export default PublicRoute;
