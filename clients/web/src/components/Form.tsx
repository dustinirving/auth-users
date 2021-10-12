import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './styles/Button.styled';
import Input from './styles/Input.styled';

interface FormProps {
  type: 'login' | 'signup';
  onSubmit: ({ email, password }: { email: string; password: string }) => void;
}

const Form: React.FC<FormProps> = ({ type, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <StyledForm>
      <Input
        placeholder="Email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        placeholder="Password"
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          onSubmit({ email, password });
        }}
      >
        {type === 'login' ? 'Login' : 'Sign up'}
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled.form``;

export default Form;
