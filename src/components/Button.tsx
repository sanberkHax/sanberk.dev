import React from 'react';

type Variant = 'sm' | 'md' | 'lg';

interface Props {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}

const commonStyles =
  'bg-transparent border-4 border-cyan-300 rounded-lg text-white hover:bg-sky-800 hover:border-slate-800';

const sizes: Record<Variant, string> = {
  sm: `p-2 sm:px-4 text-sm sm:text-md`,
  md: 'py-2 px-4 sm:px-6 text-md sm:text-lg',
  lg: 'py-2 px-6 sm:px-8 text-lg sm:text-xl',
};

export const Button = ({ variant, children, className, ...props }: Props) => {
  const sizeClasses = sizes[variant];

  return (
    <button
      className={`${sizeClasses} ${commonStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};