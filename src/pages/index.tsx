import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { ProjectList } from '@/components/ProjectList';
import { Technologies } from '@/components/Technologies';
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
      <main className="bg-gradient-to-b from-[#005687] to-[#00112C] min-h-screen flex flex-col justify-center w-full p-2 sm:px-12 md:px-18 lg:px-24 xl:px-36 2xl:px-48 gap-96 items-center">
        <Hero />
        <About />
        <Technologies />
        <ProjectList />
        <Contact />
      </main>
    </>
  );
}
