import { ReactElement } from "react";

 export interface Itodo{
    id:number;
    label:string;
    text:string;
    isCompleted:boolean;
    star:boolean;
}

export interface IModal{
    toggle:boolean,
    size:'large'|'small'|'medium'
    component:ReactElement
}