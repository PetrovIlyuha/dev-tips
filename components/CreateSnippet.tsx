import { Form, Row, Col, Button } from "antd";
import { submitForm } from "../utils/submitForm";

export const CreateSnippet = () => {
  const initiateCreateSnippet = () => {
    console.log("submitted form");
  };
  const { values, handleSubmit } = submitForm({}, initiateCreateSnippet);
  return (
    <Form onSubmitCapture={handleSubmit}>
      <Row>
        <Col span={16}></Col>
        <Col span={4}>
          <Form.Item label="Create Snippet">
            <Button type="primary" htmlType="submit">
              Create Snippet
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
