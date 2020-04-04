import gql from 'graphql-tag';

export const deleteSnippetGraphQL = gql`
  mutation deleteSnippetGraphQL($where: SnippetWhereUniqueInput!) {
    deleteSnippet(where: $where) {
      id
    }
  }
`;
