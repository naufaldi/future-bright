import Layout from '@/components/Layout/Layout';
import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Future Bright</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Flex>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, et quis! Vero est maxime
          laborum necessitatibus accusamus? Atque, distinctio laborum quos possimus accusantium
          nemo! Necessitatibus dolor amet corrupti hic voluptas.
        </Flex>
      </Layout>
    </>
  );
}
