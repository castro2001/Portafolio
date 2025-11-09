import { ICardProps, ICardSkill } from "@/src/interfaces/ICard";
import Image from "next/image";

export const CardSkill= (props:ICardProps) => {
    const {cardSkill} = props;

    return (

        <div className="">
            {
                cardSkill?.map((item:ICardSkill)=>(
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                           {item.listIcons.map((icon,index)=>(
                        <ul key={icon.item}>
                            <li>
                                <Image 
                                src={icon.image}
                                alt=""
                                width={80}
                                height={80}
                                />

                                <span>{icon.item}</span>
                            </li>
                        </ul>
                           ))}
                    </div>
                ))
            }
        </div>
    )
}