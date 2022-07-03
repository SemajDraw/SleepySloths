import { Box, Image } from '@chakra-ui/react';
import { useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Flex } from 'ui';

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
  'https://picsum.photos/720/540/?image=88',
  'https://picsum.photos/720/540/?image=512',
  'https://picsum.photos/720/540/?image=435',
];

export const ScrollCarousel = () => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [-2000, 1000]);
  const [x, setX] = useState(-2000);

  useEffect(() => yRange.onChange((v) => setX(v)), [yRange]);

  return (
    <Flex
      initial={{ x }}
      animate={{
        x,
        transition: {
          type: 'spring',
          stiffness: 200,
          damping: 100,
          mass: 0.5,
          delay: 0,
        },
      }}
      w={'3900px'}
    >
      {urls.map((src, i) => (
        <Box key={`image-${i}`} h={'250px'} w={'250px'} mr={'10px'}>
          <Image src={src} alt="" h={'100%'} w={'100%'} borderRadius={10} />
        </Box>
      ))}
    </Flex>
  );
};
