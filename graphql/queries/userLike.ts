import gql from 'graphql-tag';

export const userLikeGraphQL = gql`
  query userLikeGraphQL($where: UserLikeWhereUniqueInput!) {
    userLike(where: $where) {
      id
      user
      snippet {
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
  }
`;
