
import { ALertAction, AlertTypes } from "../Types/alertTypes";


const initialState:{type:'danger'|'warning'|'success',text:string,active:boolean} = {
   type:'danger',
   text:'',
   active:false,

}

export const alertReducer= (state=initialState,action:ALertAction)=>{

    switch (action.type) {
        case AlertTypes.ALERT_TYPE:
            return action.payload
        default:
          return  state;
    }
}