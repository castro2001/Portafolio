"use client"
import { useTheme } from "next-themes";
import { ImageUI } from "../../ui/Image/Image";

interface IIconsProps{
    imageDark:string;
    imageLight:string;
}

export const IconsComponent = (props:IIconsProps) =>{
    const {imageDark,imageLight} = props
 
    const {theme,systemTheme} = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    return(
        
        currentTheme === "dark" ? (<ImageUI src={imageLight} width={28} height={28} alt="logo" />):(<ImageUI src={imageDark}  width={28} height={28} alt="logo"/> 
        )
        
    )
    

}