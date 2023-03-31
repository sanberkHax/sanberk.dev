import React, { ElementType } from 'react';
import { motion } from 'framer-motion';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body'
  | 'body-small'
  | 'small';

interface Props {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  underline?: boolean;
  bold?: boolean;
  animation?: object;
}

const tags: Record<Variant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  body: 'p',
  'body-small': 'p',
  small: 'span',
};

const sizes: Record<Variant, string> = {
  h1: 'text-4xl sm:text-5xl',
  h2: 'text-4xl sm:text-3xl',
  h3: 'text-3xl sm:text-2xl',
  h4: 'text-2xl sm:text-1xl',
  h5: 'text-xl sm:text-lg',
  body: 'text-lg sm:text-2xl',
  'body-small': 'text-md sm:text-sm',
  small: 'text-sm sm:text-xs',
};

export const Typography = ({
  variant,
  children,
  className,
  underline,
  bold,
  as,
  animation,
  ...props
}: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];
  const AnimatedTag = motion(Tag);

  if (animation && AnimatedTag) {
    return (
      <AnimatedTag
        className={`${sizeClasses} ${className} ${underline && 'relative'} ${
          bold && 'font-bold'
        }`}
        {...animation}
        {...props}
      >
        {children}
        {underline && (
          <span className="bg-cyan-300 absolute -bottom-2 left-0 w-full h-[3px]"></span>
        )}
      </AnimatedTag>
    );
  }
  return (
    <Tag
      className={`${sizeClasses} ${className} ${underline && 'relative'} ${
        bold && 'font-bold'
      }`}
      {...props}
    >
      {children}
      {underline && (
        <span className="bg-cyan-300 absolute -bottom-2 left-0 w-full h-[3px]"></span>
      )}
    </Tag>
  );
};
