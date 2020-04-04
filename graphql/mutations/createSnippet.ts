import gql from 'graphql-tag';

export const createSnippetGraphQL = gql`
  mutation createSnippetGraphQL($data: SnippetCreateInput!) {
    createSnippet(data: $data) {
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
