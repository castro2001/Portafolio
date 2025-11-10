import { translations } from "@/src/data/core";
import { useNavbarHook } from "@/src/hook/useNavbarHook";
import { useThemesHook } from "@/src/hook/useThemesHook";
import { FooterLayout } from "../../layout/footer/footer";

export const ContactComponent = ()=>{
     const {currentTheme} = useThemesHook();
     const {language} = useNavbarHook();
     const t = translations[language as keyof typeof translations]

    return(
      <>
        <section id="contact" className={`lg:px-4 px-2 min-h-screen  py-20 relative ${currentTheme ==="dark" ? 'bg-gray-900/50':'bg-white'} `}>
        <div className="max-w-4xl mx-auto text-center lg:pt-0 pt-[30px]">
          <h2 className="tlg:text-5xl text-[28px] capitalize  font-bold mb-6">
            {t.contact.title} <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{t.contact.subtitle}</span>
          </h2>
          <p className={`text-xl mb-8 ${currentTheme ==="dark"  ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.contact.description}
          </p>
          <a 
            href="mailto:tu@email.com"
            className="inline-block px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10">{t.contact.send}</span>
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </section>
      <FooterLayout />
      </>
       
    )

}