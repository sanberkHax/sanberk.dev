import Image from 'next/image';
import { Button } from './Button';
import { HeroHeadings } from './HeroHeadings';

export const Hero = () => {
  return (
    <section className="flex justify-center  items-center flex-col lg:flex-row gap-10 sm:gap-4 xl:gap-24">
      <Image
        src="/portfolioImage.png"
        width={900}
        height={900}
        alt="Sanberk's photo"
        className="w-[300px] sm:w-[400px] md:w-[500px]"
      />
      <div className="flex flex-col justify-around items-center gap-10">
        <HeroHeadings />
        <Button variant="md" className="animate-slideReveal">
          Contact Me
        </Button>
      </div>
    </section>
  );
};
