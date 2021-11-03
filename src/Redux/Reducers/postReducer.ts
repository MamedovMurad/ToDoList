import { IPost } from "../../Model/post";
import { PostAction, PostTypes } from "../Types/postTypes";


const initialState:IPost={
    load:false,
    post:[]
}
export const postReducer = (state = initialState, action: PostAction) => {
switch (action.type) {
    case PostTypes.LIST_POST:
        
        return {...action.payload}
case PostTypes.SET_LOADING:
    return {...state,load:true}
    default:
        return state
}
}