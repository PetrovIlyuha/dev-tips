import { Snippet } from "../generated/apollo-components";
import GraphImg from "graphcms-image";
import EllipsisText from "react-ellipsis-text";
import { Col } from "antd";
import Link from "next/link";
import styled from "styled-components";

const StyledSnippet = styled(Col)`
  ${({ theme }) => `
    padding: 0px ${theme["padding-small"]};
    .card {
      cursor: pointer;
      margin-bottom: ${theme["margin-small"]};
      min-height: 340px;
      border-radius: 6px;
      box-shadow: 0 0 16px ${theme["border-color"]};
      border: ${theme["border-width"]} solid ${theme["border-color"]};
      border-radius: 4px;      
      .graphcms-image-outer-wrapper {
        border: 0px;
        border-radius: 6px;
        .graphcms-image-wrapper {
          border: 0px;
          position: relative;
          float: left;
          width: 100%;
          heigth: 200px;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-size: cover;
          img {
            text-align: center;
            border-radius: 6px 6px 0px 0px;
          }
        }
      }    
      h3 {
        margin: 10px auto;
        padding: 10px ${theme["padding-small"]};
        line-height: 1.2rem;
        
      }
      p {
        padding: 0px ${theme["padding-small"]};
      }
    }
  `}
`;

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
      <div className="card">
        <Link href={`${parentRoute}/${id}`}>
          <div>{images ? <GraphImg image={images} /> : null}</div>
        </Link>
        <h3>{title}</h3>
        <p>
          <EllipsisText text={description} length={100} />
        </p>
      </div>
    </StyledSnippet>
  );
};
