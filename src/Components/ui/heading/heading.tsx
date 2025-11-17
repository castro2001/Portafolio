
interface IHeading{
    title:string;
    spanTitle?:string;
}
export const Heading = ({title,spanTitle}:IHeading)=>{
    return(
        <header className="max-w-7xl mx-auto lg:pt-0 pt-[30px]">
            <h2 className="lg:text-5xl text-[28px] capitalize font-bold mb-12 text-center">
            {/* {t.projects.title}  */}
            {title} 
           {
            spanTitle &&(
                <span className="bg-linear-to-r ml-2 from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {/* {t.projects.subtitle} */}
                    {spanTitle}
                </span>
            )
           }
            
            </h2>

        </header>
    )
}