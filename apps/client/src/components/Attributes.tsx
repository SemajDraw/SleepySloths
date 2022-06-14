import { Container, Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react';

const attributes: string[] = [
  '6969 Sleepy Sloths',
  'NFT Breeding',
  '1 Million+ Combos',
  'A.I. Generative',
];

export const Attributes = () => {
  return (
    <Container maxW={'7xl'}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {attributes.map((attribute, i) => (
          <GridItem
            colSpan={{ base: 2, md: 1 }}
            key={`grid-item-${i}`}
            bg="white"
            p={4}
          >
            <Flex w={'100%'} h={'100%'} align={'center'} justify={'center'}>
              <Text noOfLines={1}>{attribute}</Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};
