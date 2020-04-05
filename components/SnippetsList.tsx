import { QueryHookOptions, useQuery } from "@apollo/react-hooks";
import _ from "lodash";
import { Row } from "antd";
import styled from "styled-components";
import { snippetsGraphQL } from "../graphql/queries/snippets";
import { userLikesGraphQL } from "../graphql/queries/userLikes";
import { Snippet } from "../generated/apollo-components";
import { SnippetListItem } from "./SnippetListItem";
import { Error } from "./messages/Error";
import { Loading } from "./messages/Loading";
import { Warning } from "./messages/Warning";
export enum queryEnum {
  userLikes = "userLikes",
  snippets = "snippets",
}
type SnippetsListProps = {
  options?: QueryHookOptions;
  parentRoute: string;
  queryType: queryEnum;
};

const StyledRow = styled(Row)`
  margin: 0 20px;
`;
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
    _.get(value, "snippet", value),
  );

  console.log(loading, data, error);

  if (loading) return <Loading />;

  if (error || !snippetsList) return <Error errorText={`${error}`} />;

  if (snippetsList.length === 0)
    return (
      <Warning
        warningHeader="There are no snippets yet 🦄"
        warningText="You can be the one 😎 to fill this void"
      />
    );
  return (
    <StyledRow>
      {snippetsList.map((snippet: Snippet) => (
        <SnippetListItem
          snippet={snippet}
          key={`${snippet.id}-${queryType}`}
          parentRoute={parentRoute}
        />
      ))}
    </StyledRow>
  );
};
