"use client"
import { CardVariants, ICardProps } from "@/src/interfaces/ICard"
import {Card} from "./variants/Card"
import {CardSkill} from "./variants/CardSkill"
import type { ReactNode } from "react";

export const CardComponent = (props:ICardProps)=>{
    const {variant} = props;
    const variantMode:Record<CardVariants,(props:ICardProps)=>ReactNode> = {
        "Card": Card,
        "skill": CardSkill,
    }

    return <>
    {variantMode[variant](props)}
    </>
}