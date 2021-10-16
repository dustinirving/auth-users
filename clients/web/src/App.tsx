import React, { useState, useEffect, useContext } from 'react';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import PublicRoute from 'components/PublicRoute';
import ProtectedRoute from 'components/ProtectedRoute';
import AuthApi from 'api/AuthApi';
import LoadingScreen from 'components/LoadingScreen';
import { Context } from 'stores/Store';

const App = () => {
  const [{ user }, dispatch] = useContext<any>(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AuthApi.getUser()
      .then((user) => {
        dispatch({ type: 'GET_USER', payload: user });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Router>
          <Switch>
            <ProtectedRoute path="/home" exact component={Home} auth={user} />
            <PublicRoute path="/signup" exact component={Signup} auth={user} />
            <PublicRoute path="/login" exact component={Login} auth={user} />
            <Redirect to="/login" />
          </Switch>
        </Router>
      )}
    </>
  );
};

export default App;
