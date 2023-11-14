import { filtrostypes } from "../actions/filtrosactions";

const initialState = {
    filtro_conductores_search_order_amount: {pagina: '', id: 0, search: 0, order_by: 0, order: 0, filtro: 0, id_filtro: 0,  begin: 0, amount: 16},
    limpiar_filtros: {}
}

const filtrosreducer = (state = initialState, action) => {
    if (action.type === filtrostypes.SET_FILTRO_CONDUCTORES_SEARCH_ORDER_AMOUNT){
        const filtro_conductores_search_order_amount = action.filtro_conductores_search_order_amount
        return {
            ... state,
            filtro_conductores_search_order_amount
        }
    }else if (action.type === filtrostypes.SET_LIMPIAR_FILTROS){
        const limpiar_filtros = action.limpiar_filtros
        return {
            ... state,
            limpiar_filtros
        }
    }
    return state
}

export default filtrosreducer