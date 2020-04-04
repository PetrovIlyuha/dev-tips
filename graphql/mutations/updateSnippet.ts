import gql from 'graphql-tag';

export const updateSnippetGraphQL = gql`
  mutation updateSnippetGraphQL(
    $data: SnippetUpdateInput!
    $where: SnippetWhereUniqueInput!
  ) {
    updateSnippet(data: $data, where: $where) {
      id
      status
      title
      content
      description
      recommendations
      userLikes {
        id
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
