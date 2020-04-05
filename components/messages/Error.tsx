import { Row, Col, Alert } from 'antd';
import styled from 'styled-components';

const StyledCol = styled(Col)`
  text-align: center;
  margin-top: 200px;
`;

export const Error = ({ errorText }: { errorText: string }) => (
  <Row>
    <StyledCol span={12} offset={6}>
      <Alert
        message="An error has ocurred 🤦‍♀️"
        description={errorText || 'Error'}
        type="error"
      />
    </StyledCol>
  </Row>
);
