import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import agent from "../../Api/agent";
import {  PostTypes } from "../Types/postTypes";

export const postAction = () => (dispatch:ThunkDispatch<{}, {}, AnyAction>) => {
    agent.Products.list()
    .then( posts => 
        dispatch({
            type:PostTypes.LIST_POST,
            payload: {loading:false, post:posts}
        })
    )
    .catch( error => {
        console.log(error);
    });
};

export const loadingAction =()=>{
   return  {type:PostTypes.SET_LOADING}
}