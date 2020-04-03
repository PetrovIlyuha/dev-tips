import { Component, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';
import { GlobalStyle } from '../../utils/globalStyle';
import Head from 'next/head';
import { Layout } from 'antd';
import { MainFooter } from './MainFooter';
import { MainNavbar } from './MainNavbar';

const { Header, Content } = Layout;

const MainHead = ({ title }: { title: string }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=devide-width" />
    <meta
      name="description"
      content="social media app for developers to share code tips and useful methods"
    />
    <meta name="author" content="Petrov Ilya" />
    <meta
      name="keyword"
      content="react, code, coders, programming, tips, cheatsheets, useful, snippets"
    />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:url" content="http://dev-tips.netlify.com" />
    <meta property="og:image" content="/public/logo.svg" />
    <meta
      property="og:description"
      content="social media app for developers to share code tips and useful methods"
    />

    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/android-icon-192x192.png"
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
);

type Props = {
  children: ReactNode;
  title?: string;
};

const StyledBody = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export class MainLayout extends Component<Props> {
  render() {
    const { children, title } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <MainHead title={title} />
        <GlobalStyle />
        <StyledBody>
          <Layout>
            <MainNavbar />
            <Content>{children}</Content>
            <MainFooter />
          </Layout>
        </StyledBody>
      </ThemeProvider>
    );
  }
}
