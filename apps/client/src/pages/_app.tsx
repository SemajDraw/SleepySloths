import '@fontsource/finger-paint';
import '@fontsource/indie-flower';
import { ChakraProvider } from '@chakra-ui/react';

import { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import { CookieSlider } from '../components/CookieSlider';

import { Layout } from '../components/layout/Layout';
import theme from '../theme/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
          <CookieSlider />
        </Layout>
      </ChakraProvider>
    </CookiesProvider>
  );
}

export default App;
