import { useState } from 'react';
import { Box, Flex, Slide, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Slant as Hamburger } from 'hamburger-react';
import { SECTIONS } from '../../constants';
import { NavbarLink } from './NavbarLink';

interface HamburgerMenuProps {
  activeSectionId: string;
}

export const HamburgerMenu = ({ activeSectionId }: HamburgerMenuProps) => {
  const [isOpen, setOpen] = useState(false);
  const menuW = useBreakpointValue({ base: '100vw', sm: '400px' });

  return (
    <Box>
      <Flex
        top={isOpen ? 0 : 'inherit'}
        right={isOpen ? 0 : 'inherit'}
        mr={isOpen ? 12 : 'inherit'}
        h={isOpen ? '4rem' : 'inherit'}
        position={isOpen ? 'fixed' : 'relative'}
        zIndex={1000}
        alignItems={'center'}
        color={'gray.400'}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} rounded={true} />
      </Flex>
      <Slide
        direction={'right'}
        in={isOpen}
        style={{ width: menuW, height: '100vh', zIndex: 10 }}
      >
        <Box
          borderLeftRadius={{ base: 0, sm: 8 }}
          w={'100%'}
          h={'100vh'}
          px={4}
          bg="gray.700"
        >
          <VStack
            display={{ base: 'none', md: 'flex' }}
            direction="row"
            spacing={6}
          >
            {SECTIONS.map((section) => (
              <NavbarLink
                key={section.id}
                to={section.id}
                isActive={section.id === activeSectionId}
              >
                {section.title}
              </NavbarLink>
            ))}
          </VStack>
        </Box>
      </Slide>
    </Box>
  );
};
