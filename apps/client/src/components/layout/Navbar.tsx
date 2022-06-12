import {
  Box,
  Button,
  Flex,
  Link,
  Slide,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Slant as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SocialButton } from 'ui';
import { Props } from '../../interfaces/component';
import { SocialButtonStack } from '../SocialButtonsStack';

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
      <Flex h={16} align={'center'} justify={'space-between'}>
        <Box>
          <NavLink href={'/'}>
            <Text color={'purple.300'} fontSize={'2xl'} fontWeight={700}>
              SleepySloths
            </Text>
          </NavLink>
        </Box>

        <Box display={{ base: 'block', md: 'none' }}>
          <HamburgerMenu />
        </Box>

        <Stack
          direction={'row'}
          align={'center'}
          spacing={8}
          display={{ base: 'none', md: 'inherit' }}
        >
          <SocialButtonStack direction={'row'} spacing={6} />
          <Button
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
    </Box>
  );
};
