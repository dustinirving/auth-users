import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';

interface ProtectedRouteProps {
  component: any;
  path?: any;
  auth?: boolean;
  exact?: boolean;
  loading?: boolean;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  auth,
  loading,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading) {
          return <LoadingScreen />;
        } else if (auth) {
          return <Component {...rest} {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default ProtectedRoute;
