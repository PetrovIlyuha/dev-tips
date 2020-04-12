import { Form, Row, Col, Button } from "antd";
import { submitForm } from "../utils/submitForm";
import {
  GenerateInput,
  GenerateTextInput,
  GenerateDropdown,
} from "./GenerateFields";
import { GenerateRecommendations } from "./GenerateRecommendations";

export const CreateSnippet = () => {
  const initiateCreateSnippet = () => {
    console.log("submitted form");
    console.log(values);
  };
  const {
    values,
    handleInputChange,
    handleAddRecommendation,
    handleDeleteRecommendation,
    handleDropdownChange,
    handleSubmit,
  } = submitForm(
    {
      title: "",
      description: "",
      content: "",
      status: "DRAFT",
      recommendations: [],
    },
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
      <GenerateRecommendations
        content={values.recommendations}
        handleAddRecommendation={handleAddRecommendation}
        handleDeleteRecommendation={handleDeleteRecommendation}
        handleInputChange={handleInputChange}
        handleDropdownChange={handleDropdownChange}
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
