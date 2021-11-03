import { useActions } from "./useActions"

export const useAlert = () => {
    const {createAlert} =useActions();
   const handleAlert= (initialValue:{type:'success'|'warning'|'danger',active:boolean,text:string})=>{
    createAlert(initialValue)
    setTimeout(() => {
     createAlert({type:'success',text:'',active:false})
    }, 1000);
    }
 
    return handleAlert

}