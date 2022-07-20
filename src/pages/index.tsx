import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Game Night | ddot.gg</title>
        <meta name="description" content="A ddot.gg Hobby Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <PageHeader />
          <div className="px-4">
            <h1 className="uppercase py-6 text-[#FFA552] text-5xl font-bold drop-shadow-md">Upcoming Events</h1>
            <div className="flex-col rounded-2xl bg-[#222222] p-6">
              <div className="flex items-center pb-4">
                <h1 className="font-bold text-5xl mr-6 text-[#88C6B7] uppercase">Event Title Placeholder</h1>
                <div className="p-3 text-2xl text-black rounded-md ml-auto bg-[#FFA552]">Edit Event</div>
              </div>
              <div className="pb-4">
                <h1 className="text-3xl text-orange-200 pb-2 uppercase font-bold drop-shadow-sm">Event Details</h1>
                <div className="font-mono text-xl text-white">
                  <p>Game: CSGO</p>
                  <p>When: Thursday July 21st, 2022</p>
                  <p>Platform: PC</p>
                  <p>Voice: Discord</p>
                </div>
              </div>
              <div>
                <h1 className="text-3xl text-orange-200 pb-2 uppercase font-bold drop-shadow-sm">Invited Players</h1>
                <div className="flex">
                  <div className="aspect-square h-32 w-32 bg-[#323232] mr-4 rounded-lg"></div>
                  <div className="aspect-square h-32 w-32 bg-[#323232] mr-4 rounded-lg"></div>
                  <div className="aspect-square h-32 w-32 bg-[#323232] mr-4 rounded-lg"></div>
                  <div className="aspect-square h-32 w-32 bg-[#323232] mr-4 rounded-lg"></div>
                  <div className="aspect-square h-32 w-32 bg-[#323232] mr-4 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Layout>
    </>
  );
};

export default Home;
