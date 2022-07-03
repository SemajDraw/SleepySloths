import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box as ChakraBox,
  Flex,
  GridItem,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Variants } from 'framer-motion';

import { Box } from 'ui';

interface Phase {
  title: string;
  body: {
    title: string;
    body: any;
  };
}

const PhaseList = ({
  phaseId,
  listItems,
}: {
  phaseId: number;
  listItems: string[];
}) => (
  <List>
    {listItems.map((item, i) => (
      <ListItem key={`phase-${phaseId}-item-${i}`}>
        <Flex>
          <Box>
            <ChevronRightIcon />
          </Box>
          <Text>{item}</Text>
        </Flex>
      </ListItem>
    ))}
  </List>
);

const phases: Phase[] = [
  {
    title: 'PHASE 1',
    body: {
      title: 'UGHHH, WH... WHERE AM I?',
      body: (
        <PhaseList
          phaseId={1}
          listItems={[
            'Sleepy Sloths are woken from their once eternal slumbar',
            "Where's my coffee!!??",
          ]}
        />
      ),
    },
  },
  {
    title: 'PHASE 2',
    body: {
      title: 'WARNING: INCOMING MONSOON SEASON',
      body: (
        <PhaseList
          phaseId={2}
          listItems={[
            'ETH Giveaway to 1 lucky minter when all Sleepy Sloths have found their trees',
            '10 Sleepy Sloths Airdropped',
          ]}
        />
      ),
    },
  },

  {
    title: 'PHASE 3',
    body: {
      title: 'READY THE BATTLE BRANCHES!',
      body: (
        <PhaseList
          phaseId={3}
          listItems={[`Take to the branches sloths and defend your forest!!!`]}
        />
      ),
    },
  },
];

const { initial, whileInView }: Variants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const PhaseItem = ({ title, body }: Phase) => (
  <Box
    initial={initial}
    whileInView={whileInView}
    viewport={{ once: true }}
    w={'100%'}
  >
    <SimpleGrid columns={13}>
      <GridItem colSpan={{ base: 12, md: 5 }} pb={3}>
        <Heading w={'100%'} fontSize={'calc(1.2 * 1.2vw + 1rem)'}>
          {title}
        </Heading>
      </GridItem>
      <GridItem colSpan={1} />

      <GridItem colSpan={{ base: 12, md: 7 }}>
        <Stack direction={'column'}>
          <Heading fontSize={'calc(1.2 * 1.2vw + 1rem)'} pb={3}>
            {body.title}
          </Heading>
          <ChakraBox fontSize={'calc(0.2 * 1.2vw + 1.2rem)'}>
            {body.body}
          </ChakraBox>
        </Stack>
      </GridItem>
    </SimpleGrid>
  </Box>
);

export const Phases = () => {
  return (
    <Flex
      minH={'100vh'}
      id={'junglemap'}
      justify={'center'}
      py={20}
      width={'100%'}
      px={{ base: 6, sm: 8 }}
    >
      <Stack
        maxW={{ base: '10xl', md: '8xl' }}
        spacing={10}
        width={'100%'}
        direction={'column'}
        align={'center'}
      >
        <Flex width={'100%'} align={'center'} justify={'center'} pb={10}>
          <Heading fontSize={'calc((2.2 - 1) * 1.2vw + 1rem)'}>
            The Jungle Map
          </Heading>
        </Flex>
        <SimpleGrid
          spacing={20}
          columns={1}
          maxWidth={{ base: '100%', md: '90%', lg: '75%' }}
        >
          {phases.map((phase, i) => (
            <PhaseItem key={`phase-${i}`} {...phase} />
          ))}
        </SimpleGrid>
      </Stack>
    </Flex>
  );
};
