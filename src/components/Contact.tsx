import { ContactForm } from './ContactForm';
import { Typography } from './Typography';

export const Contact = () => {
  return (
    <section className="flex gap-10 sm:gap-24 flex-col justify-center items-center min-h-screen w-full text-white sm">
      <Typography variant="h2" bold>
        Contact Me
      </Typography>
      <ContactForm />
    </section>
  );
};
