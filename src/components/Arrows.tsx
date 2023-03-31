import Arrow from '@/assets/arrow.svg';

export const Arrows = () => {
  return (
    <div className="relative h-36 w-full p-14 mt-10 xl:p-4">
      <Arrow className="w-14 sm:w-20 fill-white absolute top-8 sm:top-14 left-1/2 -translate-x-1/2 rotate-90 -translate-y-1/2" />
      <Arrow className="w-14 sm:w-20 fill-cyan-400 absolute top-0 left-1/2 -translate-x-1/2 rotate-90 -translate-y-1/2" />
    </div>
  );
};
