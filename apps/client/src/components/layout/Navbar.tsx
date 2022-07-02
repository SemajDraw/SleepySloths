import {
  Box as ChakraBox,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import throttle from 'lodash.throttle';
import { memo, useEffect, useState } from 'react';
import { Box } from 'ui';
import {
  NAVBAR_HEIGHTS,
  NAVBAR_STATES,
  SCROLL_DIRECTIONS,
  SECTIONS,
} from '../../constants';
import { useActiveId, useScrollInfo } from '../../hooks';
import { Link } from '../Link';
import { MintButton } from '../MintButton';
import { SocialButtonStack } from '../SocialButtonsStack';
import { HamburgerMenu } from './HamburgerMenu';
import { NavbarLink } from './NavbarLink';

export const Navbar = memo(function Navbar() {
  const activeSectionId = useActiveId(SECTIONS.map((section) => section.id));
  const [navbarState, setNavbarState] = useState(NAVBAR_STATES.INITIAL);
  const isMdDown = useBreakpointValue({ base: true, md: false });
  const { scrollDirection } = useScrollInfo();

  useEffect(() => {
    const onScroll = throttle(() => {
      const { scrollY } = window;

      if (!isMdDown) {
        setNavbarState(
          scrollY > 1 ? NAVBAR_STATES.STUCK : NAVBAR_STATES.INITIAL
        );
        return;
      }

      if (
        scrollDirection === SCROLL_DIRECTIONS.DOWN &&
        navbarState !== NAVBAR_STATES.HIDDEN
      ) {
        setNavbarState(NAVBAR_STATES.HIDDEN);
      }

      if (scrollDirection === SCROLL_DIRECTIONS.UP) {
        if (scrollY <= 1 && navbarState !== NAVBAR_STATES.INITIAL) {
          setNavbarState(NAVBAR_STATES.INITIAL);
        } else if (scrollY > NAVBAR_HEIGHTS.MOBILE) {
          setNavbarState(NAVBAR_STATES.STUCK);
        }
      }
    }, 100);
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [isMdDown, navbarState, scrollDirection]);

  return (
    <Box
      bg={navbarState === NAVBAR_STATES.INITIAL ? 'black' : 'gray.900'}
      position="sticky"
      top={0}
      height={{
        base: `${NAVBAR_HEIGHTS.MOBILE}px`,
        md: `${NAVBAR_HEIGHTS.DESKTOP}px`,
      }}
      zIndex={2}
    >
      <Flex align={'center'} height={'100%'} px={12}>
        <Stack
          w={'100%'}
          display={{ base: 'none', sm: 'flex' }}
          justify={'space-between'}
          direction="row"
        >
          <ChakraBox display={{ base: 'none', md: 'inherit' }}>
            <Link
              _hover={{
                textDecoration: 'none',
              }}
              href={'/'}
            >
              <Heading fontSize={'3xl'} fontWeight={700}>
                SleepySloths
              </Heading>
            </Link>
          </ChakraBox>
          <Stack direction={'row'} spacing={6}>
            {SECTIONS.map((section) => (
              <Flex align={'center'} key={section.id}>
                <NavbarLink
                  to={section.id}
                  isActive={section.id === activeSectionId}
                >
                  {section.title}
                </NavbarLink>
              </Flex>
            ))}
          </Stack>
          <Stack direction={'row'} align={'center'} spacing={8}>
            <SocialButtonStack direction={'row'} spacing={6} />
            <MintButton />
          </Stack>
        </Stack>

        <Flex
          align={'center'}
          flex={1}
          justify={{ base: 'space-between', md: 'flex-end' }}
          display={{ base: 'flex', sm: 'none' }}
        >
          <ChakraBox>
            <Link
              _hover={{
                textDecoration: 'none',
              }}
              href={'/'}
            >
              <Text color={'purple.300'} fontSize={'2xl'} fontWeight={700}>
                ICON
              </Text>
            </Link>
          </ChakraBox>
          <ChakraBox>
            <HamburgerMenu activeSectionId={activeSectionId} />
          </ChakraBox>
        </Flex>
      </Flex>
    </Box>
  );
});
