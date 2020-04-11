import { MainLayout } from "../components/layout/MainLayout";
import styled from "styled-components";
import { CreateSnippet } from "../components/CreateSnippet";

const StyledHeader = styled.h1`
  ${({ theme }) => `
    padding: ${theme["padding-small"]};

  `}
`;
const Create = () => {
  return (
    <MainLayout title="Create Snippet">
      <StyledHeader>Create Snippet</StyledHeader>
      <CreateSnippet />
    </MainLayout>
  );
};

export default Create;
