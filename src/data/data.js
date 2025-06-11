import { BiLogoTypescript, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss, BiLogoJavascript, BiLogoHtml5, BiLogoSass } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { SiExpress, SiJsonwebtokens } from "react-icons/si";
import { AiFillThunderbolt } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { FaCss3 } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { RiJavaLine, RiJavascriptFill } from "react-icons/ri";
import { SiGithub, SiHtml5, SiJest, SiNodedotjs, SiPostman, SiReact, SiSwagger, SiTailwindcss } from "react-icons/si";

export const projects = [
    { 
        title: "Taskify", 
        stack: "Fullstack",
        desc: "Aplicación web responsiva que permite crear y gestionar proyectos con un equipo de trabajo. En donde se implementó autenticación JWT, autorización, control de permisos, creación de base de datos, diseño web y librerías que permiten una mejor interacción con el usuario.", 
        img: "/img/AppTaskify.jpg",
        tecnologies: ["BiLogoTypescript", "BiLogoNodejs", "DiPostgresql", "SiExpress", "BiLogoReact", "BiLogoTailwindCss", "SiJsonwebtokens"],
        link: "https://taskify-frontend-lime.vercel.app/auth/login"
    },
    { 
        title: "Planificador de gastos", 
        stack: "Frontend",
        desc: "Página web responsiva que permite a los usuarios administrar de manera precisa sus gastos. En donde podemos seleccionar el tipo de gasto como salud, suscripciones, hogar, etc. Así como filtrar los gastos generados.", 
        img: "/img/AppGastos2.jpg",
        tecnologies: ["BiLogoTypescript", "BiLogoReact", "BiLogoTailwindCss"],
        link: "https://extraordinary-bavarois-fcdb6f.netlify.app/"
    },
    { 
        title: "Cotizador", 
        stack: "Fullstack",
        desc: "Aplicación web responsiva que permite el registro de usuarios para poder crear, editar y eliminar productos, así como agregar al carrito productos que otras personas crean. Dentro del carrito de compras se puede seleccionar el plazo a pagar.", 
        img: "/img/AppTienda.jpg",
        tecnologies: ["BiLogoTypescript", "BiLogoNodejs", "DiPostgresql", "SiExpress", "BiLogoReact", "BiLogoTailwindCss", "SiJsonwebtokens"],
        link: "https://cotizador-frontend-one.vercel.app/auth/login"
    },
    { 
        title: "Sinopsis", 
        stack: "Frontend",
        desc: "Página web responsiva que permite visualizar las películas y series más populares del momento, así como filtrarlas por categoría, año y genero. Se hizo uso de la api de The Movie Database para su elaboración.", 
        img: "/img/AppCine.jpg",
        tecnologies: ["BiLogoJavascript", "BiLogoHtml5", "BiLogoSass"],
        link: "https://ericjairc.github.io/Portafolio/Peliculas/index.html"
    },
];

export const iconMap = {
    BiLogoTypescript,
    BiLogoNodejs,
    BiLogoReact,
    BiLogoTailwindCss,
    SiJsonwebtokens,
    DiPostgresql,
    SiExpress,
    BiLogoJavascript,
    BiLogoHtml5,
    BiLogoSass
};

export const styleMap = {
    BiLogoTypescript: "bg-[#3178C6]",
    BiLogoNodejs: "bg-[#68A063]",
    BiLogoReact: "bg-[#20b0ee]",
    BiLogoTailwindCss: "bg-[#38BDF8]",
    DiPostgresql: "bg-[#336791]",
    SiExpress: "bg-[#303030]",
    BiLogoJavascript: "bg-[#E6A42D]",
    BiLogoHtml5: "bg-[#E34F26]",    
    BiLogoSass: "bg-[#CC6699]",
    SiJsonwebtokens: "bg-[#000000]",
};

export const labelMap = {
    BiLogoTypescript: "TypeScript",
    BiLogoNodejs: "Node.js",
    BiLogoReact: "React",
    BiLogoTailwindCss: "Tailwind CSS",
    DiPostgresql: "PostgreSQL",
    SiExpress: "Express",
    BiLogoJavascript: "JavaScript",
    BiLogoHtml5: "HTML5",
    BiLogoSass: "Sass",
    SiJsonwebtokens: "JWT",
};


export const techs = [
  { name: "HTML5", icon: SiHtml5, color: "#E44D26" },
  { name: "CSS3", icon: FaCss3 , color: "#1572B6" },
  { name: "JavaScript", icon: RiJavascriptFill, color: "#F7DF1E" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", icon: BiLogoPostgresql, color: "#336791" },
  { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#ffffff" },
  { name: "Figma", icon: FiFigma, color: "#7169E2" },
  { name: "Github", icon: SiGithub, color: "#fff" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Java", icon: RiJavaLine, color: "#FFA500" },
  { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "Thunder Client", icon: AiFillThunderbolt, color: "#AB65AF" },
];