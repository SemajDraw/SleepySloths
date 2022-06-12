import { ChakraProvider } from '@chakra-ui/react';

import { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import { Layout } from '../components/layout/Layout';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </CookiesProvider>
  );
}

export default MyApp;
