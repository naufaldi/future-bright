import React from 'react';
import {
  Flex,
  Image,
  Link,
  Grid,
  Heading,
  Text,
  Button,
  Box,
  Icon,
  GridItem,
} from '@chakra-ui/react';
import Twitter from '@/components/Icons/Twitter';
import Tiktok from '@/components/Icons/Tiktok';
import Facebook from '@/components/Icons/Facebook';
import Instagram from '@/components/Icons/Instagram';
import { motion } from 'framer-motion';

const MotionIcon = motion.custom(Box);
const MotionArrow = motion.custom(Flex);

const Header = () => (
  <Box w="100%" bgColor="blueice.500" minH={{ lg: '100vh' }}>
    <Flex flexDirection="column" ml="auto" mr="auto" maxWidth="80em" px={10} pb={10}>
      <Flex justifyContent="space-between" width="100%" pt="30px" pb="30px" alignItems="center">
        <Image src="/assets/bright.svg" alt="Logo Bright" />
        <Flex justifyContent="flex-start" alignItems="center">
          <Flex
            pl="14px"
            pr="14px"
            width="5/12"
            fontFamily="Inter"
            color="comet.400"
            fontSize={{ md: 'base', lg: '1.125rem' }}
            textTransform="capitalize"
          >
            <Link px={[2, 2, 4, 4]} mx={[1, 1, 2, 2]} color="black.500" fontWeight="500">
              Home
            </Link>
            <Link px={[2, 2, 4, 4]} mx={[1, 1, 2, 2]}>
              Services
            </Link>
            <Link px={[2, 2, 4, 4]} mx={[1, 1, 2, 2]}>
              Portofolio
            </Link>
            <Link px={[2, 2, 4, 4]} mx={[1, 1, 2, 2]}>
              Contact
            </Link>
          </Flex>
          <Button
            variant="solid"
            display="flex"
            size={{ sm: 'md', lg: 'lg' }}
            h="auto"
            fontSize={{ sm: '0.875rem', lg: '1rem' }}
            borderRadius="25px"
            py={[2, 3, 4, 4]}
            px={[5, 5, 10, 10]}
            border="1px"
            bgColor="transparent"
            borderColor="black.100"
            fontFamily="Josefin"
            fontWeight="600"
            _hover={{ bg: 'brand.300', borderColor: 'brand.300', color: 'black.100' }}
          >
            Let’s Talk
          </Button>
        </Flex>
      </Flex>
      <Grid templateColumns="repeat(12, 1fr)" gap={[3, 3, 6, 6]} pt="32px" pb="32px">
        <GridItem flexDirection="column" alignItems="flex-start" colSpan={[7, 7, 5, 5]}>
          <Heading as="h1" fontSize={{ md: '4xl', lg: '4.375rem' }} fontWeight="700">
            We help our user to build their business
          </Heading>
          <Text fontSize={{ sm: 'md', lg: 'lg' }} my="6" color="comet.400">
            Augue interdum velit euismod in pellentesque massa placerat. Ligula ullamcorper
            malesuada proin libero nunc consequat interdum varius sit.{' '}
          </Text>
          <Button
            variant="solid"
            display="flex"
            h="auto"
            size={{ sm: 'md', lg: 'lg' }}
            h="auto"
            fontSize={{ sm: '0.875rem', lg: '1rem' }}
            borderRadius="25px"
            py={[2, 3, 4, 4]}
            px={[5, 5, 10, 10]}
            bgColor="brand.300"
            border="1px"
            borderColor="brand.300"
            fontFamily="Josefin"
            fontWeight="600"
            _hover={{ bg: 'brand.500', borderColor: 'brand.500', color: 'black.100' }}
          >
            See Work
          </Button>
        </GridItem>
        <GridItem colSpan={[5, 5, 7, 7]}>
          <Image height="auto" width="100%" src="/assets/illustration-home.png" />
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(12,minmax(0,1fr))" gap={[3, 3, 6, 6]}>
        <GridItem colSpan={[4, 4, 5, 5]} alignItems="center" display="flex">
          <Box
            borderTop="1px"
            borderColor="comet.300"
            borderStyle="dashed"
            w={{ sm: '90%', lg: '100%' }}
          ></Box>
        </GridItem>
        <GridItem colSpan={2} display="flex" justifyContent="center" alignItems="center">
          <MotionIcon mx="2" whileHover={{ y: '-20%' }}>
            <Twitter boxSize={7} alignItems="center" />
          </MotionIcon>
          <MotionIcon mx="2" whileHover={{ y: '-20%' }}>
            <Facebook boxSize={7} alignItems="center" />
          </MotionIcon>
          <MotionIcon mx="2" whileHover={{ y: '-20%' }}>
            <Instagram boxSize={7} alignItems="center" />
          </MotionIcon>
          <MotionIcon mx="2" whileHover={{ y: '-20%' }}>
            <Tiktok boxSize={7} alignItems="center" />
          </MotionIcon>
        </GridItem>
        <GridItem colSpan={[4, 4, 5, 5]} alignItems="center" display="flex">
          <Box
            borderTop="1px"
            borderColor="comet.300"
            borderStyle="dashed"
            ml="auto"
            w={{ sm: '90%', lg: '100%' }}
          ></Box>
        </GridItem>
      </Grid>
      <Box position="relative" w="100%" mt={6}>
        <MotionArrow
          alignContent="flex-start"
          w="auto"
          position="absolute"
          maxW={40}
          _hover={{
            cursor: 'pointer',
          }}
          whileHover={{
            y: -20,
            transition: {
              ease: 'easeInOut',
              duration: 0.4,
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
        >
          <Image src="/assets/arrow-button.svg" />
          <Text fontSize="base" color="comet.400">
            Scroll Down
          </Text>
        </MotionArrow>
      </Box>
    </Flex>
  </Box>
);

export default Header;
