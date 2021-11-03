import {TypedUseSelectorHook, useSelector} from "react-redux";
import {IRootState} from "../Redux/Reducers";


export const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector
