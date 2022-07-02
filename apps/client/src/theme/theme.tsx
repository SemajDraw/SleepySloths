import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { global } from './global';
import { colors } from './colors';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const overrides = {
  global,
  colors,
  fonts,
  breakpoints,
};

export default extendTheme(overrides);
