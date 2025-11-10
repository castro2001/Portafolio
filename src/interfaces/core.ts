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