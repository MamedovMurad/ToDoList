import { Itodo } from "../../Model/todo";

export enum TodoTypes {
    REMOVE_TODO = 'REMOVE_TODO',
    ADD_TODO = 'ADD_TODO',
    UPDATE_TODO= 'UPDATE_TODO',
    REMOVE_ALL_TODO = 'REMOVE_ALL_TODO',
    COMPLETE_TODO= 'COMPLETE_TODO'
}


interface IRemoveTodo {
    type:TodoTypes.REMOVE_TODO,
    payload:number;
}

interface IComplete {
    type:TodoTypes.COMPLETE_TODO,
    payload:{id:number, isComplete:boolean};
}

interface IAddTodo {
    type:TodoTypes.ADD_TODO,
    payload:Itodo;
}

interface IUpdateTodo {
    type:TodoTypes.UPDATE_TODO,
    payload:Itodo;
}


interface IRemoveAllTodo {
    type:TodoTypes.REMOVE_ALL_TODO,
}



export type TodoAction = IRemoveTodo|IAddTodo|IUpdateTodo|IRemoveAllTodo|IComplete;