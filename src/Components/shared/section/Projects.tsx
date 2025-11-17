import { useThemesHook } from "@/src/hook/useThemesHook";

import { CardShared } from "../Card/cardShared";

export const ProjectsComponent = ()=>{

    const {currentTheme} = useThemesHook();

    return(
        <section className={`lg:px-20 px-4 min-h-screen py-20  relative ${currentTheme ==="dark" ? 'bg-gray-900/50':'bg-white'} `}>
        <div className="max-w-7xl mx-auto lg:pt-0 pt-[30px]">
            <h2 className="lg:text-5xl text-[28px] capitalize font-bold mb-12 text-center">
        {/* {t.projects.title}  */}
        project 
        <span className="bg-linear-to-r ml-2 from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {/* {t.projects.subtitle} */}
            skils
            </span>
        </h2>
        
        </div>
        <CardShared/>
        </section>
    )

}