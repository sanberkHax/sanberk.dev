import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTestinglibrary,
  SiWebpack,
  SiTailwindcss,
  SiGit,
  SiAdobephotoshop,
  SiFigma,
  SiTwitter,
  SiBlender,
  SiFirebase,
  SiLinkedin,
  SiGithub,
} from 'react-icons/si';
import { FaSass, FaNpm } from 'react-icons/fa';
import ViteIcon from '@/assets/vite.svg';
import { GrMail } from 'react-icons/gr';

export const ICONS = {
  // Development icons
  HTML: <SiHtml5 className="w-14 h-14 sm:w-24 sm:h-24 fill-orange-500" />,
  CSS: <SiCss3 className="w-14 h-14 sm:w-24 sm:h-24 fill-blue-500" />,
  Sass: <FaSass className="w-14 h-14 sm:w-24 sm:h-24 fill-pink-400" />,
  TailwindCSS: (
    <SiTailwindcss className="w-14 h-14 sm:w-24 sm:h-24 fill-cyan-300" />
  ),
  JavaScript: (
    <SiJavascript className="w-14 h-14 sm:w-24 sm:h-24 fill-yellow-300" />
  ),
  TypeScript: (
    <SiTypescript className="w-14 h-14 sm:w-24 sm:h-24 fill-blue-500" />
  ),
  React: <SiReact className="w-14 h-14 sm:w-24 sm:h-24 fill-cyan-300" />,
  Redux: <SiRedux className="w-14 h-14 sm:w-24 sm:h-24 fill-violet-500" />,
  NextJS: <SiNextdotjs className="w-14 h-14 sm:w-24 sm:h-24 fill-white" />,
  ReactTestingLibrary: (
    <SiTestinglibrary className="w-14 h-14 sm:w-24 sm:h-24 fill-red-500" />
  ),

  // Design icons
  Figma: <SiFigma className="w-14 h-14 sm:w-24 sm:h-24 fill-black" />,
  Photoshop: (
    <SiAdobephotoshop className="w-14 h-14 sm:w-24 sm:h-24 fill-sky-500" />
  ),
  Blender: <SiBlender className="w-14 h-14 sm:w-24 sm:h-24 fill-orange-500" />,

  // Tools icons
  Git: <SiGit className="w-14 h-14 sm:w-24 sm:h-24 fill-orange-500" />,
  Webpack: <SiWebpack className="w-14 h-14 sm:w-24 sm:h-24 fill-sky-300" />,
  NPM: <FaNpm className="w-14 h-14 sm:w-24 sm:h-24 fill-red-500" />,
  Vite: <ViteIcon className="w-14 h-14 sm:w-24 sm:h-24" />,
  Firebase: (
    <SiFirebase className="w-14 h-14 sm:w-24 sm:h-24 fill-orange-500" />
  ),

  // Footer icons
  GitHub: <SiGithub className="w-10 h-10 fill-white hover:fill-black" />,
  Linkedin: <SiLinkedin className="w-10 h-10 fill-white hover:fill-black" />,
  Twitter: <SiTwitter className="w-10 h-10 fill-white hover:fill-black" />,
  Gmail: <GrMail className="w-10 h-10 fill-white hover:fill-black" />,
};
