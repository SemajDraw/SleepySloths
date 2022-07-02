import { Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { CountDown } from './CountDown';

import { MintButton } from './MintButton';

export const Hero = () => {
  return (
    <Container maxW={'7xl'}>
      <Stack
        spacing={{ base: 8, md: 10 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'100%'}
          h={'100%'}
        >
          <Image
            borderRadius={20}
            alt={'Hero Image'}
            h={'100%'}
            w={'100%'}
            src={
              'https://images.squarespace-cdn.com/content/v1/6274fd6bf7507d4cea99760f/be60df70-3a79-46a9-ad48-956dd2f88ba7/1_0_GIF_2.GIF?format=1500w'
            }
          />
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }} justify={'center'}>
          <Flex direction={'column'} align={{ base: 'center' }}>
            <Heading
              as={'h1'}
              color={'white'}
              fontWeight={600}
              fontSize={{ base: '5rem', lg: '6rem' }}
            >
              Sleepy Sloths
            </Heading>
            <Text mt={0} fontSize={{ base: '3em', lg: '4em' }} color={'white'}>
              6,969 of the Sleepiest Sloths
            </Text>
          </Flex>
          <Stack
            spacing={{ base: 2, sm: 4 }}
            direction={'column'}
            color={'white'}
            justify={'center'}
            align={'center'}
          >
            <CountDown />
            <Text>Until Mint</Text>
          </Stack>
          {/* <Flex justify={'center'}>
            <MintButton />
          </Flex> */}
        </Stack>
      </Stack>
    </Container>
  );
};
