import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from '../components/Header';
import UpcomingEvent from '../components/events/UpcomingEvent';

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
          <PageHeader title="Create" />
          <div className="px-4"></div>
        </>
      </Layout>
    </>
  );
};

export default Create;
