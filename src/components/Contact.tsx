import { ContactForm } from './ContactForm';
import { Typography } from './Typography';

export const Contact = () => {
  return (
    <section
      className="flex gap-8 sm:gap-14 flex-col justify-center items-center min-h-screen w-full text-white sm"
      id="contact-me"
    >
      <Typography variant="h2" bold>
        Contact Me
      </Typography>
      <ContactForm />
    </section>
  );
};
