import React from 'react';
import Form from '../components/Form';
import styled from 'styled-components';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import userApi from '../api/AuthApi';
import { User } from '../../../../types/user';

const Login = () => {
  const handleLogin = ({ email, password }: User) => {
    userApi.login({ email, password }).then((user) => {
      console.log(user);
    });
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
