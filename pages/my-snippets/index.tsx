import { MainLayout } from "../../components/layout/MainLayout";
import styled from "styled-components";
import _ from "lodash";
import { Row, Col, Button } from "antd";
import { SnippetsList, queryEnum } from "../../components/SnippetsList";
import { useFetchUser } from "../../utils/user";
import { Loading } from "../../components/messages/Loading";
import Link from "next/link";

const StyledRow = styled(Row)`
  ${({ theme }) => `
    padding: ${theme["padding-small"]} ${theme["padding-small"]};
    display: flex;
    h1 {
      padding-left: ${theme["padding-small"]};
      text-align: left;
    }    
  `}
`;

const Index = () => {
  const { user, loading: isFetchUser } = useFetchUser();
  const author = _.get(user, "sub");
  const options = author ? { variables: { where: { author } } } : {};

  if (isFetchUser) return <Loading />;

  return (
    <MainLayout title="My Snippets">
      <StyledRow>
        <Col span={24}>
          <Link href="/create">
            <div style={{ margin: "5px 0 20px 20px" }}>
              <Button type="primary">Create</Button>
            </div>
          </Link>
          <h1 style={{ margin: "0 auto" }}>My Snippets</h1>
        </Col>
      </StyledRow>
      <div>
        <SnippetsList
          parentRoute="my-snippets"
          queryType={queryEnum.snippets}
          options={options}
        />
      </div>
    </MainLayout>
  );
};

export default Index;
