import React, { useState, useEffect, useContext } from 'react';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from 'components/ProtectedRoute';
import AuthApi from 'api/AuthApi';
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
    <Router>
      <Switch>
        <ProtectedRoute path="/home" exact component={Home} auth={user} loading={loading} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
