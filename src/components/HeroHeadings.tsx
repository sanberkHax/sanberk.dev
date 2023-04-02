import { Typography } from './Typography';

export const HeroHeadings = () => {
  return (
    <div className="relative text-white flex flex-col gap-4 sm:gap-10 justify-center items-center">
      <Typography
        variant="body"
        className="absolute sm:-left-14 -top-10"
        // animation={{
        //   initial: { opacity: 0, x: -600 },
        //   animate: { opacity: 1, x: 0 },
        //   transition: { type: 'spring', bounce: 0.2, duration: 0.6 },
        // }}
      >
        {`Hi there, I'm`}
      </Typography>
      <Typography
        variant="h1"
        underline
        bold
        className="text-sm md:text-6xl"
        // animation={{
        //   initial: { opacity: 0, x: -600 },
        //   animate: { opacity: 1, x: 0 },
        //   transition: {
        //     type: 'spring',
        //     bounce: 0.2,
        //     duration: 0.6,
        //     delay: 0.5,
        //   },
        // }}
      >
        {` Sanberk Türker`}
      </Typography>
      <Typography
        variant="body"
        bold
        className="animate-slideReveal"
        // animation={{
        //   initial: { opacity: 0, x: -600 },
        //   animate: { opacity: 1, x: 0 },
        //   transition: {
        //     type: 'spring',
        //     bounce: 0.2,
        //     duration: 0.6,
        //     delay: 1,
        //   },
        // }}
      >
        <span className="text-[#00E0FF]">{'< '}</span>
        Frontend Developer
        <span className="text-[#00E0FF]">{' />'}</span>
      </Typography>
    </div>
  );
};
