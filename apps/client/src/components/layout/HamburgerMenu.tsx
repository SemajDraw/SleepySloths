import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Slant as Hamburger } from 'hamburger-react';
import { useEffect } from 'react';
import { SECTIONS } from '../../constants';
import { SocialButtonStack } from '../SocialButtonsStack';
import { NavbarLink } from './NavbarLink';

interface HamburgerMenuProps {
  activeSectionId: string;
}

export const HamburgerMenu = ({ activeSectionId }: HamburgerMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const closeDrawer = useBreakpointValue({ base: false, sm: true });

  useEffect(() => {
    if (closeDrawer) {
      onClose();
    }
  }, [closeDrawer]);

  const HamburgerMenu = (
    <Flex
      top={isOpen ? 0 : 'inherit'}
      right={isOpen ? 0 : 'inherit'}
      mr={isOpen ? 12 : 'inherit'}
      h={isOpen ? '4rem' : 'inherit'}
      position={isOpen ? 'fixed' : 'relative'}
      zIndex={10000}
      alignItems={'center'}
      color={'gray.400'}
    >
      <Hamburger
        toggled={isOpen}
        toggle={isOpen ? onClose : onOpen}
        rounded={true}
      />
    </Flex>
  );

  return (
    <Box>
      {HamburgerMenu}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={'full'}>
        <DrawerOverlay />
        <DrawerContent bg="gray.700">
          {HamburgerMenu}
          <DrawerHeader pl={10}>
            <Heading color={'white'} fontSize={'3xl'} fontWeight={700}>
              SleepySloths
            </Heading>
          </DrawerHeader>

          <DrawerBody pl={10}>
            <Flex direction={'column'}>
              {SECTIONS.map((section) => (
                <NavbarLink
                  key={section.id}
                  to={section.id}
                  isActive={section.id === activeSectionId}
                >
                  <Box onClick={onClose}>{section.title}</Box>
                </NavbarLink>
              ))}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Flex w={'100%'} justify={'center'} pb={5}>
              <SocialButtonStack direction={'row'} spacing={10} />
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
