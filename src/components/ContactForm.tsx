import { motion } from 'framer-motion';
import { Button } from './Button';
import { Card } from './Card';

export const ContactForm = () => {
  return (
    <form
      name="contact-form"
      className="flex flex-col gap-14 justify-center items-center w-full text-black"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <Card className="w-full  md:w-1/2 flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 30,
            duration: 0.6,
            delay: 0.2,
          }}
          className="flex flex-col w-full gap-4 z-10"
          viewport={{ once: true }}
        >
          <label htmlFor="name" className="text-white">
            Name
          </label>
          <input
            className="h-10 px-2 rounded-md"
            type="text"
            name="name"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 30,
            duration: 0.6,
            delay: 0.3,
          }}
          className="flex flex-col w-full gap-4 z-10"
          viewport={{ once: true }}
        >
          <label htmlFor="email" className="text-white">
            E-Mail
          </label>
          <input
            className="h-10 px-2 rounded-md"
            name="email"
            type="email"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 30,
            duration: 0.6,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="flex flex-col w-full gap-4 z-10"
        >
          <label htmlFor="message" className="text-white">
            Message
          </label>
          <motion.textarea
            className="h-24 p-2 rounded-md"
            name="message"
            required
          />
        </motion.div>
      </Card>
      <Button variant="sm" className="w-36">
        Send
      </Button>
    </form>
  );
};
