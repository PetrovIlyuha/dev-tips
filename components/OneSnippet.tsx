import { Snippet } from "../generated/apollo-components";
import { GenerateContent } from "./GenerateContent";
import GraphImg from "graphcms-image";
import { Row, Col, List } from "antd";
import styled from "styled-components";
import _ from "lodash";

const StyledOneSnippet = styled(Col)`
  margin: 30px auto;
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
            <GraphImg image={snippet.images} />
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
