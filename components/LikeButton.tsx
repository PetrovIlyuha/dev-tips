import { UserLike } from "../generated/apollo-components";
import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";
const StyledSpan = styled.span`
  padding: 20px 10px 10px 20px;
`;

export const LikeButton = ({
  userLikes,
  snippetId,
}: {
  userLikes: UserLike[];
  snippetId: string;
}) => {
  const hasUserLiked = false;
  return <StyledSpan>{hasUserLiked ? <FaHeart /> : <FaRegHeart />}</StyledSpan>;
};
