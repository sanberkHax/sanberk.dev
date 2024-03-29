import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: Props) => {
  return (
    <div
      className={`relative p-4 sm:p-6 before:absolute before:-bottom-2 before:-right-2 before:h-8 before:w-8 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-8 after:w-8 after:border-t after:border-l after:border-cyan-300 border-cyan-300 before:border-cyan-300 after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+32px)] hover:before:w-[calc(100%+32px)] hover:after:h-[calc(100%+32px)] hover:after:w-[calc(100%+32px)] border flex gap-4 flex-col ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};
