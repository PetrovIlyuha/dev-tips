import { QueryHookOptions, useQuery } from '@apollo/react-hooks';
import _ from 'lodash';
import { Row } from 'antd';
import { snippetsGraphQL } from '../graphql/queries/snippets';
import { userLikesGraphQL } from '../graphql/queries/userLikes';
import { Snippet } from '../generated/apollo-components';
import { Error } from './messages/Error';

export enum queryEnum {
  userLikes = 'userLikes',
  snippets = 'snippets',
}
type SnippetsListProps = {
  options?: QueryHookOptions;
  parentRoute: string;
  queryType: queryEnum;
};

export const SnippetsList = ({
  options,
  parentRoute,
  queryType,
}: SnippetsListProps) => {
  const query =
    queryType === queryEnum.snippets ? snippetsGraphQL : userLikesGraphQL;
  const { loading, data, error } = useQuery(query, options);
  const parentArray = _.get(data, queryType);
  const snippetsList = _.map(parentArray, (value) =>
    _.get(value, 'snippet', value),
  );
  console.log(loading, data, error);

  if (loading) return <p>Loading...</p>;

  if (error || !snippetsList) return <Error errorText={`${error}`} />;

  if (snippetsList.length === 0) return <p>There Are No Snippets</p>;
  return (
    <Row>
      {snippetsList.map((snippet: Snippet) => (
        <p key={snippet.id}>{snippet.title}</p>
      ))}
    </Row>
  );
};
