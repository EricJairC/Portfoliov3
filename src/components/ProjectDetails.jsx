import { motion } from 'framer-motion'
import { FaLink } from "react-icons/fa";
import { iconMap, labelMap, styleMap } from "../data/data";

export default function ProjectDetails({ item }) {
    return (
        <>
            <div>
                <div className=" container-img">
                    <img
                        src={item.img}
                        alt={item.title}
                        className=" img-project rounded-sm"
                    />
                </div>
                <div className=" flex flex-col gap-2">
                    <div className=" flex justify-between items-center">
                        <h3 className=" text-project text-white">{item.title}</h3>
                        <a
                            href={item.link}
                            target="_blank"
                            className="flex items-center text-sm font-bold text-[#8c86e4] hover:text-[#7169E2] transition"
                        >
                            Ver proyecto
                            <FaLink className=" ml-2" />
                        </a>
                    </div>

                    <p className=" text-sm font-sans font-semibold text-gray-600">{item.desc}</p>
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                        {item.tecnologies.map((tech, i) => {
                            const Icon = iconMap[tech];
                            const bgColor = styleMap[tech];
                            const label = labelMap[tech];

                            return Icon ? (
                                <span
                                    key={i}
                                    className={`${bgColor} text-white text-[0.85rem] px-2 py-1 rounded-full flex items-center gap-1`}
                                >
                                    <Icon className="text-base" />
                                    {label}
                                </span>

                            ) : null;
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
