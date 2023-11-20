import { viajestypes } from "../actions/viajesactions";

const initialState = {
    data_viaje: {},
}

const viajesreduer = (state = initialState, action) => {
    if (action.type === viajestypes.SET_DATA_VIAJE){
        const data_viaje = action.data_viaje
        return {
            ... state,
            data_viaje
        }
    }
    return state
}

export default viajesreduer