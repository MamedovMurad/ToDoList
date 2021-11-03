import { Itodo } from "../../Model/todo";
import { TodoAction, TodoTypes } from "../Types/toDoTypes";

const initialState: Itodo[] = [
    {
        id: 1,
        label: 'test /v/1',
        text: ' string like lorem',
        isCompleted: false,
        star: false,
    }
]

export const todoReducer = (state = initialState, action: TodoAction) => {
    switch (action.type) {
        case TodoTypes.ADD_TODO:
            return [...state, action.payload]
        case TodoTypes.REMOVE_ALL_TODO:
            return []
        case TodoTypes.REMOVE_TODO:
            return [...state].filter(item => item.id !== action.payload)
        case TodoTypes.UPDATE_TODO:
            const updatedItem = [...state].map((item) => {
                if (item.id === action.payload.id) {
                    return item = action.payload
                }
                return item

            })
            return updatedItem

        case TodoTypes.COMPLETE_TODO:
            const updatedItetm = [...state].map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, isCompleted: action.payload.isComplete }
                }
                return item
            })
            return updatedItetm
        default:
            return state;
    }
}