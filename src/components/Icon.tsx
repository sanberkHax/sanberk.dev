import { ICON_PATHS } from '@/constants/ICON_PATHS';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { ReactElement } from 'react';

export type IconVariants =
  | 'html'
  | 'js'
  | 'ts'
  | 'next'
  | 'css'
  | 'sass'
  | 'react'
  | 'jest'
  | 'figma'
  | 'ps'
  | 'git'
  | 'webpack'
  | 'npm'
  | 'twitter'
  | 'gmail'
  | 'github'
  | 'firebase'
  | 'linkedin'
  | 'redux';

interface Props {
  name: IconVariants;
  link?: string;
  isAnimated?: boolean;
  delay?: number;
  className?: string;
  size?: number;
}

const paths: Record<IconVariants, ReactElement> = ICON_PATHS;

export const Icon = ({
  link = '',
  isAnimated = true,
  delay,
  name,
  className,
  size = 14,
  ...props
}: Props) => {
  const iconPath = paths[name];

  if (!isAnimated) {
    return (
      <Link href={link}>
        <svg className={className} viewBox="0 0 128 128">
          {iconPath}
        </svg>
      </Link>
    );
  }

  return (
    <Link href={link}>
      <motion.svg
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{ delay }}
        className={`w-14 h-14 sm:w-24 sm:h-24 fill-white`}
        viewBox="0 0 128 128"
      >
        {iconPath}
      </motion.svg>
    </Link>
  );
};
