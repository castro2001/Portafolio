"use client"

import { useNavbarHook } from "@/src/hook/useNavbarHook";
import { useThemesHook } from "@/src/hook/useThemesHook"

export const FooterLayout = ()=>{
  const {currentTheme}=  useThemesHook();
  const {language} = useNavbarHook()
    
    return(
         <footer className={`py-10 px-4 border-t ${currentTheme ==="dark" ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={currentTheme ==="dark" ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 {language === 'es' ? 'Tu Nombre. Hecho con Next.js y' : 'Your Name. Made with Next.js and'} ❤️
          </p>
        </div>
      </footer>
    )
}