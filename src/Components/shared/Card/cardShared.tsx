"use client"
import { ICard, ICardProps } from "@/src/interfaces/ICard"
import { CardComponent } from "../../ui/Card"

export const CardShared = () => {
    const card:ICard[]=[
        {
            id:1,
            title: "E-commerce Platform",
            description:  "Full platform with Next.js, Stripe and PostgreSQL",
            tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
            gradient: "from-blue-500 to-purple-600",
            gradientBorderDark:"#3B82F6",
            gradientBorderLight:"#A855F7"
        },
        {
            id:2,
            title: "Dashboard Analytics",
            description: "Real-time dashboard with data visualization",
            tech: ["React", "Chart.js", "Node.js", "MongoDB"],
            gradient: "from-green-500 to-teal-600",
            gradientBorderDark:"#22C55E",
            gradientBorderLight:"#0D9488"
        },
        {
            id:3,
            title: "Social Media App",
            description:  "Social network with authentication and real-time chat",
            tech: ["Next.js", "Socket.io", "Prisma", "Redis"],
            gradient: "from-pink-500 to-rose-600",
            gradientBorderDark:"#EC4899 ",
            gradientBorderLight:"#E11D48"
        },
        {
            id:4,
            title: "API RESTful",
            description: "Scalable API with full documentation",
            tech: ["Node.js", "Express", "Docker", "AWS"],
            gradient: "from-orange-500 to-red-600",
            gradientBorderDark:"#F97316",
            gradientBorderLight:"#EF4444"
        }
    ]





const CardSkill:ICardProps["cardSkill"]=[
    {id:1,title:"Skill Card 1",listIcons:[{image:"/file.svg",item:"File"},{image:"/globe.svg",item:"Globe"}]},
    {id:2,title:"Skill Card 2",listIcons:[{image:"/vercel.svg",item:"Vercel"},{image:"/file.svg",item:"File"}]},
]

    const cardProps:ICardProps={
        variant:"Card",
        card:card
    }

    const cardProps2:ICardProps={
        variant:"skill",
        cardSkill:CardSkill
    }

    return(
        <>
        {/* <SectionGrid mode="column-3"> */}
            <CardComponent {...cardProps} />

        {/* </SectionGrid> */}
        {/* <CardComponent {...cardProps2} /> */}
        </>
    )
}