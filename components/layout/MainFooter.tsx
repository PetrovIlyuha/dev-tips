import { Layout, Row, Col } from "antd";
import styled from "styled-components";

const { Footer } = Layout;
const StyledFooter = styled(Footer)`
  background-color: #08aeea;
  background-image: linear-gradient(
    270deg,
    #08aeea 0%,
    #2af598 50%,
    #ffffff 100%
  );
`;

export const MainFooter = () => (
  <StyledFooter>
    <Row>
      <Col sm={{ span: 24, offset: 14 }} lg={{ span: 24, offset: 20 }}>
        <h3>Find your next Coding Tip @ DevTips &copy; 2020</h3>
      </Col>
    </Row>
  </StyledFooter>
);
