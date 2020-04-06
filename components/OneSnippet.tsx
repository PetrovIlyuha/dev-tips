import { Snippet } from "../generated/apollo-components";
import { GenerateContent } from "./GenerateContent";
import GraphImg from "graphcms-image";
import { Row, Col, List } from "antd";
import styled from "styled-components";
import _ from "lodash";

const StyledOneSnippet = styled(Col)`
  ${({ theme }) => `
    margin-top: ${theme["margin-small"]};
    margin-bottom: ${theme["margin-small"]};
    min-height: 300px;
    border-radius: 10px;
    box-shadow: 0 0 15px ${theme["border-color"]};
    border: ${theme["border-width"]} solid ${theme["border-color"]};

    .graphcms-image-outer-wrapper" {
      border: 0;
      .graphcms-image-wrapper" {
        border: 0;
        position: relative;
        fload: left;
        width: 100%;
        height: 400px;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        img { 
          text-align: center;
          border-radius: 6px 6px 0 0;
        }
      }
    }

    h1, h2 {
      padding-top: ${theme["margin-small"]};
      text-align: center;
    }

    h3, p { 
      text-align: center;
    }

    
  `}
`;

const OneSnippet = ({ snippet }: { snippet: Snippet }) => {
  const recommendations = _.get(snippet, "recommendations");
  console.log(recommendations);
  return (
    <Row>
      <StyledOneSnippet
        sm={{ span: 20, offset: 2 }}
        md={{ span: 16, offset: 4 }}
        lg={{ span: 12, offset: 6 }}
      >
        <Row>
          <Col span={24}>
            <GraphImg
              image={snippet.images}
              style={{ borderRadius: "6px 6px 0 0" }}
            />
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <h1>{snippet.title}</h1>
            <p>{snippet.description}</p>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <List
              header={<h3>Steps to Implement</h3>}
              bordered
              dataSource={recommendations || { content: "No Steps Provided" }}
              renderItem={({ content }) => <List.Item>✅ {content}</List.Item>}
            />
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <h2>More info:</h2>
            <GenerateContent textString={snippet.content} />
          </Col>
        </Row>
      </StyledOneSnippet>
    </Row>
  );
};

export default OneSnippet;
