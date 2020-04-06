import { useQuery } from "@apollo/react-hooks";
import _ from "lodash";
import { snippetGraphQL } from "../../graphql/queries/snippet";
import { Loading } from "../../components/messages/Loading";
import { Error } from "../../components/messages/Error";
import { MainLayout } from "../../components/layout/MainLayout";
import OneSnippet from "../../components/OneSnippet";

const Snippet = ({ id }) => {
  const { loading, data, error } = useQuery(snippetGraphQL, {
    variables: { where: { id } },
  });
  console.log(loading, data, error);
  const title = _.get(data, "snippet.title");
  if (data) {
    const { snippet } = data;
  }
  if (loading)
    return (
      <MainLayout title="Snippet is Loading...">
        <Loading />
      </MainLayout>
    );

  if (error) {
    return (
      <MainLayout title="Snippet Loaging Error">
        <Error errorText={`${error}`} />
      </MainLayout>
    );
  }

  if (!title) {
    return (
      <MainLayout title="Not a valid snippet title">
        <Error errorText="Not a valid snippet title" />
      </MainLayout>
    );
  }
  return (
    <MainLayout title={title}>
      <OneSnippet snippet={data.snippet} />
    </MainLayout>
  );
};

Snippet.getInitialProps = ({ query }) => {
  const { id } = query;
  return { id };
};

export default Snippet;
