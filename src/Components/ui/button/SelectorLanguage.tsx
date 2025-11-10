"use client"
import { useNavbarHook } from "@/src/hook/useNavbarHook";
import { Globe} from "lucide-react";
import { useTheme } from "next-themes"


export const SelectorLanguage = ()=>{
    const {theme,systemTheme} = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const {language,setLanguage} = useNavbarHook();

  return (
    <div className="relative group">
           <button className={`flex items-center gap-2 px-3 py-2 rounded-full
                     ${currentTheme ==="dark" ? 'bg-gray-800/50 hover:bg-gray-700' : 'bg-gray-100/80 hover:bg-white'} transition-all backdrop-blur-sm`}>
                  <Globe size={16} />
                  <span className="text-sm">{language.toUpperCase()}</span>
                </button>
                <div className={`absolute top-full right-0 mt-2
                     ${currentTheme ==="dark" ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[120px]`}>
                  <button 
                    onClick={() => setLanguage('es')}
                    className={`block w-full px-4 py-2 text-left text-sm hover:bg-blue-500 hover:text-white transition-colors
                         ${language === 'es' ? 'bg-blue-500 text-white' : ''}`}
                  >
                    🇪🇸 Español
                  </button>
                  <button 
                    onClick={() => setLanguage('en')}
                    className={`block w-full px-4 py-2 text-left text-sm hover:bg-blue-500 hover:text-white transition-colors 
                        ${language === 'en' ? 'bg-blue-500 text-white' : ''}`}
                  >
                    🇺🇸 English
                  </button>
                </div>
        </div>
  );

}

 