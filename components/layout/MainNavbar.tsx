import Link from 'next/link';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
const { Header } = Layout;

const StyledHeader = styled(Header)`
  ${({ theme }) => `
    background-color: ${theme['header-color']};
    border-bottom-color: ${theme['header-border-color']};
    border-bottom-width: 1px;
    border-bottom-style: solid;
    text-align: right;
    display: flex;
    li {
      font-size: ${theme['font-size-md']}
    }
  `}
`;

const StyledMenu = styled(Menu)`
  border-bottom-width: 0px;
  width: 50%;
`;

const TitleContainer = styled.div`
  ${({ theme }) => `
    background-color: ${theme['header-color']};
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
`;

const Title = styled.div`
  ${({ theme }) => `
    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    line-height: 30px;
    margin: 10px 0 10px -50px;    
    div {
      width: 100%;
      margin-top: 10px;
      padding-left: ${theme['padding-small']}
    }
    h2 {
      display: inline;
      color: inherit;
    }
    img {
      width: 80px;
      height: 60px;
    }
  `}
`;
export const MainNavbar = () => (
  <StyledHeader>
    <TitleContainer>
      <Title>
        <img src="/logo.svg" alt="Logo" />
        <div>
          <h2>Developer recipes Hideout</h2>
          <p>Handy cookbook for you projects</p>
        </div>
      </Title>
    </TitleContainer>
    <StyledMenu theme="light" mode="horizontal" style={{ lineHeight: '64px' }}>
      <Menu.Item key="/">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
    </StyledMenu>
  </StyledHeader>
);
