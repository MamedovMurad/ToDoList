import { Itodo } from "../../Model/todo";
import { TodoAction, TodoTypes } from "../Types/toDoTypes";



export const addTodo = (payload:Itodo):TodoAction=>{
    return {type:TodoTypes.ADD_TODO,payload}
  }
export const removeFromTodo = (itemId: number): TodoAction => {
    return { type: TodoTypes.REMOVE_TODO, payload: itemId };
  };
  
  export const UpdateTodo = (payload:Itodo):TodoAction=>{
    return {type:TodoTypes.UPDATE_TODO, payload}
  }

  export const removeAllTodo = ():TodoAction=>{
    return {type:TodoTypes.REMOVE_ALL_TODO}
  }

  export const completeTodo = (payload:{id:number; isComplete:boolean}):TodoAction=>{
    return{type:TodoTypes.COMPLETE_TODO, payload}
  }