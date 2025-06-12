import { FiGithub, FiDownload, FiMenu } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export default function Menu() {
  return (
    <nav className="max-w-[88vw] w-[88vw] sm:max-w-[85vw] sm:w-[85vw] flex justify-between items-center px-0 pt-4 mx-auto">
      <div className="flex items-center h-10 gap-3">
        <a className="font-forta cursor-pointer tracking-widest" href="">Eric</a>
      </div>
      <div className="md:hidden flex items-center">
        <input id="menu-toggle" type="checkbox" className="peer hidden" />
        <label htmlFor="menu-toggle" className="cursor-pointer">
          <FiMenu className="w-7 h-7" />
        </label>
        <div className=" flex flex-col absolute top-16 left-0 w-full bg-black bg-opacity-80 z-50 items-center gap-4 py-4 opacity-0 pointer-events-none -translate-y-8 transition-all duration-500 ease-out peer-checked:opacity-100 peer-checked:pointer-events-auto peer-checked:translate-y-0">
          <a className="font-forta tracking-widest" href="#sobre-mi">Sobre mi</a>
          <a className="font-forta tracking-widest" href="#proyectos">Proyectos</a>
          <a className="font-forta tracking-widest" href="#skills">Skills</a>
          <a className="font-forta flex gap-2 items-center text-xl" href="/CV Eric Jair Cruz Sanchez.pdf" download>
            CV
            <FiDownload className="w-5 h-5 text-white" />
          </a>
          <a className="text-gray-300" href="https://github.com/EricJairC" target="_blank" rel="noopener noreferrer">
            <FiGithub className="w-7 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/eric-jair-cruz-sanchez" target="_blank" rel="noopener noreferrer">
            <CiLinkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a className="font-forta cursor-pointer tracking-widest" href="#sobre-mi">Sobre mi</a>
        <a className="font-forta cursor-pointer tracking-widest" href="#proyectos">Proyectos</a>
        <a className="font-forta cursor-pointer tracking-widest" href="#skills">Skills</a>
      </div>
      <div className="hidden md:flex items-center gap-3">
        <a className="font-forta flex gap-2 items-center" href="/CV Eric Jair Cruz Sanchez.pdf" download>
          CV
          <FiDownload className="w-5 h-5 text-white" />
        </a>
        <a className="cursor-pointer text-gray-300" href="https://github.com/EricJairC" target="_blank" rel="noopener noreferrer">
          <FiGithub className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/eric-jair-cruz-sanchez" target="_blank" rel="noopener noreferrer">
          <CiLinkedin className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
}