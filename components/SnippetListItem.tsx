import { Snippet } from "../generated/apollo-components";
import { Col } from "antd";
import styled from "styled-components";

const StyledSnippet = styled(Col)``;

export const SnippetListItem = ({
  snippet,
  parentRoute,
}: {
  snippet: Snippet;
  parentRoute: string;
}) => {
  const { title, description, images, userLikes, id } = snippet;
  return (
    <StyledSnippet
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      lg={{ span: 9 }}
      xl={{ span: 6 }}
    >
      <div>{images ? <GraphImg image={images} /> : null}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledSnippet>
  );
};
