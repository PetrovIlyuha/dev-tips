import gql from "graphql-tag";

export const snippetGraphQL = gql`
  query snippetGraphQL($where: SnippetWhereUniqueInput!) {
    snippet(where: $where) {
      id
      status
      title
      content
      description
      recommendations
      userLikes {
        id
        user
      }
      author
      images {
        id
        fileName
        height
        width
        size
        handle
      }
    }
  }
`;
