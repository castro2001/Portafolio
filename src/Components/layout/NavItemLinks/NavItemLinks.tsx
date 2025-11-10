"use Client"

import { useNavbarHook } from "@/src/hook/useNavbarHook";
import { INavItemProps } from "@/src/interfaces/core"
import { useTheme } from "next-themes";
import Link from "next/link"

export const NavItemLinks = (props: INavItemProps) => {
    const { navItems } = props
    const {theme,systemTheme} = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const {activeSection} = useNavbarHook();
   
    
    return(
        navItems?.map((item)=>{
            const { icon,id,text} = item
                        const isActive = activeSection === text;

            return(
                <div key={id}>
                        { isActive &&(
                            <div className="absolute animate-fade-in  bg-blue-500  flex items-center pt-1 py-1 px-3 rounded-full -top-4 ">
                            <span className="text-xs font-medium whitespace-nowrap  ">{item.text}</span>
                            </div>
                        )}

                        <Link
                        href={`#${text}`}
                        className={`group relative flex flex-col items-center gap-1 px-3 py-2 rounded-full transition-all duration-300
                            ${isActive ? 'bg-blue-500 ':currentTheme === "dark" ? 'hover:bg-gray-800 active:bg-gray-700':'hover:bg-gray-100 active:bg-gray-200'}
                            `} >
                        {icon}
                        </Link>
                </div>
            )
        })
    )

}