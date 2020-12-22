import React from 'react';
import { theme as chakraTheme } from '@chakra-ui/react';

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Josefin Sans,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `'Inter', sans-serif`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  colors: {
    ...chakraTheme.colors,
    brand: {
      500: '#FFCE07',
    },
    black: {
      100: '#191919',
      500: '#000000',
    },
    bluepicton: {
      500: '#52BBEF',
      600: '#00B0FF',
    },
    blueice: {
      500: '#B8FFF9',
      600: '#9EF2EB',
    },
    comet: {
      500: '#5C637C',
    },
  },
};

export default theme;
