
import { IModal } from "../../Model/todo";
import { ModalAction, ModalTypes } from "../Types/modalTypes";



export const modalToggle = (payload:IModal):ModalAction=>{
    return {type:ModalTypes.TOGGLE_MODAL,payload}
  }