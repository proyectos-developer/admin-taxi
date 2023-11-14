import { menutypes } from "../actions/menuactions";

const initialState = {
    open_menu_izquierdo: false,
}

const menureducer = (state = initialState, action) => {
    if (action.type === menutypes.SET_OPEN_MENU_IZQUIERDO){
        const open_menu_izquierdo = action.open_menu_izquierdo
        return {
            ... state,
            open_menu_izquierdo
        }
    }
    return state
}

export default menureducer