import { Box, Container, Flex } from '@chakra-ui/react';

import type { NextPage } from 'next';
import Head from 'next/head';
import { Faq } from '../components/Faq';

const Index: NextPage = () => {
  return (
    <Box h={'100%'} w={'100%'}>
      <Head>
        <title>SleepySloths</title>
        <meta name="description" content="Home page of the SleepySloths NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        w={'100%'}
        p={10}
        bg={'gray.200'}
        align={'center'}
        justify={'center'}
      >
        <Faq />
      </Flex>
    </Box>
  );
};

export default Index;
