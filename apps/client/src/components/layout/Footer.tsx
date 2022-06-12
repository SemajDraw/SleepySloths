import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { copyRight } from '../../constants/Footer';
import { SocialButtonStack } from '../SocialButtonsStack';

export const Footer = () => {
  return (
    <Box
      as={'footer'}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
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
        <Text>{copyRight}</Text>
        <SocialButtonStack direction={'row'} spacing={6} />
      </Container>
    </Box>
  );
};
