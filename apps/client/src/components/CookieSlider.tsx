import { Button, Flex, Slide, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { TERMS_CONDITIONS } from '../constants';

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
        <Text>{TERMS_CONDITIONS}</Text>
        <Button
          onClick={() => {
            setOpen(false);
            setCookie('__cookies', { accepted: true }, { path: '/' });
          }}
          colorScheme={'whiteAlpha'}
          variant={{ base: 'link', md: 'outline' }}
          fontWeight={'700'}
        >
          Accept
        </Button>
      </Flex>
    </Slide>
  );
};
