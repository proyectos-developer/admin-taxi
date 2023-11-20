import { calificacionestypes } from "../actions/calificacionesactions";

const initialState = {
    data_calificacion: {},
}

const calificacionesreduer = (state = initialState, action) => {
    if (action.type === calificacionestypes.SET_DATA_CALIFICACION){
        const data_calificacion = action.data_calificacion
        return {
            ... state,
            data_calificacion
        }
    }
    return state
}

export default calificacionesreduer