import { Row, Col, Button, Table } from "antd";

type RecommendationsProps = {
  content?: object[];
  handleInputChange: (event: any) => void;
  handleAddRecommendation: (event: any) => void;
  handleDeleteRecommendation: (event: any) => void;
  handleDropdownChange: (event: any) => void;
};

export const GenerateRecommendations = ({
  content,
  handleDropdownChange,
  handleInputChange,
  handleAddRecommendation,
  handleDeleteRecommendation,
}: RecommendationsProps) => {
  console.log(content);
  const columns = content.map(item => ({
    title: `${item}`,
    key: `${item}`,
    render: (recommendation, _record, index: number) => {
      console.log(recommendation, index);
      return "hi";
    },
  }));
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <p>
            <Button
              onClick={handleAddRecommendation}
              type="primary"
              shape="circle"
              size="small"
            >
              +
            </Button>
            Recommended Steps:
          </p>
        </Col>
      </Row>
      {content.length > 0 ? (
        <Row>
          <Col span={12} offset={6}>
            <Table
              dataSource={content}
              columns={columns}
              pagination={{ pageSize: 25 }}
            ></Table>
          </Col>
        </Row>
      ) : null}
    </>
  );
};
