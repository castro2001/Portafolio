"use client"
import { useTheme } from "next-themes";
import { NavItemLinks } from "../NavItemLinks/NavItemLinks";
import { INavItem, INavItemProps } from "@/src/interfaces/core";
import { Briefcase, ExternalLink, Globe, Home, MapPin, MessageSquare, Wrench } from "lucide-react";
import {  formatTime, getLocation } from "@/src/utils/utils";
import { ButtonUI } from "../../ui/button/button";
import { useNavbarHook } from "@/src/hook/useNavbarHook";
import { SelectorLanguage } from "../../ui/button/SelectorLanguage";
import { navLinks } from "@/src/data/core";


export const NavbarLayout = ()=>{
  const {theme,systemTheme} = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const {scrolled,language,currentTime,setLanguage} = useNavbarHook();
  const navItemsLinks:INavItemProps={
      navItems:navLinks,
  }


    return(
        <>
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 
        ${scrolled ? (currentTheme ==="dark" ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-800' :
            'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200') : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex  hidden justify-between items-center h-16">
            {/* Logo and Location */}
            <div className="flex items-center gap-3">
              <MapPin size={24} className="text-gray-500" />
              <div className="text-xl font-bold group cursor-pointer">
                <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-blue-500 transition-all duration-500">
                  {getLocation(language)}
                </span>
              </div>
            </div>
            
            {/* Desktop Right Side */}
            <div className=" md:flex items-center gap-4">
              {/* Language Selector */}
                <SelectorLanguage />

              {/* Theme Toggle */}
                <ButtonUI />
              {/* Clock */}
              <div className={`px-4 py-2 rounded-full ${currentTheme ==="dark" ? 'bg-gray-800/50' : 'bg-gray-100/80'} backdrop-blur-sm font-mono text-sm`}>
                {formatTime(currentTime)}
              </div>
            </div>
          </div>

          <div className="flex flex-col  lg:hidden items-center mt-5  h-10/12 ">
            {/* Logo and Location */}
            <div className="flex flex-wrap  items-center justify-between  w-full gap-3 ">
              <div className="text-xl font-bold group flex gap-2 cursor-pointer">
              <MapPin size={24} className="text-gray-500" />
                <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-blue-500 transition-all duration-500">
                  {getLocation(language)}
                </span>
              </div>
            <ButtonUI />
            </div>
            {/* Desktop Right Side */}
            <div className=" flex justify w-full items-center gap-4">
              {/* Language Selector */}
                <SelectorLanguage />

              {/* Theme Toggle */}
                
              {/* Clock */}
              <div className={`px-4 py-2 rounded-full ${currentTheme ==="dark" ? 'bg-gray-800/50' : 'bg-gray-100/80'} backdrop-blur-sm font-mono text-sm`}>
                {formatTime(currentTime)}
              </div>
            </div>
          </div>
        </div>
      </nav>
        
        <aside className={`flex items-center gap-2 lg:w-sm fixed bottom-4  left-1/2 justify-between  -translate-x-1/2 z-50 
          backdrop-blur-lg rounded-full px-4 py-3 shadow-2xl border
        ${currentTheme === "dark" ? 'bg-gray-900/90 border-gray-800':'bg-white/90 border-gray-200' }
        `}>
            <NavItemLinks {...navItemsLinks}/>
        </aside>
   

          {/* Navigation - Top bar for desktop */}
  

</>
    )
}
