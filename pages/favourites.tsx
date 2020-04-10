import { MainLayout } from "../components/layout/MainLayout";
import { SnippetsList, queryEnum } from "../components/SnippetsList";
import _ from "lodash";
import styled from "styled-components";
import { useFetchUser } from "../utils/user";
import { Loading } from "../components/messages/Loading";

const StyledHeader = styled.h1`
  ${({ theme }) => `
    font-size: 2em;
    text-align: left;
    padding: ${theme["padding-small"]} ${theme["padding-small"]};
  `}
`;

const Favourites = () => {
  const { user, loading: isFetchUser } = useFetchUser();
  const author = _.get(user, "sub");
  const options = author ? { variables: { where: { user: author } } } : {};

  if (isFetchUser) return <Loading />;

  return (
    <MainLayout title="dev-tips">
      <StyledHeader>Favourite Tips</StyledHeader>
      <SnippetsList
        parentRoute="snippet"
        queryType={queryEnum.userLikes}
        options={options}
      />
    </MainLayout>
  );
};

export default Favourites;
