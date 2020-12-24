import React from 'react';
import { Flex, Grid, Heading, Text, Button, Image, Box } from '@chakra-ui/react';
const IllustrationList = [
  {
    img: 'url(/assets/landingpage/landing-1.png)',
    name: 'Landingpage 1',
    caption: 'Study case about landingpage website ',
  },
  {
    img: 'url(/assets/landingpage/landing-1.png)',
    name: 'Landingpage 1',
    caption: 'Study case about landingpage website ',
  },
  {
    img: 'url(/assets/landingpage/landing-1.png)',
    name: 'Illustration 1',
    caption: 'Study case about landingpage website ',
  },
  {
    img: 'url(/assets/landingpage/landing-1.png)',
    name: 'Landingpage 1',
    caption: 'Study case about landingpage website ',
  },
  {
    img: 'url(/assets/landingpage/landing-1.png)',
    name: 'Landingpage 1',
    caption: 'Study case about landingpage website ',
  },
  {
    img: 'url(/assets/landingpage/landing-1.png)',
    name: 'Landingpage 1',
    caption: 'Study case about landingpage website ',
  },
];
const Landingpage = () => (
  <Box w="100%" bgColor="blueice.500" minH="100vh" mt={'20rem'} position="relative">
    <Box postion="absolute" mt="-24rem">
      <Image src="/assets/wave.svg" />
    </Box>
    <Flex flexDirection="column" pt={2} pb={24} maxWidth="80em" px={10} mx="auto" mt={20}>
      <Heading as="h3" ml="auto" mr="auto" mt="2rem" mb="1rem">
        Landingpage
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mt="2.5rem" mb="2.5rem">
        {/* Item Gallery */}
        {IllustrationList.map((IllustrationLists, index) => (
          <Flex
            flexDirection="column"
            backgroundColor="white"
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
            <Text fontSize="sm" color="comet.500" mb={4}>
              {' '}
              {IllustrationLists.caption}{' '}
            </Text>
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

export default Landingpage;
