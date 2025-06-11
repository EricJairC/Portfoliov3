import { motion } from 'framer-motion';
import FilmGrain from "./components/FilmGrain";
import Menu from "./components/Menu";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Skills from './components/Skills';
import DescriptionSkills from './components/DescriptionSkills';
import AboutMe from './components/AboutMe';

function App() {

  return (
    <>
      <div className=" relative min-h-[100vh]">
        <div className=" fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
          <FilmGrain />
        </div>
        <header className="absolute top-0 left-0 flex flex-col items-center w-full bg-transparent z-20 pointer-events-auto">
          <Menu />
        </header>
        <div className="home-container flex flex-col items-center content-start relative max-w-[88vw] w-full bg-transparent my-0 m-auto">
          <Presentation />
        </div>
      </div>
      <div className=" w-full min-h-[100vh] flex justify-center items-center relative" id='sobre-mi'>
        <AboutMe/>
      </div>
      <div className=' pt-20' id='proyectos'>
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 1 }}
          className=" font-forta text-center text-projects"
        >
          Mis proyectos
        </motion.h2>
        <div className="relative w-full max-w-5xl mx-auto py-20">
          <Projects />
        </div>
      </div>
      <div className=" relative w-full min-h-[100vh] mx-auto py-20 flex flex-col justify-between" id='skills'>
        <motion.h3
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 1 }}
          className=" skills text-center font-forta"
        >
          Skills
        </motion.h3>
        <DescriptionSkills />
        <Skills />
      </div>
    </>
  )
}

export default App
