import {
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { COPYRIGHT_STATEMENT } from '../../constants';
import { SocialButtonStack } from '../SocialButtonsStack';

export const Footer = () => {
  return (
    <Flex
      minH={'10vh'}
      as={'footer'}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      align={'center'}
      justify={'center'}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-around' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>{COPYRIGHT_STATEMENT}</Text>
        <SocialButtonStack direction={'row'} spacing={6} />
      </Container>
    </Flex>
  );
};
