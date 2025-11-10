"use client"
import { useState, useEffect } from 'react';

export const useNavbarHook = ()=>{
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('es');
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeSection, setActiveSection] = useState('home');

   const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
  useEffect(() => {
    setIsLoaded(true);
    handleScroll()
    window.addEventListener('scroll', handleScroll);

    // Update time every second
    const timer = setInterval(() => {
    setCurrentTime(new Date());
    }, 1000);

    return () => {
    window.removeEventListener('scroll', handleScroll);
    clearInterval(timer);
    };
  }, []);

  return {
    activeSection,
    language,
    setLanguage,
    currentTime,
    setCurrentTime,
    scrolled,
    isLoaded
  }
}