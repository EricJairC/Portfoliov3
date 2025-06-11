import { FiGithub, FiLinkedin } from "react-icons/fi"
import { FiDownload } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export default function Menu() {
  return (
    <>
      <div className=" max-w-[85vw] w-[85vw] flex justify-between items-center px-[0em] pt-4">
        <div className=" flex items-center h-10 gap-3">
          <a className=" font-forta cursor-pointer tracking-widest" href="">Eric</a>
        </div>
        <div className=" flex items-center gap-8">
          <a className="font-forta cursor-pointer tracking-widest" href="#sobre-mi">Sobre mi</a>
          <a className="font-forta cursor-pointer tracking-widest" href="#proyectos">Proyectos</a>
          <a className="font-forta cursor-pointer tracking-widest" href="#skills">Skills</a>
        </div>
        <div className=" flex items-center gap-3">
          <div className="">
            <a
              className=" font-forta flex gap-2 items-center"
              href="/CV Eric Jair Cruz Sanchez.pdf"
              download
            >CV
            <FiDownload  className=" w-5 h-5 text-white" />
            </a>
          </div>
          <a className=" cursor-pointer text-gray-300" href="https://github.com/EricJairC" target="_blank">
            <FiGithub className=" w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/eric-jair-cruz-sanchez" target="_blank">
            <CiLinkedin className=" w-6 h-6" />
          </a>

        </div>
      </div>
    </>
  )
}
