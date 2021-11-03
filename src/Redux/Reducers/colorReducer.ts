
import { ColorAction, Colortypes } from "../Types/colorTypes";



export const colorReducer = (state: string = '#A4B1F5', action: ColorAction) => {

    switch (action.type) {
        case Colortypes.COLOR:
            return action.payload
        default:
            return state;
    }
}