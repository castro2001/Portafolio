"use client"
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"

export const ButtonUI = ()=>{
    const {theme,setTheme,systemTheme} = useTheme();

   const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 transition-all hover:scale-105"
      title="Cambiar tema"
    >
      {currentTheme === "dark" ? (
        <Sun className="text-yellow-400 w-5 h-5 cursor-pointer" />
      ) : (
        <Moon className="text-gray-50 w-5 h-5 cursor-pointer" />
      )}
    </button>
  );

}