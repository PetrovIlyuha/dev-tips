import { Form, Row, Col, Button } from "antd";
import { submitForm } from "../utils/submitForm";
import {
  GenerateInput,
  GenerateTextInput,
  GenerateDropdown,
} from "./GenerateFields";

export const CreateSnippet = () => {
  const initiateCreateSnippet = () => {
    console.log("submitted form");
    console.log(values);
  };
  const {
    values,
    handleInputChange,
    handleDropdownChange,
    handleSubmit,
  } = submitForm(
    { title: "", description: "", content: "", status: "DRAFT" },
    initiateCreateSnippet,
  );
  return (
    <Form onSubmitCapture={handleSubmit}>
      <GenerateInput
        name="title"
        value={values.title}
        handleInputChange={handleInputChange}
      />
      <GenerateInput
        name="description"
        value={values.description}
        handleInputChange={handleInputChange}
      />
      <GenerateTextInput
        name="content"
        value={values.content}
        handleInputChange={handleInputChange}
      />
      <Row>
        <GenerateDropdown
          name="status"
          value={values.status}
          handleDropdownChange={handleDropdownChange}
        />
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
