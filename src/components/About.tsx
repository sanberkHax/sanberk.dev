import { Card } from './Card';
import { Typography } from './Typography';

export const About = () => {
  return (
    <section
      id="about"
      className="flex gap-10 flex-col justify-center items-center h-screen w-full text-white "
    >
      <Typography variant="h2" bold>
        About Me
      </Typography>

      <Card>
        <Typography variant="body">
          {`Hi, I'm a Front End Developer who is motivated by the passion for
          learning new things and strive to outdo myself. The more problems I
          encounter, the more ambitious I get to solve them. That's why I like
          tough challenges I might fail in, as failure is the best way to learn
          and overcome something.`}
        </Typography>
        <Typography variant="body">
          When I was first introduced to Front End Development in 2021, I
          immediately knew this was the path I wanted to dedicate my time and
          effort into, as this was the perfect combination of my logical and
          creative sides. And combination of both is my shortcut to happiness.
        </Typography>
        <Typography variant="body">
          {`I'm interested in working on creative and ambitious projects that are
          accessible to anyone.`}
        </Typography>
      </Card>
    </section>
  );
};
