// import { AddIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
// import {
//   Accordion,
//   AccordionButton,
//   AccordionIcon,
//   AccordionItem,
//   AccordionItemProps,
//   AccordionPanel,
//   Box,
//   Container,
//   Flex,
//   Image,
//   SimpleGrid,
//   Text,
// } from '@chakra-ui/react';

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

// export const Faq = () => {
//   return (
//     <Container maxW={'5xl'} py={12}>
//       <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
//         <Flex display={{ base: 'none', md: 'inherit' }}>
//           <Image
//             rounded={'md'}
//             alt={'feature image'}
//             src={
//               'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
//             }
//             objectFit={'cover'}
//           />
//         </Flex>
//         <Box bg={'gray.200'} w={'100%'} maxWidth={'none'} maxW={'700px'}>
//           <Accordion allowToggle>
//             {panels.map((panel) => (
//               <AccordionItem mb={3} bg={'white'}>
//                 {({ isExpanded }: { isExpanded: boolean }) => (
//                   <>
//                     <Text fontSize={'xl'}>
//                       <AccordionButton bg={'white'}>
//                         <Flex flex="1" textAlign="left" align={'center'}>
//                           <AddIcon boxSize={4} mr={3} />
//                           <Text fontSize={'2xl'}>{panel.title}</Text>
//                         </Flex>
//                         {isExpanded ? (
//                           <ChevronDownIcon boxSize={6} />
//                         ) : (
//                           <ChevronRightIcon boxSize={6} />
//                         )}
//                       </AccordionButton>
//                     </Text>
//                     <AccordionPanel bg={'gray.200'} pb={4}>
//                       {panel.content}
//                     </AccordionPanel>
//                   </>
//                 )}
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </Box>
//       </SimpleGrid>
//     </Container>
//   );
// };

import { AddIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Container,
  Flex,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

export const Faq = () => {
  return (
    <Container maxW={'8xl'} py={12}>
      <Flex align={'center'} justify={'center'}>
        <Flex
          display={{ base: 'none', md: 'flex' }}
          align={'center'}
          justify={'end'}
          mr={4}
        >
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
            boxSize={'md'}
          />
        </Flex>
        <Stack spacing={4} w={'700px'} ml={4}>
          <Accordion allowToggle>
            {panels.map((panel) => (
              <AccordionItem mb={4} bg={'white'}>
                {({ isExpanded }: { isExpanded: boolean }) => (
                  <>
                    <Text fontSize={'xl'}>
                      <AccordionButton
                        bg={'white'}
                        p={6}
                        _hover={{ border: '2px' }}
                      >
                        <Flex flex="1" textAlign="left" align={'center'}>
                          <AddIcon boxSize={4} mr={3} />
                          <Text fontSize={'2xl'}>{panel.title}</Text>
                        </Flex>
                        {isExpanded ? (
                          <ChevronDownIcon boxSize={6} />
                        ) : (
                          <ChevronRightIcon boxSize={6} />
                        )}
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
  );
};
