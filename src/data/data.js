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
        desc: "Aplicación web responsiva para la creación y administración de proyectos colaborativos. Incluye autenticación mediante JWT, control de permisos y roles, base de datos estructurada para gestionar usuarios, tareas y equipos. En donde se integraron librerías modernas para mejorar la experiencia de usuario e interfaces dinámicas con diseño web responsivo.", 
        img: "/img/AppTaskify.jpg",
        tecnologies: ["BiLogoTypescript", "BiLogoNodejs", "DiPostgresql", "SiExpress", "BiLogoReact", "BiLogoTailwindCss", "SiJsonwebtokens"],
        link: "https://taskify-frontend-lime.vercel.app/main"
    },
    { 
        title: "Planificador de gastos", 
        stack: "Frontend",
        desc: "Página web responsiva que permite a los usuarios registrar y gestionar sus gastos de forma precisa y organizada. Los gastos pueden clasificarse por categorías como salud, suscripciones, hogar, etc. En donde se pueden aplicar filtros para visualizar información específica de manera clara y eficiente.", 
        img: "/img/AppGastos2.jpg",
        tecnologies: ["BiLogoTypescript", "BiLogoReact", "BiLogoTailwindCss"],
        link: "https://benevolent-sorbet-6c99b5.netlify.app/"
    },
    { 
        title: "Cotizador", 
        stack: "Fullstack",
        desc: "Aplicación web tipo e-commerce que permite a los usuarios registrarse, gestionar su propio catálogo de productos (crear, editar y eliminar) y explorar productos de otros vendedores. Ofrece un sistema de carrito de compras con opción de seleccionar plazos de pago.", 
        img: "/img/AppTienda.jpg",
        tecnologies: ["BiLogoTypescript", "BiLogoNodejs", "DiPostgresql", "SiExpress", "BiLogoReact", "BiLogoTailwindCss", "SiJsonwebtokens"],
        link: "https://cotizador-frontend-one.vercel.app/auth/login"
    },
    { 
        title: "Sinopsis", 
        stack: "Frontend",
        desc: "Página web responsiva que muestra las películas y series más populares del momento, permitiendo filtrarlas por categoría, año de lanzamiento y género. La aplicación consume datos en tiempo real desde la API de The Movie Database (TMDb), ofreciendo una experiencia interactiva y actualizada para el usuario.", 
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