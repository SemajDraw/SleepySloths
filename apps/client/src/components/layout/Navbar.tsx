import { Box, Flex, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import throttle from 'lodash.throttle';
import { memo, useEffect, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import {
  getNavbarAnimationStyles,
  NAVBAR_HEIGHTS,
  NAVBAR_STATES,
  SECTIONS,
} from '../../constants';
import {
  SCROLL_DIRECTIONS,
  useActiveId,
  useScrollInfo,
} from '../../utils/navbar.utils';
import { Link } from '../Link';
import { MintButton } from '../MintButton';
import { SocialButtonStack } from '../SocialButtonsStack';
import { HamburgerMenu } from './HamburgerMenu';
import { NavbarLink } from './NavbarLink';

const AnimatedBox = animated(Box);

export const Navbar = memo(function Navbar() {
  const activeSectionId = useActiveId(SECTIONS.map((section) => section.id));
  const [navbarState, setNavbarState] = useState(NAVBAR_STATES.INITIAL);
  const isMdDown = useBreakpointValue({ base: true, md: false });
  const { scrollDirection } = useScrollInfo();
  const animatedValues = useSpring({
    ...getNavbarAnimationStyles({
      state: navbarState,
      isMdDown: Boolean(isMdDown),
    }),
    config: { ...config.gentle, clamp: true },
  });

  useEffect(() => {
    const onScroll = throttle(() => {
      const { scrollY } = window;

      // on desktops, set the navbar as "stuck" whenever the user scrolls the
      // page down
      if (!isMdDown) {
        setNavbarState(
          scrollY > 1 ? NAVBAR_STATES.STUCK : NAVBAR_STATES.INITIAL
        );
        return;
      }

      // if the user scrolls DOWN, the mobile navbar is NOT set as `HIDDEN`, and
      // the user scroll past the height of the navbar
      if (
        scrollDirection === SCROLL_DIRECTIONS.DOWN &&
        navbarState !== NAVBAR_STATES.HIDDEN
      ) {
        setNavbarState(NAVBAR_STATES.HIDDEN);
      }

      // if the user scrolls UP
      if (scrollDirection === SCROLL_DIRECTIONS.UP) {
        // if the user scroll to the very top of the page
        if (scrollY <= 1 && navbarState !== NAVBAR_STATES.INITIAL) {
          setNavbarState(NAVBAR_STATES.INITIAL);
        }

        // if the user scrolled UP and is below the navbar height
        else if (scrollY > NAVBAR_HEIGHTS.MOBILE) {
          setNavbarState(NAVBAR_STATES.STUCK);
        }
      }
    }, 100);
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [isMdDown, navbarState, scrollDirection]);

  return (
    <AnimatedBox
      bg={navbarState === NAVBAR_STATES.INITIAL ? 'black' : 'gray.800'}
      pos="sticky"
      top={0}
      height={{
        base: `${NAVBAR_HEIGHTS.MOBILE}px`,
        md: `${NAVBAR_HEIGHTS.DESKTOP}px`,
      }}
      style={animatedValues}
      zIndex={2}
    >
      <Flex align={'center'} height={'100%'} px={12}>
        <Stack
          w={'100%'}
          display={{ base: 'none', sm: 'flex' }}
          justify={'space-between'}
          direction="row"
        >
          <Box display={{ base: 'none', md: 'inherit' }}>
            <Link
              _hover={{
                textDecoration: 'none',
              }}
              href={'/'}
            >
              <Text color={'purple.300'} fontSize={'2xl'} fontWeight={700}>
                Sleepy Sloths
              </Text>
            </Link>
          </Box>
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
          <Box>
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
          </Box>
          <Box>
            <HamburgerMenu activeSectionId={activeSectionId} />
          </Box>
        </Flex>
      </Flex>
    </AnimatedBox>
  );
});
