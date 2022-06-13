import { Container, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

const attributes: string[] = [
  '6969 Sleepy Sloths',
  'NFT Breeding',
  '1 Million+ Combos',
  'A.I. Generative',
];

export const Attributes = () => {
  return (
    <Flex w={'100%'} px={24}>
      <Grid
        w={'100%'}
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={6}
      >
        {attributes.map((attribute) => (
          <GridItem w="100%" h="10" bg="blue.500">
            <Flex w={'100%'} h={'100%'} align={'center'} justify={'center'}>
              <Text noOfLines={1}>{attribute}</Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};
