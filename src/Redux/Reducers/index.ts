import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { colorReducer } from "./colorReducer";
import { modalReducer } from "./modalReducer";
import { postReducer } from "./postReducer";
import { todoReducer } from "./toDoReducer";


export const rootReducer=  combineReducers({
    todo : todoReducer,
    modal:modalReducer,
    color:colorReducer,
    alert:alertReducer,
    post:postReducer
})




export type IRootState = ReturnType<typeof rootReducer>