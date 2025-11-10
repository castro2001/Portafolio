import { INavItem } from "../interfaces/core";
import { Briefcase, Home, MessageSquare, Wrench } from "lucide-react";

export  const translations = {
    es: {
      nav: { home: "Inicio", projects: "Proyectos", skills: "Habilidades", contact: "Contacto" },
      hero: {
        title: "Full Stack",
        subtitle: "Developer",
        description: "Creando experiencias web increíbles con Next.js y tecnologías modernas",
        viewProjects: "Ver Proyectos",
        contactMe: "Contáctame"
      },
      projects: {
        title: "Proyectos",
        subtitle: "Destacados"
      },
      skills: {
        title: "Stack",
        subtitle: "Tecnológico",
        frontend: "Frontend",
        backend: "Backend",
        learning: "Aprendiendo",
        tools: "Herramientas"
      },
      contact: {
        title: "¿Trabajamos",
        subtitle: "Juntos?",
        description: "Estoy disponible para proyectos freelance y oportunidades full-time",
        send: "Envíame un mensaje"
      }
    },
    en: {
      nav: { home: "Home", projects: "Projects", skills: "Skills", contact: "Contact" },
      hero: {
        title: "Full Stack",
        subtitle: "Developer",
        description: "Building amazing web experiences with Next.js and modern technologies",
        viewProjects: "View Projects",
        contactMe: "Contact Me"
      },
      projects: {
        title: "Featured",
        subtitle: "Projects"
      },
      skills: {
        title: "Tech",
        subtitle: "Stack",
        frontend: "Frontend",
        backend: "Backend",
        learning: "Learning",
        tools: "Tools"
      },
      contact: {
        title: "Let's Work",
        subtitle: "Together?",
        description: "Available for freelance projects and full-time opportunities",
        send: "Send me a message"
      }
    }
};

export    const navLinks:INavItem[]=[
    { id: 1, icon: <Home className="w-7 h-6" />, text: "home" ,redirect:"home"},
    { id: 2, icon: <Briefcase className="w-7 h-6"  />, text: "projects",redirect:"project" },
    { id: 3, icon: <Wrench className="w-7 h-6"  />, text: "skills" ,redirect:"skills"},
    { id: 4, icon: <MessageSquare className="w-7 h-6"  />, text: "contact",redirect:"contact"}
    ]


export  const techStack = {
    frontend: [
      { name: "HTML", color: "#E34F26" },
      { name: "CSS", color: "#1572B6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "React.js", color: "#61DAFB" },
      { name: "TailwindCSS", color: "#06B6D4" },
      { name: "SASS", color: "#CC6699" },
      { name: "Figma", color: "#F24E1E" }
    ],
    backend: [
      { name: "PHP", color: "#777BB4" },
      { name: "Node.js", color: "#339933" },
      { name: "Laravel", color: "#FF2D20" },
      { name: "Express.js", color: "#000000" },
      { name: "MySQL", color: "#4479A1" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Next.js", color: "#000000" },
      { name: "Nginx", color: "#009639" },
      { name: "Apache", color: "#D22128" }
    ],
    learning: [
      { name: "Python", color: "#3776AB" },
      { name: "Astro", color: "#FF5D01" },
      { name: "Docker", color: "#2496ED" },
      { name: "TypeScript", color: "#3178C6" }
    ],
    tools: [
      { name: "Git", color: "#F05032" },
      { name: "GitHub", color: "#181717" },
      { name: "Terminal", color: "#4EAA25" },
      { name: "VSCode", color: "#007ACC" },
      { name: "npm", color: "#CB3837" },
      { name: "WordPress", color: "#21759B" }
    ]
  };