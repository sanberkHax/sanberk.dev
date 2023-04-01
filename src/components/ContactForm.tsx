import { motion } from 'framer-motion';
import { Button } from './Button';

export const ContactForm = () => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <motion.form
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 30, duration: 0.6 }}
      viewport={{ once: true }}
      name="contact-form"
      className="flex flex-col gap-10 justify-center w-full text-black"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={submitHandler}
    >
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="contact-form" />
      <label htmlFor="name" className="text-white">
        Name
      </label>
      <motion.input
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 30,
          duration: 0.6,
          delay: 0.2,
        }}
        viewport={{ once: true }}
        className="w-1/2 h-10 px-2"
        type="text"
        name="name"
        required
      />
      <label htmlFor="email" className="text-white">
        E-Mail
      </label>
      <motion.input
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 30,
          duration: 0.6,
          delay: 0.3,
        }}
        viewport={{ once: true }}
        className="w-1/2 h-10 px-2"
        name="email"
        type="email"
        required
      />
      <label htmlFor="message" className="text-white">
        Message
      </label>
      <motion.textarea
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 30,
          duration: 0.6,
          delay: 0.4,
        }}
        viewport={{ once: true }}
        className="w-1/2 h-24 px-2"
        name="message"
        required
      />
      <Button variant="sm" className="w-1/2">
        Send
      </Button>
    </motion.form>
  );
};
