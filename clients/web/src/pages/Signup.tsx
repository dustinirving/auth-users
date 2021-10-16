import React, { useContext, useState } from 'react';
import Form from 'components/Form';
import Card from 'components/Card';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthApi from 'api/AuthApi';
import { User } from 'types/user';
import { Context } from 'stores/Store';

const Signup = () => {
  const [{ user }, dispatch] = useContext<any>(Context);
  const [error, setError] = useState('');
  const handleSignup = async ({ email, password }: User) => {
    try {
      const newUser = await AuthApi.signup({ email, password });

      if (newUser) {
        const authUser = await AuthApi.login({ email, password });
        dispatch({ type: 'UPDATE_USER', payload: authUser });
      }
    } catch (err: any) {
      setError(err);
    }
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
