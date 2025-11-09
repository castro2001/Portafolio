"use client"
interface ClientLayoutProps {
    children: React.ReactNode;
}

import {  ThemeProvider} from "next-themes";
import { useEffect, useState } from "react";

export default function ClientLayout({children}: ClientLayoutProps){
    const [mounted,SetMounted] = useState(false)

    //Prevenir problemas de hidratacion del lado del servidor SSR
    useEffect(()=>{
        SetMounted(true)
    },[])

    if(!mounted) return null;
    return (
        <ThemeProvider attribute={"class"} defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
        </ThemeProvider>

    )
     
}