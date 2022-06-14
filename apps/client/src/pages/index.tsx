import { Box } from '@chakra-ui/react';

import type { NextPage } from 'next';
import Head from 'next/head';
import { Faq } from '../components/Faq';
import { Home } from '../components/Home';
import { JungleMap } from '../components/JungleMap';

const Index: NextPage = () => {
  return (
    <Box h={'100%'} w={'100%'}>
      <Head>
        <title>SleepySloths</title>
        <meta name="description" content="Home page of the SleepySloths NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
      <JungleMap />
      <Faq />
    </Box>
  );
};

export default Index;
