import { Button, Container, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Flex } from 'ui';

const NotFound = () => {
  return (
    <Container h={'90vh'} w={'100vw'}>
      <Flex
        h={'100%'}
        w={'100%'}
        justify={'center'}
        align={'center'}
        direction={'column'}
      >
        <Heading
          display="inline-block"
          as="h2"
          fontSize="15rem"
          bgGradient="linear(to-r, orange.400, gray.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={'gray.500'} mb={6}>
          {"The page you're looking for does not exist"}
        </Text>

        <Button
          bgGradient="linear(to-r, orange.400, gray.600)"
          color="white"
          variant="solid"
          _hover={{
            bgGradient: 'linear(to-r, orange.400, gray.600)',
            opacity: 0.8,
          }}
          _active={{ bgGradient: 'linear(to-r, orange.400, gray.600)' }}
        >
          <Link href={'/'}>Back to SleepySloths</Link>
        </Button>
      </Flex>
    </Container>
  );
};

export default NotFound;
