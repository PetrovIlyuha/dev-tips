import { useQuery } from "@apollo/react-hooks";
import { snippetGraphQL } from "../../graphql/queries/snippet";
import { Loading } from "../../components/messages/Loading";
import { Error } from "../../components/messages/Error";
import { MainLayout } from "../../components/layout/MainLayout";

const Snippet = ({ id }) => {
  const { loading, data, error } = useQuery(snippetGraphQL, {
    variables: { where: { id } },
  });
  console.log(loading, data, error);

  if (loading)
    return (
      <MainLayout title="Snippet is Loading...">
        <Loading />
      </MainLayout>
    );

  if (error) {
    return (
      <MainLayout>
        <Error errorText={`${error}`} />
      </MainLayout>
    );
  }
  return <p>Snippet #1</p>;
};

Snippet.getInitialProps = ({ query }) => {
  const { id } = query;
  return { id };
};

export default Snippet;
