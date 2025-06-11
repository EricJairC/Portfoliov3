import { motion } from "framer-motion";
import { techs } from "../data/data";

export default function Skills() {
  const icons = [...techs, ...techs, ...techs, ...techs];

  return (
    <motion.div
      initial={{ y: 55, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 1 }}
      className="w-[80%] mx-auto overflow-hidden py-8 bg-transparent"
    >
      <div
        className="slider-track group"
      >
        {icons.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name + i}
              className="slider-icon flex flex-col items-center justify-center min-w-[110px] select-none"

            >
              <span className="icon-wrapper flex items-center justify-center w-[55px] h-[55px]">
                <Icon size={45} color={tech.color} />
              </span>
              <span className="mt-2 font-semibold text-normal" style={{ color: tech.color }}>
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}