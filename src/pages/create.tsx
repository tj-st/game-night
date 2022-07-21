import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from '../components/Header';
import CreateEvent from '../components/events/CreateEvent';

const Create: NextPage = () => {
  return (
    <>
      <Head>
        <title>Game Night | Create a Game Night</title>
        <meta name="description" content="A ddot.gg Hobby Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <CreateEvent />
          <div className="px-4"></div>
        </>
      </Layout>
    </>
  );
};

export default Create;
