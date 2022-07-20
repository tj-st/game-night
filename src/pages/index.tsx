import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Game Night | Home</title>
        <meta name="description" content="A ddot.gg Hobby Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <PageHeader title="GAME NIGHT" />
        </>
      </Layout>
    </>
  );
};

export default Home;
