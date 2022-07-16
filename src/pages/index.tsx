import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  return (
    <>
      <Head>
        <title>Game Night | ddot.gg</title>
        <meta name="description" content="A ddot.gg Hobby Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-slate-500">
        {hello.data ? <p className="text-center text-white text-4xl">{hello.data.greeting}</p> : <p>Loading...</p>}
      </div>
    </>
  );
};

export default Home;
