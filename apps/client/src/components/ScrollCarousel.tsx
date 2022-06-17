import { Box, Flex, Image } from '@chakra-ui/react';
import useWindowScroll from '@react-hook/window-scroll';
import { useCallback, useEffect, useRef } from 'react';
import { animated, to, useSpring } from 'react-spring';
import { ClientComponent } from 'ui';
import { useScrollWidth } from '../hooks/useScrollWidth';
import { Props } from '../interfaces/component';

const AnimatedBox = animated(Box);

function ScrollCarousels({ children }: Props) {
  const refHeight = useRef(null);
  const refTransform = useRef(null);

  const { scrollWidth } = useScrollWidth(refTransform);

  // the argument is the fps that the hook uses,
  // since react spring interpolates values we can safely reduce this below 60
  const scrollY = useWindowScroll(45);
  const [{ st, xy }, set] = useSpring(() => ({
    st: 0,
    xy: [0, 0],
    loop: true,
  }));

  useEffect(() => {
    set({ st: scrollY });
  }, [scrollY, set]);

  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
    []
  );

  const top = refHeight.current ? refHeight.current.offsetTop : 0;
  const width = refHeight.current ? refHeight.current.offsetWidth : 0;

  // we want to set the scrolling element *height* to the value of the *width* of the horizontal content
  // plus some other calculations to convert it from a width to a height value
  const elHeight =
    scrollWidth - (window.innerWidth - window.innerHeight) + width; // scroll away when final viewport width is 0.5 done

  const interpTransform = to([st, xy], (o, xy) => {
    const mouseMoveDepth = 1000; // not necessary, but nice to have
    const x = width - (top - o) - width * 0.9;

    // (width * 0.5) so that it starts moving just slightly before it comes into view
    if (x < -window.innerHeight - width) {
      // element is not yet in view, we're currently above it. so don't animate the translate value
      return `translate3d(${window.innerHeight}px, 0, 0)`;
    }

    if (Math.abs(x) > elHeight) {
      // element is not in view, currently below it.
      return `translate3d(${elHeight}px, 0, 0)`;
    }

    // else animate as usual
    return `translate3d(${-x + -xy[0] / mouseMoveDepth}px, ${
      -xy[1] / mouseMoveDepth
    }px, 0)`;
  });

  return (
    <Box onMouseMove={onMouseMove} bg={'black'} ref={refHeight}>
      <Box>
        <AnimatedBox
          display={'flex'}
          style={{ transform: interpTransform }}
          willChange={'transform'}
          ref={refTransform}
        >
          {children}
        </AnimatedBox>
      </Box>
    </Box>
  );
}

const urls = [
  'https://picsum.photos/720/540/?image=88',
  'https://picsum.photos/720/540/?image=512',
  'https://picsum.photos/720/540/?image=435',
  'https://picsum.photos/720/540/?image=88',
  'https://picsum.photos/720/540/?image=512',
  'https://picsum.photos/720/540/?image=435',
  'https://picsum.photos/720/540/?image=88',
  'https://picsum.photos/720/540/?image=512',
  'https://picsum.photos/720/540/?image=435',
  'https://picsum.photos/720/540/?image=88',
  'https://picsum.photos/720/540/?image=512',
  'https://picsum.photos/720/540/?image=435',
];

export const ScrollCarousel = () => {
  return (
    <Box>
      <ClientComponent>
        <ScrollCarousels>
          {urls.map((src, i) => (
            <Box key={`image-${i}`} h={'15rem'} w={'15rem'} mr={2}>
              <Image src={src} alt="" h={'100%'} w={'100%'} />
            </Box>
          ))}
        </ScrollCarousels>
      </ClientComponent>
    </Box>
  );
};
