import Gallery from '@/components/Gallery/Gallery';
import Landingpage from '@/components/Gallery/Landingpage';
import Layout from '@/components/Layout/Layout';
import NavbarBottom from '@/components/Layout/NavbarBottom';
import CallToAction from '@/components/Section/CallToAction';
import Head from 'next/head';
import { useMediaQuery } from '@chakra-ui/react';

export default function Home() {
  const [isMobile] = useMediaQuery('(max-width: 30em)');
  return (
    <>
      <Head>
        <title>Future Bright</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Gallery />
        <Landingpage />
        <CallToAction />
      </Layout>
      {isMobile && <NavbarBottom />}
    </>
  );
}
