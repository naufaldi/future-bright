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
      py={[24, 40]}
      px={[6, 12]}
      minH={{ base: '30vh', sm: '50vh' }}
      maxW="48em"
    >
      <Heading
        as="h1"
        fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}
        fontWeight="700"
        textAlign="center"
      >
        Any project in mind???
      </Heading>
      <Text
        fontFamily="Josefin"
        fontSize={{ base: 'md', lg: 'lg' }}
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
        fontSize={{ base: '4xl', lg: '5xl' }}
        fontWeight="700"
      >
        Let’s Talk
      </Link>
    </Flex>
  );
};

export default CallToAction;
