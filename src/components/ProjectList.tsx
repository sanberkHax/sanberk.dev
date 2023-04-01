import Image from 'next/image';
import { Card } from './Card';
import { Typography } from './Typography';
import { Project } from './Project';

export const ProjectList = () => {
  return (
    <section className="flex gap-10 sm:gap-24 flex-col justify-center items-center min-h-screen w-full text-white sm">
      <Typography variant="h2" bold>
        Projects
      </Typography>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-stretch gap-24 lg:gap-16 xl:gap-24 text-center">
        <Project
          title="Stack Organizer"
          description="A helpful web application that lets developers organize their
              Stack Overflow questions."
          alt="Stack Organizer Front Page"
          image="stack-organizer-login.png"
          page="stack-organizer"
        />
        <Project
          title="Real Store"
          description="E-commerce store made with Next.js, Redux, Tailwind, TypeScript
          and Fake Store API."
          alt="Real Store Front Page"
          image="real-store.png"
          page="real-store"
        />
      </div>
    </section>
  );
};
