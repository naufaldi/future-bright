import Gallery from '@/components/Gallery/Gallery';
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
        <Gallery />
      </Layout>
    </>
  );
}
