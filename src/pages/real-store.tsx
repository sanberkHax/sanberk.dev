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
              I chose a simple design and focused more on clean code and best
              practices.
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
                My first step was researching how real world projects are built
                from start to finish. As this was my first big project, I needed
                to learn a lot about how to plan a project.
              </Typography>
              <Typography variant="body">
                Without even touching any code, I started brainstorming what
                features I need for the Minimum Viable Product and researched
                how it can be built.
              </Typography>
              <Typography variant="body">
                After figuring out the MVP, I wanted to use an Agile methodology
                to manage the project, so decided to go with Kanban because it
                would be better for a single person project. I used Trello to
                create the Kanban board. Then broke down the MVP to small
                managable tasks backed up by user stories.
              </Typography>
            </Card>
          </div>
        </section>
        <section className="flex flex-col gap-10">
          <Typography variant="h2" className="text-center">
            Problems I have Faced
          </Typography>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-10">
              <Typography variant="h3">
                Testing with Redux & TypeScript
              </Typography>
              <Card>
                <Typography variant="body">
                  Even though {`I've`} used Firebase in my other projects
                  before, none of those projects scale was as big as this one.
                  So I spent few days how to properly integrate Firebase with
                  Automated Testing and Redux.
                </Typography>
                <Typography variant="body">
                  After dealing with bunch of small bugs, I eventually set up
                  Firebase Emulators for Automated Testing to mock Firebase
                  services in tests.
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
              This whole project was a challenge on another level but also a
              great opportunity to improve my knowledge, because stepping out of
              my comfort zone and diving right into something new is the best
              way for me to learn something.
            </Typography>
            <Typography variant="body">
              {`I've`} learned how to manage complex states with Redux and how
              to store data efficiently in database to work with.
            </Typography>
            <Typography variant="body">
              Greatly improved my knowledge on Automated Testing.
            </Typography>
            <Typography variant="body">
              Got the grasp of managing a bigger scale project from start to
              finish.
            </Typography>
            <Typography variant="body">
              And found out Stack Organizer is actually useful, because I kept
              getting lost inside multiple Stack Overflow tabs and wished I had
              built it sooner.
            </Typography>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
