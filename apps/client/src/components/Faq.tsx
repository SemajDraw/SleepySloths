import { AddIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Container,
  Flex,
  Heading as ChakraHeading,
  Image,
  Stack,
  Text as ChakraText,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Box, Heading, Text } from 'ui';

interface PanelProps {
  title: string;
  content: any;
}

const panels: PanelProps[] = [
  {
    title: 'What is this project about?',
    content:
      'Owning a Sleepy Sloth shows you are one of the NFT collectors that values the slower things in life. Sloths are slow and steady but also adorable, no animal looks cuter while being so lazy.',
  },
  {
    title: 'Are the NFT pictures of real Sloths?',
    content:
      'OF COURSE... not, our sloths are all computer generated using the most forest friendly A.I. we could develop',
  },
  {
    title: 'Do Sloths not get tired hanging around all day?',
    content:
      "Though were not absolutely certain how our sleepy friends hang around all day, it's thought Sloths can quickly reproduce the fuel of the muscle cell Adenosine Triphosphate (ATP)",
  },
  {
    title: 'What are the benefits of owning this NFT?',
    content:
      "You'll own a completely unique piece of super cool super sleepy art",
  },
  {
    title: 'Wen lambo?',
    content: "We're Sloths ser we say, wen nap!?!",
  },
];

export const Faq = () => {
  return (
    <Flex
      direction={'column'}
      id={'faq'}
      w={'100%'}
      py={{ base: 6, lg: 14 }}
      bg={'gray.200'}
      align={'center'}
      justify={'center'}
      minH={{ base: '80vh', sm: '90vh' }}
    >
      <Flex pb={10} align={'center'} justify={'center'}>
        <ChakraHeading fontSize={'calc((2.2 - 1) * 1.2vw + 1rem)'} pb={8}>
          WTF?
        </ChakraHeading>
      </Flex>
      <Container maxW={'7xl'}>
        <Flex
          direction={useBreakpointValue({ base: 'column', md: 'row' })}
          align={'center'}
          justify={'center'}
        >
          <Flex direction={'column'} align={'center'} justify={'end'} mr={4}>
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
                      <Heading
                        bg={'white'}
                        whileHover={{ scale: 1.025 }}
                        whileTap={{ scale: 0.975 }}
                        transition={{
                          type: 'spring',
                          damping: 10,
                          stiffness: 150,
                        }}
                        as={'h2'}
                      >
                        <AccordionButton bg={'white'} p={6}>
                          <Flex flex="1" textAlign="left" align={'center'}>
                            <AddIcon boxSize={4} mr={3} />
                            <ChakraText fontSize={'calc(0.6 * 1.2vw + 1rem)'}>
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
                      </Heading>
                      <AccordionPanel
                        bg={'gray.200'}
                        pb={4}
                        fontSize={'calc(0.2 * 1.2vw + 1.2rem)'}
                      >
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
