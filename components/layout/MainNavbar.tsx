import Link from "next/link";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import { useFetchUser } from "../../utils/user";
const { Header } = Layout;

const StyledHeader = styled(Header)`
  ${({ theme }) => `
    background-color: ${theme["header-color"]};
    border-bottom-color: ${theme["header-border-color"]};
    border-bottom-width: 1px;   
    border-bottom-style: solid;
    text-align: right;
    display: flex;
    li {
      font-size: ${theme["font-size-md"]}
    }
  `}
`;

const StyledMenu = styled(Menu)`
  border-bottom-width: 0px;
  background-color: #f2fffb;
  background-image: linear-gradient(90deg, #f2fffb 0%, #d4c3d0 100%);

  width: 50%;
  font-weight: bold;
  @media (max-width: 768px) {
    width: 100%;
  }
  a {
    color: #001c55 !important;
  }
`;

const TitleContainer = styled.div`
  ${({ theme }) => `
    background-color: ${theme["header-color"]};
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    @media (max-width: 768px) {
      visibility: hidden;
      width: 0;
    }
  `}
`;

const Title = styled.div`
  ${({ theme }) => `
    text-align: left;
    display: flex;
    justify-content: center;    
    align-items: center;
    line-height: 30px;
    margin: 10px 0 10px -50px;    
    div {
      width: 100%;
      margin-top: 10px;
      padding-left: ${theme["padding-small"]}
    }
    h2 {
      display: inline;
      color: red;
      font-weight: bold;
    }
    img {
      width: 80px;
      height: 60px;
    }
  `}
`;

export const MainNavbar = () => {
  const { user, loading } = useFetchUser();
  return (
    <StyledHeader>
      <TitleContainer>
        <Link href="/">
          <Title>
            <img src="/logo.svg" alt="Logo" />
            <div>
              <h2>DevTips</h2>
              <p>Handy cookbook for you projects</p>
            </div>
          </Title>
        </Link>
      </TitleContainer>
      <StyledMenu
        theme="light"
        mode="horizontal"
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="/">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        {user && !loading ? (
          [
            <Menu.Item key="/my-snippets">
              <Link href="/my-snippets">
                <a>My Snippets</a>
              </Link>
            </Menu.Item>,
            <Menu.Item key="/api/logout">
              <Link href="/api/logout">
                <a>Logout</a>
              </Link>
            </Menu.Item>,
          ]
        ) : (
          <Menu.Item key="/api/login">
            <Link href="/api/login">
              <a>Log In</a>
            </Link>
          </Menu.Item>
        )}
      </StyledMenu>
    </StyledHeader>
  );
};
