import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';

export const Header = () => {
  return (
    <header className="">
      <HamburgerMenu />
      <nav className="fixed right-10 top-4 z-10 hidden lg:block">
        <ul className="flex border-2 items-center bg-opacity-30 bg-sky-700 justify-center border-cyan-300 px-4 text-white skew-x-[-30deg] ">
          <li className="skew-x-[30deg] p-3 hover:bg-cyan-300 hover:text-black cursor-pointer">
            <Link href="#index" className="p-3">
              Introduction
            </Link>
          </li>
          <li className="skew-x-[30deg] hover:bg-cyan-300 p-3 hover:text-black cursor-pointer">
            <Link href="#about" className="p-3">
              About
            </Link>
          </li>
          <li className="skew-x-[30deg] hover:bg-cyan-300 p-3 hover:text-black cursor-pointer">
            <Link href="#projects" className="p-3">
              Projects
            </Link>
          </li>
          <li className="skew-x-[30deg] hover:bg-cyan-300 p-3 hover:text-black cursor-pointer">
            <Link href="#contact-me" className="p-3">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
