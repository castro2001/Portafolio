import React, { useState, useEffect, useRef } from 'react';

interface Project {
  name: string;
  description: string;
  technologies: string[];
}

interface TimelineItemProps {
  project: Project;
  date: string;
  dateLabel: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ project, date, dateLabel, index }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div ref={itemRef} className="relative mb-20">
      <div className={`flex items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Contenido del Proyecto (Card grande) */}
        <div 
          className={`w-5/12 ${isLeft ? 'pr-12' : 'pl-12'} transform transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.name}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
            
            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Punto central con círculo */}
        <div className="w-2/12 flex justify-center relative pt-2">
          <div 
            className={`w-4 h-4 bg-white border-4 border-blue-500
               rounded-full shadow-lg transform transition-all duration-500 z-10 ${
              isVisible ? 'scale-100' : 'scale-0'
            }`}
          />
        </div>

        {/* Fecha y label (del otro lado) */}
        <div 
          className={` ${isLeft ? 'pl-12 text-left' : 'pr-12 text-right'} pt-2 transform transition-all duration-700 delay-200 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-2xl font-bold text-gray-800 mb-2">{date}</div>
          <div className="text-gray-500 text-sm">{dateLabel}</div>
        </div>
      </div>
    </div>
  );
};

export default function Timeline() {
  const [lineHeight, setLineHeight] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineElement = timelineRef.current;
      const rect = timelineElement.getBoundingClientRect();
      const timelineTop = rect.top;
      const timelineHeight = timelineElement.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calcular cuánto de la línea debe estar visible
      // Comienza a dibujarse cuando el timeline entra en la vista
      const scrolled = viewportHeight - timelineTop;
      const maxScroll = timelineHeight + viewportHeight;
      
      // La línea crece conforme scrolleas hacia abajo
      const progress = Math.max(0, Math.min(scrolled / maxScroll, 1));
      const calculatedHeight = progress * timelineHeight;
      
      setLineHeight(calculatedHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Calcular la altura inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      name: 'Viaxperta',
      description: 'Nace Viaxperta una empresa de tecnología, creadora de productos informáticos e integradores de soluciones para la automatización de procesos.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      date: '27/07/2011',
      dateLabel: 'Creación de la compañía'
    },
    {
      name: 'Sistema de Gestión SARH',
      description: 'Se crea el primer producto dedicado a Recursos humanos, un Software versátil altamente configurable, aliado al equipo de trabajo de Desarrollo y Gestión humana de su empresa.',
      technologies: ['.NET', 'C#', 'SQL Server', 'Angular'],
      date: '2002',
      dateLabel: 'Sistema de Gestión de Recursos Humanos SARH'
    },
    {
      name: 'HERMES',
      description: 'Innovamos con Hermes, tecnología especialmente diseñada para consultas médicas en tiempo real con integración de dispositivos médicos.',
      technologies: ['React', 'WebRTC', 'IoT', 'Firebase'],
      date: '2005',
      dateLabel: 'Sistema web'
    },
    {
      name: 'Dashboard Analytics',
      description: 'Panel de control en tiempo real con visualización de datos mediante gráficos interactivos y reportes personalizables para análisis de métricas.',
      technologies: ['Vue.js', 'Chart.js', 'Express', 'PostgreSQL'],
      date: '2008',
      dateLabel: 'Desarrollo completado'
    },
    {
      name: 'App Mobile Delivery',
      description: 'Aplicación móvil para servicio de delivery con seguimiento en tiempo real, notificaciones push y sistema de calificaciones.',
      technologies: ['React Native', 'Firebase', 'Google Maps API'],
      date: '2015',
      dateLabel: 'Aplicación lanzada'
    },
    {
      name: 'Portal Educativo',
      description: 'Plataforma educativa con gestión de cursos, contenido multimedia, evaluaciones en línea y sistema de certificaciones digitales.',
      technologies: ['Next.js', 'Laravel', 'MySQL', 'AWS'],
      date: '2020',
      dateLabel: 'Inicio de operaciones'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Nuestra Historia</h1>
          <p className="text-xl opacity-90">Línea de tiempo de innovación y desarrollo</p>
        </div>
      </div>

      {/* Timeline Container */}
      <div ref={timelineRef} className="max-w-7xl mx-auto px-4 py-24 relative">
        {/* Línea vertical central - UNA SOLA LÍNEA */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 bg-gray-300 pointer-events-none" style={{ height: '100%' }}>
          {/* Línea de progreso que se dibuja/borra con el scroll */}
          <div 
            className="absolute top-0 left-0 w-full bg-blue-500 transition-all duration-200 ease-out"
            style={{ 
              height: `${lineHeight}px`
            }}
          />
        </div>

        {/* Items de la timeline */}
        <div className="relative">
          {projects.map((project, index) => (
            <TimelineItem
              key={index}
              project={{
                name: project.name,
                description: project.description,
                technologies: project.technologies
              }}
              date={project.date}
              dateLabel={project.dateLabel}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
        <p className="text-lg text-gray-300">Contáctanos para hacerlo realidad</p>
      </div>
    </div>
  );
}