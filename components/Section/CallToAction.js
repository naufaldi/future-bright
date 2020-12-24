import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

const CallToAction = () => {
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      mx="auto"
      direction="column"
      py={40}
      minH="50vh"
      maxW="48em"
    >
      <Heading as="h1" fontSize={{ md: '4xl', lg: '5xlrem' }} fontWeight="700">
        Any project in mind???
      </Heading>
      <Text
        fontFamily="Josefin"
        as="h1"
        fontSize={{ md: 'md', lg: 'lg' }}
        mt={6}
        mb={8}
        mx={[0, 0, 10, 0]}
        textAlign="center"
        color="comet.500"
      >
        Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Varius sit amet mattis
        vulputate enim nulla aliquet port.{' '}
      </Text>
      <Link
        textDecor="underline"
        color="brand.500"
        textTransform="capitalize"
        fontSize={{ md: '4xl', lg: '5xl' }}
        fontWeight="700"
      >
        Let’s Talk
      </Link>
    </Flex>
  );
};

export default CallToAction;
