import Arrow from '@/assets/arrow.svg';
import { Button } from './Button';
import { Typography } from './Typography';

export const Hero = () => {
  return (
    <section className="flex flex-col justify-around items-center gap-20 smgap-24">
      <div className="relative text-white flex flex-col gap-4 sm:gap-10 justify-center items-center">
        <Typography
          variant="body"
          className="absolute left-1/4 sm:-left-14 -top-10 animate-slideReveal"
        >
          {`Hi there, I'm`}
        </Typography>
        <Typography
          variant="h1"
          underline
          bold
          className="text-sm md:text-6xl animate-slideReveal delay-400"
        >
          {` Sanberk Türker`}
        </Typography>
        <Typography variant="body" bold className="animate-slideReveal">
          <span className="text-[#00E0FF]">{'< '}</span>
          Frontend Developer
          <span className="text-[#00E0FF]">{' />'}</span>
        </Typography>
      </div>
      <Button variant="md" className="animate-slideReveal">
        Contact Me
      </Button>
      <div className="relative h-10 w-full mt-6 ">
        <Arrow className="w-14 sm:w-20 fill-white absolute top-8 sm:top-14 left-1/2 -translate-x-1/2 rotate-90 -translate-y-1/2" />
        <Arrow className="w-14 sm:w-20 fill-cyan-400 absolute top-0 left-1/2 -translate-x-1/2 rotate-90 -translate-y-1/2" />
      </div>
    </section>
  );
};
