import { ICardStyle } from "./ICard";

export interface INavItemProps{
    navItems: INavItem[] ;

}

export interface INavItem{
    id:number
    redirect?:string;
    icon:React.ReactNode;
    className?:string;
    clasNameText?:string
    text: string;
}

export interface IProject{
    id:number;
    name:string;
    description:string;
    technologies:string[];
    projectDate: ProjectDate
    styleGradient:ICardStyle
}

interface ProjectDate{
    day:string;
    title:string
}


export interface TimelineItemProps {
  project: IProject;
  index: number;
}