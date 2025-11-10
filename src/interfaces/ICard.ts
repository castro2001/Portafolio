interface ICardTitle extends ICardStyle{
    readonly id:number;
    title:string;
    description?:string;
}

interface IListCard{
    image:string
    item:string;
}

interface ICardStyle{
    gradient?:string; 
    gradientBorderDark?:string;
    gradientBorderLight?:string;
}

export interface ICard extends ICardTitle{
    tech:string[];
    imageUrl?:string;
}

export interface ICardSkill extends ICardTitle{
    listIcons:IListCard[];
}

export interface ICardProps{
    variant:CardVariants;
    card?:ICard[];
    cardSkill?: ICardSkill[];
}

export type CardVariants = "Card" | "skill";