
import { IModal } from "../../Model/todo";

export enum ModalTypes {
    TOGGLE_MODAL = 'TOGGLE_MODAL',

}


interface IModalToggle {
    type:ModalTypes.TOGGLE_MODAL,
    payload:IModal;
}


export type ModalAction = IModalToggle;