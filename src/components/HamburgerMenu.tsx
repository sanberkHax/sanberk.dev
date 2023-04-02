import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Icon } from './Icon';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleHandler = (toggled: boolean) => {
    if (toggled) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  const clickHandler = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };
  return (
    <nav className="fixed block lg:hidden z-40 right-0 top-0">
      <Hamburger
        onToggle={toggleHandler}
        toggle={setMenuOpen}
        toggled={menuOpen}
        size={36}
        color={menuOpen ? 'black' : '#79FFFF'}
        easing="ease-out"
      />
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.ul
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="absolute h-screen right-0 top-0 w-screen sm:w-[50vh] flex flex-col gap-10 bg-sky-600 bg-opacity-95 p-10 justify-center items-center font-bold text-xl text-white"
              exit={{ opacity: 0, x: 400 }}
              onClick={clickHandler}
            >
              <li>
                <Link href="#index" className="p-2 hover:text-black">
                  Introduction
                </Link>
              </li>
              <li>
                <Link href="#about" className="p-2 hover:text-black">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="p-2 hover:text-black">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact-me" className="p-2 hover:text-black">
                  Contact
                </Link>
              </li>
              <div className="flex gap-10 mt-24">
                <Icon name="GitHub" link="https://github.com/sanberkHax" />
                <Icon
                  name="Linkedin"
                  link="https://www.linkedin.com/in/sanberk-turker/"
                />
                <Icon name="Twitter" link="https://twitter.com/sanberkDev" />
                <Icon name="Gmail" link="mailto:sanberk.trker@gmail.com" />
              </div>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default HamburgerMenu;
