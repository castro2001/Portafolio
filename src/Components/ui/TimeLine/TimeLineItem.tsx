import { openSans600Font, openSansFont, Poppins700Font, PoppinsFont, PoppinsNormalFont } from "@/src/fonts/fonts";
import { useThemesHook } from "@/src/hook/useThemesHook";
import { TimelineItemProps } from "@/src/interfaces/core"
import {FC, useEffect, useRef, useState} from "react"
export const TimeLineItem:FC<TimelineItemProps> = (props:TimelineItemProps)=>{
    const {project,index} = props;
    const [isVisible,SetIsVisible] = useState<boolean>(false);
    const itemRef = useRef<HTMLDivElement>(null);
    const {currentTheme} = useThemesHook()
const [isExpanded, setIsExpanded] = useState<boolean>(false);
// Número de caracteres antes de mostrar "Ver más"
    const MAX_LENGTH = 120;
    const shouldShowReadMore = project.description.length > MAX_LENGTH;
    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entries]) =>{
                if(entries.isIntersecting){
                    SetIsVisible(true)
                }
            },
            {
                threshold:0.2,
                rootMargin:'-50px'
            }
        );

        if(itemRef.current){
            observer.observe(itemRef.current)
        }

        return()=>{
            if(itemRef.current){
                observer.unobserve(itemRef.current)
            }
        }
    },[])

    const isLeft = index % 2 === 0;
   // Función para obtener el texto truncado
    const getDisplayText = () => {
        if (!shouldShowReadMore) return project.description;
        if (isExpanded) return project.description;
        return project.description.substring(0, MAX_LENGTH) + '...';
    };
    return(
        <div ref={itemRef} className="relative mt-5">
            <div className={`flex items-start ${isLeft ? 'flex-row':'flex-row-reverse'}`}>
      {/* Contenido del Proyecto (Card grande) */}
      <div 
      className={`w-5/12 neon-border-project transform transition-all duration-700 ${
      isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-10'
      }`}
                    style={{ '--neon-color' : currentTheme === "dark" ? project.styleGradient.gradientBorderDark : project.styleGradient.gradientBorderLight } as React.CSSProperties}

      >
      <div className=" w-full rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <h3  className={
                `
                title-card ${currentTheme ==="dark"?"dark":"light"} ${PoppinsFont.className}
                `
              }>{project.name}</h3>
      {/* <p className={`paragraph-card ${currentTheme ==="dark"?"dark":"light"} ${openSansFont.className} `}>{project.description}</p> */}
            <p className={`paragraph-card ${currentTheme ==="dark"?"dark":"light"} ${openSansFont.className}`}>
                {getDisplayText()}
                  {/* Botón Ver más / Ver menos */}
                {shouldShowReadMore && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className={`
                          ${PoppinsNormalFont.className} 
                          text-sm font-semibold 
                          text-blue-500 hover:text-blue-600 
                          dark:text-blue-400 dark:hover:text-blue-300
                          transition-colors duration-200
                          focus:outline-none
                      `}
                    >
                      {isExpanded ? 'Ver menos' : 'Ver más'}
                    </button>
                )}
            </p>

                
      {/* Tecnologías */}
      <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech, i) => (
        <span 
          key={i}
         className={`${PoppinsNormalFont.className} px-3 py-1 border  rounded-full text-sm  badge-card ${currentTheme ==="dark"?"dark":"light"}` }
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
            className={`w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg transform transition-all duration-500 z-10 ${
              isVisible ? 'scale-100' : 'scale-0'
            }`}
          />
        </div>

        {/* Fecha y label (del otro lado) */}
        <div 
          className={`w-5/12  pt-2 transform transition-all duration-700 delay-200 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`text-2xl font-bold text-gray-800 mt-5 ${isLeft ? 'text-right':'text-left'} text-color ${currentTheme ==="dark"?"dark":"light"}  ${openSans600Font.className}`}>{project.projectDate.day}</div>
          <div className={`${Poppins700Font.className} mt-3 text-color ${currentTheme ==="dark"?"dark":"light"} ${isLeft ? 'text-right':'text-left'} `}>{project.projectDate.title}</div>
        </div>
            </div>
        </div>
    )
}