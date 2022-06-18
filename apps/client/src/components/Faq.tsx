import { AddIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text as ChakraText,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Box, Text } from 'ui';

interface PanelProps {
  title: string;
  content: any;
}

const panels: PanelProps[] = [
  {
    title: 'What is this project about?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Are the NFT pictures real?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Are the eyebrows real?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'What are the benefits of owning this NFT?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Are you open to collaborations?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Wen lambo?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export const Faq = () => {
  return (
    <Flex
      id={'faq'}
      w={'100%'}
      py={{ base: 6, lg: 14 }}
      bg={'gray.200'}
      align={'center'}
      justify={'center'}
      minH={'90vh'}
    >
      <Container maxW={'7xl'}>
        <Flex
          direction={useBreakpointValue({ base: 'column', md: 'row' })}
          align={'center'}
          justify={'center'}
        >
          <Flex direction={'column'} align={'center'} justify={'end'} mr={4}>
            <Heading fontSize={'calc((2.2 - 1) * 1.2vw + 1rem)'} pb={8}>
              WTF?
            </Heading>
            <Image
              display={{ base: 'none', md: 'inherit' }}
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              objectFit={'cover'}
              boxSize={'md'}
            />
          </Flex>
          <Stack
            spacing={4}
            w={{ base: '100%', lg: '700px' }}
            ml={{ base: 0, md: 4 }}
          >
            <Accordion allowToggle>
              {panels.map((panel, i) => (
                <AccordionItem key={`accordian-item-${i}`} mb={4}>
                  {({ isExpanded }: { isExpanded: boolean }) => (
                    <>
                      <Text
                        bg={'white'}
                        whileHover={{ scale: 1.025 }}
                        whileTap={{ scale: 0.975 }}
                        transition={{
                          type: 'spring',
                          damping: 10,
                          stiffness: 150,
                        }}
                        as={'h2'}
                        fontSize={'xl'}
                      >
                        <AccordionButton bg={'white'} p={6}>
                          <Flex flex="1" textAlign="left" align={'center'}>
                            <AddIcon boxSize={4} mr={3} />
                            <ChakraText fontSize={'2xl'}>
                              {panel.title}
                            </ChakraText>
                          </Flex>
                          <Box
                            animate={{
                              rotate: isExpanded ? 90 : 0,
                              transition: {
                                type: 'spring',
                                stiffness: 80,
                              },
                            }}
                          >
                            <ChevronRightIcon boxSize={6} />
                          </Box>
                        </AccordionButton>
                      </Text>
                      <AccordionPanel bg={'gray.200'} pb={4}>
                        {panel.content}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Stack>
        </Flex>
      </Container>
    </Flex>
  );
};
