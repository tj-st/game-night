import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from '../components/Header';

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
          <PageHeader title="Game Night" />
        </>
      </Layout>
    </>
  );
};

export default Home;
