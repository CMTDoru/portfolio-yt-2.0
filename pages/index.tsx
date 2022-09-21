/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Revan's Portfolio</title>
      </Head>

      <h1 className="p-10 text-red-500">Lets build an AWESOME portfolio</h1>
    </div>
  );
};

export default Home;
