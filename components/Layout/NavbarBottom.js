import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import Home from '../Icons/Home';
import Gallery from '../Icons/Gallery';
import Contact from '../Icons/Contact';

const App = () => (
  <Box position="fixed" right="0" left="0" bottom="0" bgColor="white" boxShadow="shadow-top">
    <Flex justifyContent="space-around" alignItems="center" pl="1rem" pr="1rem" color="comet.400">
      <Link
        px={5}
        pt={3}
        pb={2}
        fontSize="sm"
        display="flex"
        alignItems="center"
        flexDirection="column"
        borderTop={3}
        borderStyle="solid"
        borderColor="brand.500"
      >
        <Home boxSize={5} />
        Home
      </Link>
      <Link
        pt={3}
        pb={2}
        px={5}
        fontSize="sm"
        display="flex"
        alignItems="center"
        flexDirection="column"
        borderTop={3}
        borderStyle="solid"
        borderColor="brand.500"
      >
        <Gallery boxSize={5} />
        Gallery
      </Link>
      <Link
        px={5}
        pt={3}
        pb={2}
        fontSize="sm"
        display="flex"
        alignItems="center"
        flexDirection="column"
        borderTop={3}
        borderStyle="solid"
        borderColor="brand.500"
      >
        <Contact boxSize={5} />
        Contact
      </Link>
    </Flex>
  </Box>
);

export default App;
