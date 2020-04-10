import { UserLike } from "../generated/apollo-components";
import _ from "lodash";
import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import { useFetchUser } from "../utils/user";
import { useMutation } from "@apollo/react-hooks";
import { createUserLikeGraphQL } from "../graphql/mutations/createUserLike";
import { deleteUserLikeGraphQL } from "../graphql/mutations/deleteUserLike";
import { userLikesGraphQL } from "../graphql/queries/userLikes";
import { snippetGraphQL } from "../graphql/queries/snippet";

const StyledSpan = styled.span`
  ${({ theme }) => `
    padding-left: 9px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 35px;
    height: 30px;
    font-size: 3rem;
    justify-content: space-around;
    font-size: ${theme["font-size-xs"]} !important;
    color: ${theme["heart-color"]};
    i {
      padding-left: 2px;
    }
  `}
`;

export const LikeButton = ({
  userLikes,
  snippetId,
}: {
  userLikes: UserLike[];
  snippetId: string;
}) => {
  const { user, loading: isFetchingUser } = useFetchUser();
  const author = _.get(user, "sub");
  const userLike = _.filter(userLikes, { user: author });
  const hasUserLiked = userLike.length > 0 ? true : false;

  const [
    createUserLikeMutation,
    { loading: createUserLikeLoading },
  ] = useMutation(createUserLikeGraphQL);
  const [
    deleteUserLikeMutation,
    { loading: deleteUserLikeLoading },
  ] = useMutation(deleteUserLikeGraphQL);

  if (_.isEmpty(author)) {
    return (
      <StyledSpan>
        {` ${userLikes.length}`}
        <span style={{ color: "blue" }}>
          <FaRegHeart />
        </span>
      </StyledSpan>
    );
  }

  return (
    <StyledSpan
      onClick={() => {
        if (!hasUserLiked) {
          createUserLikeMutation({
            refetchQueries: [
              {
                query: snippetGraphQL,
                variables: { where: { id: snippetId } },
              },
              {
                query: userLikesGraphQL,
                variables: { where: { user: author } },
              },
            ],
            variables: {
              data: {
                user: author,
                snippet: {
                  connect: { id: snippetId },
                },
              },
            },
          });
        } else {
          deleteUserLikeMutation({
            refetchQueries: [
              {
                query: snippetGraphQL,
                variables: { where: { id: snippetId } },
              },
              {
                query: userLikesGraphQL,
                variables: { where: { user: author } },
              },
            ],
            variables: {
              where: { id: userLike[0].id },
            },
          });
        }
      }}
    >
      {`${userLikes.length}`}
      {hasUserLiked ? <FaHeart /> : <FaRegHeart />}
    </StyledSpan>
  );
};
