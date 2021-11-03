

export enum Colortypes {
    COLOR = 'COLOR',

}


interface IColorSelect {
    type:Colortypes.COLOR,
    payload:string;
}


export type ColorAction = IColorSelect;