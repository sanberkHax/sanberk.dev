import React from 'react';
import { Card } from './Card';
import { Typography } from './Typography';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  image: string;
  alt: string;
  page: string;
};

export const Project = ({ title, description, image, alt, page }: Props) => {
  return (
    <div className="flex-1 flex flex-col gap-10 items-center my-10">
      <Card>
        <Typography variant="h3" bold className="text-[#00E0FF]">
          {title}
        </Typography>
        <Typography variant="body">{description}</Typography>
        <div className="flex justify-center items-center">
          <Image src={`/${image}`} width={500} height={300} alt={alt} />
        </div>
      </Card>
      <Link
        href={page}
        className="border-2 border-cyan-400 p-2 rounded-md hover:bg-sky-600 hover:border-sky-600"
      >
        Details
      </Link>
    </div>
  );
};
