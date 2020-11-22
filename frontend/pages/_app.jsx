import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import NextApp from 'next/app';
import Head from 'next/head';
import { PageLayout } from '../components';

const theme = {
  containerWidth: '960px',
  accentColor: 'red'
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f4f4f4;
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  :root {
    --color-accent: red;
    --width: 960px;
  }
`;

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css"
          />
          <script src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
App.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await NextApp.getInitialProps(ctx);
  // Fetch global site settings from Strapi

  // Pass the data to our page via props
  return { ...appProps, pageProps: { path: ctx.pathname } };
};

export default App;
