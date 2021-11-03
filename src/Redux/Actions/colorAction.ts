
import { ColorAction,Colortypes } from "../Types/colorTypes";



export const colorSelect = (payload:string):ColorAction=>{
    return {type:Colortypes.COLOR,payload}
  }