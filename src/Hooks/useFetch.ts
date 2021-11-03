import { useActions } from "./useActions"

export const useFetch = (param:any)=>{

  const {loadingAction}=   useActions();

  const handleFetch = ()=>{
    loadingAction();
    param();
  }
  return handleFetch
}