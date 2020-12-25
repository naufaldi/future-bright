import React from 'react';
import { Flex, Grid, Heading, Text, Button, Box } from '@chakra-ui/react';
const IllustrationList = [
  {
    img: 'url(/assets/illustration/undraw1.svg)',
    name: 'Illustration 1',
  },
  {
    img: 'url(/assets/illustration/undraw1.svg)',
    name: 'Illustration 1',
  },
  {
    img: 'url(/assets/illustration/undraw1.svg)',
    name: 'Illustration 1',
  },
  {
    img: 'url(/assets/illustration/undraw1.svg)',
    name: 'Illustration 1',
  },
  {
    img: 'url(/assets/illustration/undraw1.svg)',
    name: 'Illustration 1',
  },
  {
    img: 'url(/assets/illustration/undraw1.svg)',
    name: 'Illustration 1',
  },
];
const Gallery = () => (
  <Box w="100%" bgColor="white" minH={{ lg: '100vh' }}>
    <Flex flexDirection="column" py={[4, 8, 12, 24]} maxWidth="80em" px={[6, 10]} mx="auto">
      <Grid
        templateColumns={{ base: 'auto', md: 'repeat(2, 1fr)' }}
        gap={6}
        pt="2.5rem"
        pb={[6, 9]}
      >
        <Flex flexDirection="column">
          <Heading as="h1" fontSize={{ base: '4xl', lg: '4.375rem' }}>
            Our Creative Works
          </Heading>
          <Text mt={[4, 8]} fontSize={{ base: 'md', lg: 'base' }}>
            Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Varius sit amet mattis
            vulputate enim nulla aliquet porttitor. Elit pellentesque habitant morbi tristique
            senectus et netus et malesuada.
          </Text>
        </Flex>
        <Flex justifyContent="center" alignItems="flex-end">
          <Button
            variant="solid"
            display="flex"
            h="auto"
            size="lg"
            fontSize="base"
            borderRadius="25px"
            py={4}
            px={10}
            bgColor="brand.500"
            border="1px"
            borderColor="brand.500"
            fontFamily="Josefin"
            fontWeight="600"
            _hover={{ bg: 'brand.300', borderColor: 'brand.300', color: 'black.100' }}
          >
            View All
          </Button>
        </Flex>
      </Grid>
      <Heading as="h3" ml="auto" mr="auto" mt={[4, 8]} mb={4}>
        Illustration
      </Heading>
      <Grid
        templateColumns={{
          sm: '',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={6}
        mt="2.5rem"
        mb="2.5rem"
      >
        {/* Item Gallery */}
        {IllustrationList.map((IllustrationLists, index) => (
          <Flex
            flexDirection="column"
            backgroundColor="#B8FFF9"
            justifyContent="center"
            alignItems="center"
            p="1.25rem"
            mb={8}
            variant="shadow-blueice"
          >
            <Box
              h={60}
              w={60}
              backgroundImage={`${IllustrationLists.img}`}
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
            />
            <Heading as="h5" size="base" mt="1.25rem" mb="1rem">
              {IllustrationLists.name}
            </Heading>
            <Box position="relative" display="flex" justifyContent="center">
              <Button
                position="absolute"
                variant="solid"
                display="flex"
                h="auto"
                size="sm"
                fontSize="sm"
                borderRadius="25px"
                py={3}
                px={8}
                bgColor="black.100"
                border="1px"
                borderColor="black.100"
                fontFamily="Josefin"
                fontWeight="600"
                textColor="brand.500"
                _hover={{ bg: 'brand.500', borderColor: 'brand.500', color: 'black.100' }}
              >
                Download
              </Button>
            </Box>
          </Flex>
        ))}
        {/* End Item Gallery */}
      </Grid>
    </Flex>
  </Box>
);

export default Gallery;
