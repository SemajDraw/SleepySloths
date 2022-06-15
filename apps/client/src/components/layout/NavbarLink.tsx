import { useBreakpointValue, useTheme } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { NAVBAR_HEIGHTS } from '../../constants';
import { useIsHovered } from '../../hooks';
import { Props } from '../../interfaces/component';
import { Link } from '../Link';

const AnimatedLink = animated(Link);

interface NavbarLinkProps extends Props {
  isActive: boolean;
  to: string;
}

export const NavbarLink = ({ children, to, isActive }: NavbarLinkProps) => {
  const theme = useTheme();
  const [isHovered, listeners] = useIsHovered();
  const animatedValues = useSpring({
    color: isActive || isHovered ? 'orange' : theme.colors.gray['400'],
    config: config.gentle,
  });
  const isBelowLg = useBreakpointValue({ base: true, lg: false });
  const scrollSectionRef = useRef<Element | null>(null);

  useEffect(() => {
    scrollSectionRef.current = document.getElementById(to);
  }, [to]);

  return (
    <AnimatedLink
      fontWeight={700}
      textTransform="lowercase"
      fontSize="lg"
      href={`/#${to}`}
      onClick={(e) => {
        e.preventDefault();

        const elementTop = Math.max(
          (scrollSectionRef.current as HTMLElement).offsetTop -
            (isBelowLg ? NAVBAR_HEIGHTS.MOBILE : NAVBAR_HEIGHTS.DESKTOP) -
            16,
          0
        );

        window.scrollTo({ top: elementTop, behavior: 'smooth' });
      }}
      style={animatedValues}
      {...listeners}
    >
      {children}
    </AnimatedLink>
  );
};
