import gql from 'graphql-tag';

export const userLikesGraphQL = gql`
  query userLikesGraphQL($where: UserLikeWhereInput) {
    userLikes(where: $where) {
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
