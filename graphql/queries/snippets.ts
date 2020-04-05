import gql from "graphql-tag";

export const snippetsGraphQL = gql`
  query snippetsGraphQL($where: SnippetWhereInput) {
    snippets(where: $where) {
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
