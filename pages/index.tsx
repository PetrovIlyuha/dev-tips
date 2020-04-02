import React from 'react';
import { MainLayout } from '../components/layout/MainLayout';

import styled from 'styled-components';

const StyledHeader = styled.h1`
  ${({ theme }) => `
    font-size: 2em;
    text-align: left;
    padding: ${theme['padding-small']} ${theme['padding-small']};
  `}
`;

const Index = () => {
  return (
    <MainLayout title="dev-tips">
      <StyledHeader>The Index Page</StyledHeader>
    </MainLayout>
  );
};

export default Index;
