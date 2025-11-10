import { useThemesHook } from "@/src/hook/useThemesHook";
import { NavbarLayout } from "./navbar/navbar";
import { ProjectsComponent } from "../shared/section/Projects";
import { SkillsComponent } from "../shared/section/Skills";
import { ContactComponent } from "../shared/section/Contact";
import { HeroComponent } from "../shared/section/Hero";

export const Layout = ()=>{
    const {currentTheme} = useThemesHook();
    
    return(
    <main className={`min-h-screen transition-colors duration-500 ${currentTheme ==="dark" ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <NavbarLayout />
        <HeroComponent />
        <ProjectsComponent />
        <SkillsComponent />
        <ContactComponent />
        {/* <FooterLayout/> */}
    </main>
    )
}