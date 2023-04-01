import React from 'react';
import { Card } from './Card';
import { Typography } from './Typography';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from './Icon';

type Props = {
  title: string;
  description: string;
  image?: string;
  alt?: string;
  link?: string;
  card?: boolean;
};

export const Project = ({
  title,
  description,
  image,
  alt = '',
  link = '',
  card = true,
}: Props) => {
  if (!card) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center justify-between border-b-[1px] py-3 border-white">
          <Typography variant="h3" bold className="text-[#00E0FF] z-10">
            {title}
          </Typography>
          <Link
            href={link}
            className="border-2 border-cyan-400 p-2 rounded-md hover:bg-sky-600 hover:border-sky-600 w-fit text-center z-10"
          >
            Repository
          </Link>
        </div>
        <Typography variant="body" className="z-10">
          {description}
        </Typography>
      </div>
    );
  }
  return (
    <div className="flex-1 flex flex-col gap-10 items-center my-10">
      <Card>
        <Typography variant="h3" bold className="text-[#00E0FF] z-10">
          {title}
        </Typography>
        <Typography variant="body" className="z-10">
          {description}
        </Typography>
        {image && (
          <div className="flex justify-center items-center">
            <Image src={`/${image}`} width={500} height={300} alt={alt} />
          </div>
        )}
      </Card>
      <Link
        href={link}
        className="border-2 border-cyan-400 p-2 rounded-md hover:bg-sky-600 hover:border-sky-600"
      >
        Details
      </Link>
    </div>
  );
};
