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
          <PageHeader title="GN / Events" />
          <div className="px-4">
            <h1 className="text-center py-6 text-[#FFA552] text-5xl drop-shadow-md">Upcoming Events</h1>
            <UpcomingEvent
              eventTitle="Event Title Placeholder"
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
