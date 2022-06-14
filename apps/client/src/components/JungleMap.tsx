import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Fragment } from 'react';

interface Phase {
  title: string;
  body: {
    title: string;
    body: any;
  };
}

const phases: Phase[] = [
  {
    title: 'PHASE 1',
    body: {
      title: "UGH, I DON'T WANNA GET UP!",
      body: (
        <List>
          {[
            'Sleepy Sloths are woken from their eternal slumbar',
            "Where's my coffee!!??",
            'ETH/SOL Giveaway',
            '10 Sleepy Sloths Airdropped',
            'Community Bank Opens (25% of all secondary sales revenue)',
          ].map((item, i) => (
            <ListItem key={`phase-1-item-${i}`}>
              <Text>{item}</Text>
            </ListItem>
          ))}
        </List>
      ),
    },
  },
  {
    title: 'PHASE 2',
    body: {
      title: 'WARNING: INCOMING MONSOON SEASON',
      body: (
        <List>
          <ListItem>
            <Heading>ATTENTION ALL TREE CLINGERS: </Heading>
            <Text>
              There is a high chance some of you will be exposed to radioactive
              rainfall... This may affect your baby sloths...
            </Text>
          </ListItem>
        </List>
      ),
    },
  },
  {
    title: 'PHASE 3',
    body: {
      title: 'CALLING All BABY SLOTHS... WAKE UP!!!',
      body: (
        <List>
          <ListItem display={'flex'}>
            <Text>Baby Sloths are born</Text>
            <Heading>BUT</Heading>
            <Text>{"they're not so sleepy"}</Text>
          </ListItem>
        </List>
      ),
    },
  },
  {
    title: 'PHASE 4',
    body: {
      title: 'READY THE BATTLE BRANCHES!',
      body: (
        <List>
          {[
            `Sleepy Town Hall meeeting to discuss how to defend our forest aka
              (what to do with the community reserves). All holders will be able
              to vote!`,
          ].map((item, i) => (
            <ListItem key={`phase-4-item-${i}`}>
              <Text>{item}</Text>
            </ListItem>
          ))}
        </List>
      ),
    },
  },
  {
    title: 'PHASE 5',
    body: {
      title: 'BABY SLOTHS GO TO JUNGLE ACADEMY',
      body: (
        <List>
          {[
            'Baby Sloths can be sent to Jungle Academy where they will evolve...',
          ].map((item, i) => (
            <ListItem key={`phase-5-item-${i}`}>
              <Text>{item}</Text>
            </ListItem>
          ))}
        </List>
      ),
    },
  },
];

const PhaseItem = ({ title, body }: Phase) => (
  <Fragment>
    <Divider />
    <GridItem colSpan={{ base: 12, md: 4 }}>
      <Heading size={'md'}>{title}</Heading>
    </GridItem>

    <GridItem colSpan={{ base: 12, md: 7 }}>
      <Stack direction={'column'}>
        <Heading size={'md'}>{body.title}</Heading>
        {body.body}
      </Stack>
    </GridItem>
  </Fragment>
);

export const JungleMap = () => {
  return (
    <Box id={'junglemap'} py={6} px={5}>
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}
          >
            <Heading size={'lg'}>The Jungle Map</Heading>
          </Stack>
        </Stack>
        <SimpleGrid columns={12} gap={1}>
          {phases.map((phase, i) => (
            <PhaseItem key={`phase${i}`} {...phase} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};
