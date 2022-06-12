import { Button, Flex, Slide, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { termsAndConditions } from '../constants/CookieSlider';

export const CookieSlider = () => {
  const [cookies, setCookie] = useCookies(['__cookies']);
  const [isOpen, setOpen] = useState(!cookies?.__cookies?.accepted);

  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        py={6}
        px={8}
        color="white"
        bg="teal.500"
        roundedTop="md"
        shadow="md"
        justify={{ base: 'space-between', md: 'space-evenly' }}
        align={'center'}
      >
        <Text>{termsAndConditions}</Text>
        <Button
          onClick={() => {
            setOpen(false);
            setCookie('__cookies', { accepted: true }, { path: '/' });
          }}
          colorScheme="white"
          variant={{ base: 'link', md: 'solid' }}
        >
          Accept
        </Button>
      </Flex>
    </Slide>
  );
};
