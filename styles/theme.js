import React from 'react';
import { theme as chakraTheme } from '@chakra-ui/react';

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Josefin Sans,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `'Inter', sans-serif`,
    Inter: `'Inter', sans-serif`,
    Josefin: `'Josefin Sans', sans-serif`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  colors: {
    ...chakraTheme.colors,
    brand: {
      300: '#ffeb9c',
      400: '#ffdd51',
      500: '#FFCE07',
      600: '#e6b906',
    },
    black: {
      50: '#3F4346',
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
      300: '#bec1cb',
      400: '#7e869f',
      500: '#5C637C',
      600: '#52545C',
      700: '#9799a2',
    },
  },
  variants: {
    'shadow-blueice': {
      boxShadow: '0px 4px 12px #B8FFF9',
    },
  },
};

export default theme;
