import { Hero } from '@/components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sanberk Türker - Frontend Developer</title>
        <meta name="description" content="Personal website of Sanberk Türker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b from-[#005687] to-[#00112C] h-screen flex flex-col justify-center w-full p-2 sm:p-24 gap-10 items-center">
        <Hero />
      </main>
    </>
  );
}
