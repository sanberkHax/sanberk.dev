import React from 'react';
import { Typography } from './Typography';
import { IconList } from './IconList';

export const Technologies = () => {
  return (
    <section className="flex gap-24 flex-col justify-center text-center items-center h-screen w-full text-white">
      <Typography variant="h2" bold>
        I have experience with...
      </Typography>
      <div className=" flex flex-col gap-14 justify-center items-center">
        <div className="flex flex-col gap-10">
          <Typography variant="h3" bold underline>
            Development
          </Typography>
          <IconList type="development" />
        </div>
        <div className="flex w-full justify-around gap-10 lg:gap-36">
          <div className="flex flex-col gap-10 flex-1">
            <Typography variant="h3" bold underline>
              Design
            </Typography>
            <IconList type="design" />
          </div>
          <div className="flex flex-col gap-10 flex-1">
            <Typography variant="h3" bold underline>
              Tools
            </Typography>
            <IconList type="tools" />
          </div>
        </div>
      </div>
    </section>
  );
};
