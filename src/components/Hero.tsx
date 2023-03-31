import Arrow from '@/assets/arrow.svg';
import { Button } from './Button';
import { Typography } from './Typography';

export const Hero = () => {
  return (
    <section className="flex flex-col justify-around items-center gap-24">
      <div className="relative py-10 sm:py-14 text-white">
        <Typography
          variant="body"
          className="absolute -left-14 top-0 animate-slideReveal"
        >
          {`Hi there, I'm`}
        </Typography>
        <Typography
          variant="h1"
          underline
          bold
          className="md:text-6xl animate-slideReveal delay-400"
        >{` Sanberk Türker`}</Typography>
        <Typography
          variant="body"
          bold
          className="absolute right-0 bottom-2 animate-slideReveal"
        >
          Frontend Developer
        </Typography>
      </div>
      <Button variant="md" className="animate-slideReveal">
        Contact Me
      </Button>
      <div className="relative h-10 w-full mt-6 ">
        <Arrow className="w-20 fill-white absolute top-14 left-1/2 -translate-x-1/2 rotate-90 -translate-y-1/2" />
        <Arrow className="w-20 fill-cyan-400 absolute top-0 left-1/2 -translate-x-1/2 rotate-90 -translate-y-1/2" />
      </div>
    </section>
  );
};
