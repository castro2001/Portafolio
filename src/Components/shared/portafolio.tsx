"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Database, Palette, Moon, Sun, Globe, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('es');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
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

  const t = translations[language];

  const projects = [
    {
      title: "E-commerce Platform",
      description: language === 'es' ? "Plataforma completa con Next.js, Stripe y PostgreSQL" : "Full platform with Next.js, Stripe and PostgreSQL",
      tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Dashboard Analytics",
      description: language === 'es' ? "Dashboard en tiempo real con visualización de datos" : "Real-time dashboard with data visualization",
      tech: ["React", "Chart.js", "Node.js", "MongoDB"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Social Media App",
      description: language === 'es' ? "Red social con autenticación y chat en tiempo real" : "Social network with authentication and real-time chat",
      tech: ["Next.js", "Socket.io", "Prisma", "Redis"],
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "API RESTful",
      description: language === 'es' ? "API escalable con documentación completa" : "Scalable API with full documentation",
      tech: ["Node.js", "Express", "Docker", "AWS"],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const techStack = {
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

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob`}></div>
        <div className={`absolute top-40 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000`}></div>
        <div className={`absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000`}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (isDark ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-800' : 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200') : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold group cursor-pointer">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-blue-500 transition-all duration-500">
                {"<Dev />"}
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.values(t.nav).map((item, i) => (
                <a 
                  key={i}
                  href={`#${Object.keys(t.nav)[i]}`} 
                  className="relative group hover:text-blue-500 transition-colors"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <Globe size={18} />
                  {language.toUpperCase()}
                </button>
                <div className={`absolute top-full right-0 mt-2 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}>
                  <button 
                    onClick={() => setLanguage('es')}
                    className={`block w-full px-4 py-2 text-left hover:bg-blue-500 hover:text-white transition-colors ${language === 'es' ? 'bg-blue-500 text-white' : ''}`}
                  >
                    🇪🇸 Español
                  </button>
                  <button 
                    onClick={() => setLanguage('en')}
                    className={`block w-full px-4 py-2 text-left hover:bg-blue-500 hover:text-white transition-colors ${language === 'en' ? 'bg-blue-500 text-white' : ''}`}
                  >
                    🇺🇸 English
                  </button>
                </div>
              </div>

              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-all hover:scale-110`}
              >
                {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-600" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDark ? 'bg-gray-900/95 backdrop-blur-lg' : 'bg-white/95 backdrop-blur-lg'} border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="px-4 pt-2 pb-3 space-y-1">
              {Object.values(t.nav).map((item, i) => (
                <a 
                  key={i}
                  href={`#${Object.keys(t.nav)[i]}`} 
                  className={`block px-3 py-2 rounded hover:bg-gray-800 transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex gap-2 px-3 py-2">
                <button 
                  onClick={() => { setLanguage('es'); setIsMenuOpen(false); }}
                  className={`px-3 py-1 rounded ${language === 'es' ? 'bg-blue-500' : 'bg-gray-800'}`}
                >
                  🇪🇸
                </button>
                <button 
                  onClick={() => { setLanguage('en'); setIsMenuOpen(false); }}
                  className={`px-3 py-1 rounded ${language === 'en' ? 'bg-blue-500' : 'bg-gray-800'}`}
                >
                  🇺🇸
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className={`space-y-6 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl font-bold">
                {t.hero.title}
              </h1>
              <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                {t.hero.subtitle}
              </h2>
            </div>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-lg`}>
              {t.hero.description}
            </p>
            <div className="flex gap-4 flex-wrap">
              <a 
                href="#projects" 
                className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">{t.hero.viewProjects}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#contact" 
                className={`px-8 py-3 border-2 ${isDark ? 'border-gray-700 hover:border-blue-500 hover:bg-blue-500/10' : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'} rounded-lg font-semibold hover:scale-105 transition-all duration-300`}
              >
                {t.hero.contactMe}
              </a>
            </div>
            <div className="flex gap-6 pt-4">
              <a href="#" className="group hover:scale-110 transition-transform">
                <Github size={28} className="group-hover:text-blue-500 transition-colors" />
              </a>
              <a href="#" className="group hover:scale-110 transition-transform">
                <Linkedin size={28} className="group-hover:text-blue-500 transition-colors" />
              </a>
              <a href="#" className="group hover:scale-110 transition-transform">
                <Mail size={28} className="group-hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Avatar/Image Section */}
          <div className={`relative ${isLoaded ? 'animate-fade-in' : 'opacity-0'} animation-delay-500`}>
            <div className="relative w-full h-96 md:h-[500px]">
              {/* Placeholder for 3D avatar or image */}
              <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-200 to-gray-300'} rounded-2xl flex items-center justify-center border-2 ${isDark ? 'border-gray-700' : 'border-gray-400'} shadow-2xl`}>
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Code2 size={64} />
                  </div>
                  <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {language === 'es' ? 'Tu foto aquí' : 'Your photo here'}
                  </p>
                </div>
              </div>
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-500" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${isDark ? 'bg-gray-900/50' : 'bg-white'} relative`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">
            {t.projects.title} <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{t.projects.subtitle}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative cursor-pointer p-[2px] rounded-xl"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Animated border wrapper */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div 
                    className="absolute w-[200%] h-[200%] -left-1/2 -top-1/2 animate-border-spin"
                    style={{
                      background: `conic-gradient(transparent, transparent, transparent, ${
                        project.gradient.includes('blue') ? '#3b82f6' : 
                        project.gradient.includes('green') ? '#22c55e' : 
                        project.gradient.includes('pink') ? '#ec4899' : '#f97316'
                      }, transparent, transparent)`
                    }}
                  ></div>
                </div>
                
                {/* Card content */}
                <div className={`relative ${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl p-6 group-hover:scale-[1.02] transition-all duration-300`}>
                <div className={`h-48 bg-gradient-to-r ${project.gradient} rounded-lg mb-6 flex items-center justify-center relative overflow-hidden`}>
                  <Code2 size={64} className="opacity-50 relative z-10" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 flex items-center justify-between">
                  {project.title}
                  <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className={`px-3 py-1 text-sm rounded-full ${isDark ? 'bg-gray-900 text-blue-400 border border-blue-500/30' : 'bg-blue-100 text-blue-600 border border-blue-300'} hover:scale-110 transition-transform cursor-default`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            {t.skills.title} <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{t.skills.subtitle}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className={`${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl p-8 border-2 hover:border-blue-500 transition-all duration-300`}>
              <h3 className="text-2xl font-bold mb-6 text-blue-500">{t.skills.frontend}</h3>
              <div className="grid grid-cols-3 gap-4">
                {techStack.frontend.map((tech, i) => (
                  <div 
                    key={i}
                    className={`group ${isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl p-4 flex flex-col items-center gap-2 hover:scale-110 transition-all duration-300 cursor-pointer`}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold"
                      style={{ backgroundColor: tech.color + '20', color: tech.color }}
                    >
                      {tech.name.slice(0, 2)}
                    </div>
                    <span className="text-xs text-center font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className={`${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl p-8 border-2 hover:border-purple-500 transition-all duration-300`}>
              <h3 className="text-2xl font-bold mb-6 text-purple-500">{t.skills.backend}</h3>
              <div className="grid grid-cols-3 gap-4">
                {techStack.backend.map((tech, i) => (
                  <div 
                    key={i}
                    className={`group ${isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl p-4 flex flex-col items-center gap-2 hover:scale-110 transition-all duration-300 cursor-pointer`}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold"
                      style={{ backgroundColor: tech.color + '20', color: tech.color }}
                    >
                      {tech.name.slice(0, 2)}
                    </div>
                    <span className="text-xs text-center font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning */}
            <div className={`${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl p-8 border-2 hover:border-green-500 transition-all duration-300`}>
              <h3 className="text-2xl font-bold mb-6 text-green-500">{t.skills.learning}</h3>
              <div className="grid grid-cols-3 gap-4">
                {techStack.learning.map((tech, i) => (
                  <div 
                    key={i}
                    className={`group ${isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl p-4 flex flex-col items-center gap-2 hover:scale-110 transition-all duration-300 cursor-pointer`}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold"
                      style={{ backgroundColor: tech.color + '20', color: tech.color }}
                    >
                      {tech.name.slice(0, 2)}
                    </div>
                    <span className="text-xs text-center font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className={`${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl p-8 border-2 hover:border-pink-500 transition-all duration-300`}>
              <h3 className="text-2xl font-bold mb-6 text-pink-500">{t.skills.tools}</h3>
              <div className="grid grid-cols-3 gap-4">
                {techStack.tools.map((tech, i) => (
                  <div 
                    key={i}
                    className={`group ${isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl p-4 flex flex-col items-center gap-2 hover:scale-110 transition-all duration-300 cursor-pointer`}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold"
                      style={{ backgroundColor: tech.color + '20', color: tech.color }}
                    >
                      {tech.name.slice(0, 2)}
                    </div>
                    <span className="text-xs text-center font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${isDark ? 'bg-gray-900/50' : 'bg-white'} relative`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            {t.contact.title} <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{t.contact.subtitle}</span>
          </h2>
          <p className={`text-xl mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.contact.description}
          </p>
          <a 
            href="mailto:tu@email.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10">{t.contact.send}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDark ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 {language === 'es' ? 'Tu Nombre. Hecho con Next.js y' : 'Your Name. Made with Next.js and'} ❤️
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animate-fade-in {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes border-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes gradient-rotate {
          0% {
            background-position: 0% 50%;
            filter: hue-rotate(0deg);
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
            filter: hue-rotate(360deg);
          }
        }
        
        @keyframes border-flow {
          0% {
            transform: rotate(0deg);
            background-position: 0% 0%;
          }
          100% {
            transform: rotate(360deg);
            background-position: 100% 100%;
          }
        }
        
        .animate-border-flow {
          background-size: 300% 300%;
          animation: border-flow 3s linear infinite;
          filter: blur(8px);
        }
        
        .animate-gradient-rotate {
          background-size: 400% 400%;
          animation: gradient-rotate 3s ease infinite;
        }
      `}</style>
    </div>
  );
}