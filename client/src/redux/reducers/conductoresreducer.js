import { conductorestypes } from "../actions/conductoresactions";

const initialState = {
    data_conductor: {},
    conductor_new: {},
    conductor_delete: {},

    nombre_delete: ''
}

const conductoresreducer = (state = initialState, action) => {
    if (action.type === conductorestypes.SET_DATA_CONDUCTOR){
        const data_conductor = action.data_conductor
        return {
            ... state,
            data_conductor
        }
    }else if (action.type === conductorestypes.SET_DATA_CONDUCTOR_NEW){
        const conductor_new = action.conductor_new
        return {
            ... state,
            conductor_new
        }
    }else if (action.type === conductorestypes.SET_CONDUCTOR_DELETE){
        const conductor_delete = action.conductor_delete
        return {
            ... state,
            conductor_delete
        }
    }else if (action.type === conductorestypes.SET_NOMBRE_DELETE){
        const nombre_delete = action.nombre_delete
        return {
            ... state,
            nombre_delete
        }
    }
    return state
}

export default conductoresreducer