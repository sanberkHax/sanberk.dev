import { ICONS } from '@/constants/ICONS';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { ReactElement } from 'react';

export type IconVariants =
  | 'Linkedin'
  | 'HTML'
  | 'CSS'
  | 'JavaScript'
  | 'TailwindCSS'
  | 'TypeScript'
  | 'NextJS'
  | 'React'
  | 'Redux'
  | 'ReactTestingLibrary'
  | 'Figma'
  | 'Photoshop'
  | 'Git'
  | 'Twitter'
  | 'Blender'
  | 'GitHub'
  | 'Gmail'
  | 'Webpack'
  | 'NPM'
  | 'Sass'
  | 'Firebase'
  | 'Vite';

interface Props {
  name: IconVariants;
  link?: string;
  delay?: number;
  className?: string;
  size?: 'sm' | 'md';
  tooltip?: boolean;
}

const icons: Record<IconVariants, ReactElement> = ICONS;

export const Icon = ({ link = '', delay, name, tooltip = false }: Props) => {
  const icon = icons[name];

  if (!link) {
    return (
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={tooltip ? 'relative group' : ''}
      >
        {icon}
        {tooltip && (
          <span
            className="group-hover:opacity-100 group-hover:inline-block hidden transition-opacity border-2 border-sky-800 bg-white z-10 text-black p-2 text-md  rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-1/4 font-bold opacity-0 m-4 mx-auto"
          >
            {name}
          </span>
        )}
      </motion.div>
    );
  }

  return (
    <Link href={link} target="__blank">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={tooltip ? 'relative group' : ''}
      >
        {icon}
        {tooltip && (
          <span
            className="group-hover:opacity-100 group-hover:inline-block hidden transition-opacity border-2 border-sky-800 bg-white z-10 text-black p-2 text-md  rounded-md absolute left-1/2 
            -translate-x-1/2 translate-y-1/4 font-bold opacity-0 m-4 mx-auto"
          >
            {name}
          </span>
        )}
      </motion.div>
    </Link>
  );
};
