import { Box, Flex } from '@chakra-ui/react';

import type { NextPage } from 'next';
import Head from 'next/head';
import { Attributes } from '../components/Attributes';
import { Faq } from '../components/Faq';
import { Hero } from '../components/Hero';

const Index: NextPage = () => {
  return (
    <Box h={'100%'} w={'100%'}>
      <Head>
        <title>SleepySloths</title>
        <meta name="description" content="Home page of the SleepySloths NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction={'column'} bg={'black'}>
        <Hero />
        <Attributes />
      </Flex>
      <Flex></Flex>
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
