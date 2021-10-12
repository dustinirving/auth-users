import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  children?: ReactNode;
  title?: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <StyledCard>
      <Title>{title}</Title>
      {children}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  padding: 12px 18px;
  padding-top: 0;
  border: 1px solid gray;
  border-radius: 4px;
`;

const Title = styled.h1`
  text-align: center;
`;

export default Card;
