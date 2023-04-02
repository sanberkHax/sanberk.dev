import { Icon } from './Icon';
import { Typography } from './Typography';

export const Footer = () => {
  return (
    <footer className="p-4 flex-col lg:px-10 lg:flex-row bg-cyan-300 flex justify-between items-center gap-4">
      <Typography variant="body" className="">
        Designed & Built by <b>Sanberk Türker</b>
      </Typography>
      <div className="flex gap-10">
        <Icon name="GitHub" link="https://github.com/sanberkHax" />
        <Icon
          name="Linkedin"
          link="https://www.linkedin.com/in/sanberk-turker/"
        />
        <Icon name="Twitter" link="https://twitter.com/sanberkDev" />
        <Icon name="Gmail" link="mailto:sanberk.trker@gmail.com" />
      </div>
    </footer>
  );
};
