import { Button } from '@chakra-ui/react';

export const MintButton = () => {
  return (
    <Button
      disabled
      rounded={'full'}
      size={'lg'}
      fontWeight={'normal'}
      px={6}
      colorScheme={'red'}
      bg={'red.400'}
      _hover={{ bg: 'red.500' }}
    >
      MINT
    </Button>
  );
};
