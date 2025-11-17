import { useNavbarHook } from "@/src/hook/useNavbarHook";
import { useThemesHook } from "@/src/hook/useThemesHook";
import {PoppinsFont,openSansFont} from "@/src/fonts/fonts"
import {  User } from "lucide-react";

export const HeroComponent = ()=>{

    const {currentTheme} = useThemesHook();
    const {isLoaded,language} = useNavbarHook()

    return(
        <section id="home" className={`min-h-screen md:pt-80 flex items-center lg:pt-16 pt-[180px] px-4 relative overflow-hidden ${currentTheme ==="dark" ? 'bg-gray-900/50':'bg-white'} `}>
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:py-10 items-center relative z-10">
                <div className={`space-y-6 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <header className="space-y-2 2xl:space-y-6">
                        <h1 className={`text-6xl md:text-8xl font-bold ${PoppinsFont.className}`}>Full Stack</h1>
                        <h2 className={`text-6xl md:text-8xl font-bold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text
                        text-transparent animate-gradient ${PoppinsFont.className}`}>Developer</h2>
                    </header>
                      <p className={`text-xl ${currentTheme ==="dark" ? 'text-gray-400' : 'text-gray-600'} ${openSansFont.className} max-w-lg`}>Creando experiencias web increíbles con Next.js y tecnologías modernas </p>
                </div>
                <div className={`relative ${isLoaded ? 'animate-fade-in' : 'opacity-0'} animation-delay-500`}>
                    <div className="relative w-full h-96 md:h-[450px]">
                        {/* Placeholder for 3D avatar or image */}
                        <div className={`absolute inset-0 ${currentTheme ==="dark" ? 'bg-linear-to-br from-gray-800 to-gray-900' : 'bg-linear-to-br from-gray-200 to-gray-300'} rounded-2xl flex items-center justify-center border-2 ${currentTheme ==="dark" ? 'border-gray-700' : 'border-gray-400'} shadow-2xl`}>
                        <div className="text-center space-y-4">
                            <div className="w-32 h-32 mx-auto bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <User size={64} />
                            </div>
                            <p className={`text-lg ${currentTheme ==="dark" ? 'text-gray-400' : 'text-gray-600'}`}>
                            {language === 'es' ? 'Tu foto aquí' : 'Your photo here'}
                            </p>
                        </div>
                        </div>
                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl animate-pulse"></div>
                    </div>
                </div>
            </div>

             {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-500" />
        </div> */}
        </section>
    )

}