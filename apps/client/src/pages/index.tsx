import { Box } from '@chakra-ui/react';

import type { NextPage } from 'next';
import Head from 'next/head';

const Index: NextPage = () => {
  return (
    <Box h={'100%'} w={'100%'}>
      <Head>
        <title>SleepySloths</title>
        <meta name="description" content="Home page of the SleepySloths NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Box>
  );
};

export default Index;
