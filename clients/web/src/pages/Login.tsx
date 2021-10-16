import React, { useContext } from 'react';
import Form from 'components/Form';
import styled from 'styled-components';
import Card from 'components/Card';
import { Link } from 'react-router-dom';
import AuthApi from 'api/AuthApi';
import { User } from 'types/user';
import { Context } from 'stores/Store';

const Login = () => {
  const [{ user }, dispatch] = useContext<any>(Context);
  const handleLogin = async ({ email, password }: User) => {
    try {
      const authUser = await AuthApi.login({ email, password });
      if (authUser) {
        dispatch({ type: 'UPDATE_USER', payload: authUser });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <Card title="Login">
        <Form type="login" onSubmit={handleLogin} />
        <LinkWrapper>
          <Link to="/signup">Don't have an account?</Link>
        </LinkWrapper>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const LinkWrapper = styled.div`
  padding: 6px;
  text-align: center;
`;

export default Login;
