import React from 'react';
import { Card } from './Card';
import { Typography } from './Typography';
import Image from 'next/image';
import { Button } from './Button';

type Props = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const Project = ({ title, description, image, alt }: Props) => {
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
      <Button variant="sm" className="w-1/4">
        Details
      </Button>
    </div>
  );
};
