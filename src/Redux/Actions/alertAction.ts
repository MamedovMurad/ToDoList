
import { ALertAction, AlertTypes } from "../Types/alertTypes";




export const createAlert = (payload:{type:'danger'|'warning'|'success',text:string,active:boolean}):ALertAction=>{
    return {type:AlertTypes.ALERT_TYPE,payload}
  }