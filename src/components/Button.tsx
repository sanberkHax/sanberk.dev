import Link from 'next/link';
import React from 'react';

type Variant = 'sm' | 'md' | 'lg';

interface Props {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  link?: string;
}

const commonStyles =
  'bg-transparent border-2 border-cyan-300 rounded-lg text-white hover:bg-sky-600 hover:border-sky-600';

const sizes: Record<Variant, string> = {
  sm: `p-2 sm:px-4 text-sm sm:text-md`,
  md: 'py-2 px-4 sm:px-6 text-md sm:text-lg',
  lg: 'py-2 px-6 sm:px-8 text-lg sm:text-xl',
};

export const Button = ({
  variant,
  children,
  className,
  link,
  ...props
}: Props) => {
  const sizeClasses = sizes[variant];

  if (link) {
    return (
      <Link
        href={link}
        className="text-white border-2 border-cyan-400 p-2 rounded-md hover:bg-sky-600 hover:border-sky-600 w-fit text-center z-10"
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${sizeClasses} ${commonStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
