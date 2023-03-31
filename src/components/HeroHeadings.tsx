import { Typography } from './Typography';

export const HeroHeadings = () => {
  return (
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
  );
};
