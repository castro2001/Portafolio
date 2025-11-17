"use client"
import { useThemesHook } from "@/src/hook/useThemesHook"
import {FC, useEffect, useRef, useState} from "react"
import { TimeLineItem } from "./TimeLineItem";
import { projects } from "@/src/data/project";
import { Heading } from "../heading/heading";


export const TimelineComponent = () => {
   const [lineHeight, setLineHeight] = useState<number>(0);
   const timelineRef = useRef<HTMLDivElement>(null);
   const { currentTheme } = useThemesHook();

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


  return(
  <section className="py-20" id="projects" >
  <Heading
       title="Experiencia" spanTitle="Laboral"
       />
     <div ref={timelineRef} className={`max-w-7xl mx-auto px-4 py-24 relative min-h-screen 
      ${currentTheme === "dark" ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"} 
      py-16 px-4 transition-colors duration-300`} >
     
       
        {/* Línea vertical central - UNA SOLA LÍNEA */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 bg-gray-300 pointer-events-none" style={{ height: '100%' }}>
          {/* Línea de progreso que se dibuja/borra con el scroll */}
          <div 
            className={`absolute top-0 left-0 w-full ${currentTheme ==="dark" ? 'bg-[#3B82F6]':'bg-[#A855F7]'} transition-all duration-200 ease-out`}
            style={{ 
              height: `${lineHeight}px`
            }}
          />
        </div>

        {/* Items de la timeline */}
        <div className="relative">
          {projects.map((project, index) => (
            <TimeLineItem
              key={index}
              project={project}
          
              index={index}
            />
          ))}
        </div>
      </div>

  
  </section>     
  )

};
