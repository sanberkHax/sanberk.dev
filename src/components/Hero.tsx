import Image from 'next/image';
import { Button } from './Button';
import { HeroHeadings } from './HeroHeadings';
import { Arrows } from '@/components/Arrows';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section
      id="index"
      className="flex justify-center items-center flex-col h-screen gap-6 md:gap-16  lg:gap-36"
    >
      <div className="flex justify-center items-center flex-col lg:flex-row gap-10 sm:gap-4 xl:gap-24">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', bounce: 0.2, duration: 2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/portfolioImage.png"
            width={900}
            height={900}
            alt="Sanberk's photo"
            className="w-[300px] sm:w-[400px] md:w-[500px]"
          />
        </motion.div>
        <div className="flex flex-col justify-around items-center gap-10">
          <HeroHeadings />
          <Button
            variant="sm"
            link="#contact-me"
            className="text-white border-2 border-cyan-400 p-2 rounded-md hover:bg-sky-600 hover:border-sky-600 w-fit text-center z-10"
          >
            Contact Me
          </Button>
        </div>
      </div>
      <Arrows />
    </section>
  );
};
