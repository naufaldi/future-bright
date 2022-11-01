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
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <meta name="theme-color" content="#317EFB" />
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
