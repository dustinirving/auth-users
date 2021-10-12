import React from 'react';
import Form from '../components/Form';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthApi from '../api/AuthApi';
import { User } from '../types/user';

const Signup = () => {
  const handleSignup = ({ email, password }: User) => {
    AuthApi.signup({ email, password }).then((res) => {
      console.log(res);
    });
  };
  return (
    <Wrapper>
      <Card title="Sign up">
        <Form type="signup" onSubmit={handleSignup} />
        <LinkWrapper>
          <Link to="/login">Already have an account?</Link>
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

export default Signup;
