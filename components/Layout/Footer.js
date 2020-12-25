import { Box, Flex, Grid, GridItem, List, ListItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Brand from '../Icons/Brand';
import Twitter from '@/components/Icons/Twitter';
import Tiktok from '@/components/Icons/Tiktok';
import Facebook from '@/components/Icons/Facebook';
import Instagram from '@/components/Icons/Instagram';
import { motion } from 'framer-motion';

const MotionIcon = motion.custom(Box);
const Footer = () => {
  return (
    <Box w="100%" bgColor="black.500" minH={'30vh'}>
      <Grid
        w={'100%'}
        mx="auto"
        maxWidth="80em"
        px={10}
        pt={[12, 24, 24, 24]}
        pb={[8, 12, 12, 24]}
        templateColumns="repeat(12,1fr)"
        templateRows="auto"
        textColor="white"
        gap={[2, 0, null, null]}
      >
        <GridItem colSpan={2} display="flex" flexDirection="column">
          <Brand
            src="/assets/bright.svg"
            alt="Logo Bright"
            color="white"
            w={32}
            h={[20, 20, 20, 24]}
          />
          <Flex justifyContent="flex-start" alignItems="center" mt={4}>
            <MotionIcon mx="2" whileHover={{ y: '-20%' }}>
              <Twitter boxSize={[5, 5, 5, 7]} alignItems="center" />
            </MotionIcon>
            <MotionIcon mx="2" whileHover={{ y: '-20%' }}>
              <Facebook boxSize={[5, 5, 5, 7]} alignItems="center" />
            </MotionIcon>
            <MotionIcon mx="2" whileHover={{ y: '-20%' }}>
              <Instagram boxSize={[5, 5, 5, 7]} alignItems="center" />
            </MotionIcon>
            <MotionIcon mx="2" whileHover={{ y: '-20%' }}>
              <Tiktok boxSize={[5, 5, 5, 7]} alignItems="center" />
            </MotionIcon>
          </Flex>
        </GridItem>
        <GridItem
          colSpan={[6, 2, null, null]}
          colStart={[1, 5, null, null]}
          display="flex"
          flexDirection="column"
          rowStart={[2, 1, 1, 1]}
        >
          <Text
            color="comet.700"
            fontSize={{ sm: 'md', lg: 'xl' }}
            fontWeight="700"
            mt={[8, null, null, null]}
            mb={[2, 6, null, null]}
          >
            Home
          </Text>
          <List fontSize={{ sm: 'sm', lg: 'md' }}>
            <ListItem my={2}>About Us</ListItem>
            <ListItem my={2}>Download</ListItem>
            <ListItem my={2}>Pricing</ListItem>
            <ListItem my={2}>Feedback</ListItem>
            <ListItem my={2}>Contact</ListItem>
          </List>
        </GridItem>
        <GridItem
          colSpan={[6, 2, null, null]}
          colStart={[7, 7, null, null]}
          display="flex"
          flexDirection="column"
          rowStart={[2, 1, 1, 1]}
        >
          <Text
            color="comet.700"
            fontSize={{ sm: 'md', lg: 'xl' }}
            fontWeight="700"
            mt={[8, null, null, null]}
            mb={[2, 6, null, null]}
          >
            Services
          </Text>
          <List fontSize={{ sm: 'sm', lg: 'md' }}>
            <ListItem my={2}>How It Work</ListItem>
            <ListItem my={2}>Why Us</ListItem>
            <ListItem my={2}>Team</ListItem>
            <ListItem my={2}>Blog</ListItem>
            <ListItem my={2}>Subscribe</ListItem>
          </List>
        </GridItem>
        <GridItem
          colSpan={[12, 2, null, null]}
          colStart={[1, 10, null, null]}
          rowStart={[3, 1, 1, 1]}
          display="flex"
          flexDirection="column"
        >
          <Text
            color="comet.700"
            fontSize={{ sm: 'md', lg: 'xl' }}
            fontWeight="700"
            mt={[8, null, null, null]}
            mb={[2, 6, null, null]}
          >
            Contact
          </Text>
          <List fontSize={{ sm: 'sm', lg: 'md' }}>
            <ListItem my={2}>Phn : 000 2374 8392 6483</ListItem>
            <ListItem my={2}>Email : yourinfo@gmail.com</ListItem>
            <ListItem my={2}></ListItem>
            <ListItem my={2}>Add : Celefoniya, USA</ListItem>
          </List>
        </GridItem>
        <GridItem
          rowStart={[4, 2, null, null]}
          colSpan={12}
          pt={[6, 12, null, null]}
          mt={[6, 12, null, null]}
          borderTop={1}
          borderColor="comet.400"
          borderStyle="solid"
        >
          <Text color="white" mx="auto" textAlign="center" w="auto">
            Copyright2020 Bright .All Rights Reserve.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
