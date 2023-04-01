import { Typography } from './Typography';
import { Project } from './Project';
import { Card } from './Card';
import { OLD_PROJECTS } from '@/constants/OLD_PROJECTS';
import { TOP_PROJECTS } from '@/constants/TOP_PROJECTS';

export const ProjectList = () => {
  return (
    <section className="flex gap-10 sm:gap-36 flex-col justify-center items-center min-h-screen w-full text-white sm">
      <div>
        <Typography variant="h2" bold className="text-center">
          Top Projects
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-stretch gap-24 lg:gap-16 xl:gap-24 text-center">
          {TOP_PROJECTS.map((project, i) => (
            <Project
              key={i}
              title={project.title}
              image={project.image}
              alt={project.alt}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Typography variant="h2" bold className="text-center">
          Old Projects
        </Typography>
        <Card className="gap-14 sm:p-10">
          {OLD_PROJECTS.map((project, i) => (
            <Project
              key={i}
              title={project.title}
              description={project.description}
              link={project.link}
              card={false}
            />
          ))}
        </Card>
      </div>
    </section>
  );
};
