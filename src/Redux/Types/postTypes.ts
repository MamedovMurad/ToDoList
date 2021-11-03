import { IPost } from "../../Model/post";

export enum PostTypes {
    LIST_POST ='LIST_POST',
    SET_LOADING='SET_LOADING'
}



interface IListPost {
    type:PostTypes.LIST_POST,
    payload:IPost;
}

interface ISetLoading{
    type:PostTypes.SET_LOADING,
}

export type PostAction = IListPost|ISetLoading;