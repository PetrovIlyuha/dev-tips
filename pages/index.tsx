import React from 'react';

import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-size: 2rem;
  text-align: left;
  padding: 16px 16px;
`;

const Index = () => {
  return (
    <div>
      <StyledHeader>The Index Page</StyledHeader>
    </div>
  );
};

export default Index;
