import { viajerostypes } from "../actions/viajerosactions";

const initialState = {
    data_viajero: {},
}

const viajerosreducer = (state = initialState, action) => {
    if (action.type === viajerostypes.SET_DATA_VIAJERO){
        const data_viajero = action.data_viajero
        return {
            ... state,
            data_viajero
        }
    }
    return state
}

export default viajerosreducer