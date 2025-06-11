import { projects } from "../data/data";
import { motion } from 'framer-motion';
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
    return (
        <>
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[70%] w-1 bg-white z-0 rounded"
            />
            <div className="space-y-10 relative z-10 mx-5">
                {projects.map((item, index) => (
                    <div
                        key={index}
                        className={`relative md:flex ${index % 2 !== 0 ? "justify-end" : "justify-start"
                            }`}
                    >
                        {index % 2 !== 0 ? (
                            <>
                                <div
                                    className="hidden md:block absolute top-15/36 left-[49.8%] h-1 rounded w-[2rem] bg-white -translate-y-1/2"
                                />
                            </>
                        ) : (
                            <>
                                <div
                                    className="hidden md:block absolute top-17/36 right-[49.8%] h-1 rounded w-[2rem] bg-white -translate-y-1/2"
                                />
                            </>
                        )}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="card w-[21em] bg-slate-200 p-2 rounded text-white mx-auto md:mx-0">

                            <ProjectDetails
                                item={item}
                            />
                        </motion.div>
                    </div>
                ))}
            </div>
        </>
    )
}
