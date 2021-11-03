import { IModal } from "../../Model/todo";
import { ModalAction, ModalTypes } from "../Types/modalTypes";

const initialState:IModal = {
    toggle:false,
    component: <div></div>,
    size:'large'
}

export const modalReducer= (state=initialState,action:ModalAction)=>{

    switch (action.type) {
        case ModalTypes.TOGGLE_MODAL:
            return action.payload
        default:
          return  state;
    }
}