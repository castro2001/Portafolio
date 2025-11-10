import { techStack } from "@/src/data/core";
import { translations } from "@/src/data/core";
import { useNavbarHook } from "@/src/hook/useNavbarHook";
import { useThemesHook } from "@/src/hook/useThemesHook";

export const SkillsComponent = ()=>{
    const {currentTheme} = useThemesHook();
    const {language} = useNavbarHook();
    const t = translations[language as keyof typeof translations]

    return(
        <section id="skills" className={`lg:px-4 px-4 py-20 min-h-screen relative ${currentTheme ==="dark" ? 'bg-gray-900/50':'bg-white'} `}>
             <div className="max-w-7xl mx-auto lg:pt-0 pt-[30px]">
          <h2 className="lg:text-5xl text-[28px] capitalize  font-bold mb-16 text-center">
            {t.skills.title} <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{t.skills.subtitle}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className={`${currentTheme ==="dark" ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl p-8 border-2 hover:border-blue-500 transition-all duration-300`}>
              <h3 className="text-2xl font-bold mb-6 text-blue-500">{t.skills.frontend}</h3>
              <div className="grid grid-cols-3 gap-4">
                {techStack.frontend.map((tech, i) => (
                  <div 
                    key={i}
                    className={`group ${currentTheme ==="dark" ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl p-4 flex flex-col items-center gap-2 hover:scale-110 transition-all duration-300 cursor-pointer`}
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
            <div className={`${currentTheme ==="dark" ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl p-8 border-2 hover:border-purple-500 transition-all duration-300`}>
              <h3 className="text-2xl font-bold mb-6 text-purple-500">{t.skills.backend}</h3>
              <div className="grid grid-cols-3 gap-4">
                {techStack.backend.map((tech, i) => (
                  <div 
                    key={i}
                    className={`group ${currentTheme ==="dark" ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl p-4 flex flex-col items-center gap-2 hover:scale-110 transition-all duration-300 cursor-pointer`}
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
            <div className={`${currentTheme ==="dark" ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl p-8 border-2 hover:border-green-500 transition-all duration-300`}>
              <h3 className="text-2xl font-bold mb-6 text-green-500">{t.skills.learning}</h3>
              <div className="grid grid-cols-3 gap-4">
                {techStack.learning.map((tech, i) => (
                  <div 
                    key={i}
                    className={`group ${currentTheme ==="dark" ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl p-4 flex flex-col items-center gap-2 hover:scale-110 transition-all duration-300 cursor-pointer`}
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
            <div className={`${currentTheme ==="dark" ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl p-8 border-2 hover:border-pink-500 transition-all duration-300`}>
              <h3 className="text-2xl font-bold mb-6 text-pink-500">{t.skills.tools}</h3>
              <div className="grid grid-cols-3 gap-4">
                {techStack.tools.map((tech, i) => (
                  <div 
                    key={i}
                    className={`group ${currentTheme ==="dark" ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl p-4 flex flex-col items-center gap-2 hover:scale-110 transition-all duration-300 cursor-pointer`}
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
    )

}