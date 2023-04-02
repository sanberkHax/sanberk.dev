import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Footer } from '@/components/Footer';
import { Icon } from '@/components/Icon';
import { Typography } from '@/components/Typography';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function RealStore() {
  return (
    <>
      <Head>
        <title>Real Store</title>
        <meta name="description" content="Stack Organizer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <header className="absolute top-10 left-8 z-10">
        <Button variant="sm" link="/">
          Back
        </Button>
      </header>
      <main className="bg-gradient-to-b from-[#005687] text-white to-[#00112C] min-h-screen flex flex-col justify-center w-full py-24 px-8 sm:px-12 md:px-18 lg:p-24 xl:px-36 2xl:px-64 gap-96 items-center">
        <section className="flex justify-center items-center flex-col gap-10">
          <Typography variant="h1">Real Store</Typography>
          <Image
            priority
            src="/real-store.png"
            alt="real store screenshot"
            width={700}
            height={700}
          />
          <div className="flex gap-10">
            <Button
              link="https://github.com/sanberkHax/real-store"
              variant="sm"
            >
              Repository
            </Button>
            <Button link="https://real-store.sanberk.dev" variant="sm">
              Live Site
            </Button>
          </div>
        </section>

        <div className="flex flex-col gap-10">
          <Typography variant="h2" className="text-center">
            Purpose of The Project
          </Typography>
          <Card className="card">
            <Typography variant="body">
              I built Real Store because I wanted to study TypeScript, Next.js,
              Redux and React Testing Library combination.
            </Typography>
            <Typography variant="body">
              This was also a practice for migrating a React app to Next.js.
            </Typography>
          </Card>
        </div>
        <div className="flex flex-col gap-10 text-center">
          <Typography variant="h2">Tech Stack</Typography>
          <div className="flex flex-wrap gap-10 justify-center items-center">
            <Icon name="NextJS" tooltip />
            <Icon name="TypeScript" tooltip />
            <Icon name="Redux" tooltip />
            <Icon name="TailwindCSS" tooltip />
            <Icon name="ReactTestingLibrary" tooltip />
            <Link
              href="https://fakestoreapi.com/"
              className="text-rose-500 font-bold text-2xl"
            >
              Fake Store API
            </Link>
          </div>
        </div>
        <section className="flex flex-col gap-10 text-center">
          <Typography variant="h2">Showcase</Typography>
          <div className="grid grid-cols-1 gap-24 w-full justify-center items-center">
            <div className="flex flex-col gap-10">
              <Typography variant="h3">Desktop</Typography>
              <video controls src="/real-store-desktop.mp4"></video>
            </div>
            <div className="flex flex-col gap-10">
              <Typography variant="h3">Mobile</Typography>
              <video controls src="/real-store-mobile.mp4"></video>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-10 ">
          <Typography variant="h2" className="text-center">
            Process
          </Typography>
          <div className="flex flex-col gap-36">
            <Card>
              <Typography variant="body">
                {`This project started as a simple e-commerce test assignment for React. Then I decided to migrate it to Next.js and refactor it into a cleaner and solid project.`}
              </Typography>
              <Typography variant="body">
                I started migration process by changing the project structure
                first. Then I gradually refactored existing components and added
                new ones with appropriate tests.
              </Typography>
              <Typography variant="body">
                Previous version also had a different API provided with the
                assignment so I deleted it and integrated Fake Store API
                instead. Because it would give me more freedom to work with.
              </Typography>
            </Card>
          </div>
        </section>
        <section className="flex flex-col gap-24">
          <Typography variant="h2" className="text-center">
            Problems I have Faced
          </Typography>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-10">
              <Typography variant="h3">
                Testing with Redux Persist & TypeScript
              </Typography>
              <Card>
                <Typography variant="body">
                  Even though I have experience testing Redux applications with
                  TypeScript, this was my first time using redux-persist package
                  for persisting the Redux state in localStorage.
                </Typography>
                <Typography variant="body">
                  {`So I struggled for quite some time trying to type my test
                  utilities in compliance with redux-persist but I encountered a
                  bug where react-testing-library's helper functions kept
                  throwing type error because of redux-persist. And apparently
                  there is an open PR for this issue but it still hasn't merged
                  yet.`}
                </Typography>
              </Card>
            </div>
            <div className="flex flex-col gap-10">
              <Typography variant="h3">Stripe</Typography>
              <Card>
                <Typography variant="body">
                  I tried to integrate Stripe for the checkout process to make
                  it as close to a real world application as possible. But I
                  would have to use their own form component instead of my own.
                  And it had a lot of unnecessary fields that would confuse
                  people. So I moved on from this idea and implemented my own
                  components instead.
                </Typography>
              </Card>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-10 my-56">
          <Typography variant="h2" className="text-center">
            What I have Learned
          </Typography>
          <Card>
            <Typography variant="body">
              This project has helped me learn more about TypeScript and
              practice usage with Redux and Testing.
            </Typography>
            <Typography variant="body">
              I also learned how to migrate a React project to Next.js.
            </Typography>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
