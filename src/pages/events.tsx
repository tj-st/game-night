import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from '../components/Header';
import UpcomingEvent from '../components/events/UpcomingEvent';

const Events: NextPage = () => {
  return (
    <>
      <Head>
        <title>Game Night | Events</title>
        <meta name="description" content="A ddot.gg Hobby Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <div className="p-4 max-w-fit">
            <UpcomingEvent
              eventTitle="Example Event Name"
              eventDate="2020-01-01"
              eventGame="CSGO"
              eventPlatform="PC"
              eventVoice="Discord"
            />
          </div>
        </>
      </Layout>
    </>
  );
};

export default Events;
