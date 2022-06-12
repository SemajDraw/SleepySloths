import {
  Box,
  Flex,
  Link,
  Button,
  Stack,
  Text,
  Slide,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Slant as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { Props } from '../../interfaces/component';

interface NavLinkProps extends Props {
  href: string;
}

const NavLink = ({ children, href }: NavLinkProps) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
    }}
    href={href}
  >
    {children}
  </Link>
);

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const menuW = useBreakpointValue({ base: '100vw', sm: '400px' });
  return (
    <Box>
      <Flex
        top={isOpen ? 0 : 'inherit'}
        right={isOpen ? 0 : 'inherit'}
        mr={isOpen ? 4 : 'inherit'}
        h={isOpen ? '4rem' : 'inherit'}
        position={isOpen ? 'fixed' : 'relative'}
        zIndex={1000}
        alignItems={'center'}
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
          h={'100%'}
          px={4}
          bg="gray.300"
        >
          <Flex h={16} alignItems={'center'}></Flex>
        </Box>
      </Slide>
    </Box>
  );
};

export const Navbar = () => {
  const account = false;
  const connectWallet = () => window.alert('Shit');

  return (
    <Box
      as={'header'}
      position={'fixed'}
      width={'100%'}
      bg={'transparent'}
      px={4}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
          <NavLink href={'/'}>
            <Text color={'purple.300'} fontSize={'2xl'} fontWeight={700}>
              SleepySloths
            </Text>
          </NavLink>
        </Box>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Box display={{ base: 'block', md: 'none' }}>
              <HamburgerMenu />
            </Box>
            <Button
              display={{ base: 'none', md: 'block' }}
              isActive={false}
              mt={2}
              bg={account ? 'purple.300' : 'purple.200'}
              _hover={{ bg: account ? 'purple.200' : 'purple.100' }}
              color={'white'}
              onClick={connectWallet}
            >
              Mint
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
