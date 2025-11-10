import { useTheme } from "next-themes";

export const useThemesHook = ()=>{
    const {theme,systemTheme} = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    return{
        currentTheme
    }
}