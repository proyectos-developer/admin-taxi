export const filtrostypes = {
    SET_FILTRO_CONDUCTORES_SEARCH_ORDER_AMOUNT: 'SET_FILTRO_CONDUCTORES_SEARCH_ORDER_AMOUNT',
    SET_LIMPIAR_FILTROS: 'SET_LIMPIAR_FILTROS',
}

export const set_filtro_conductores_search_order_amount = filtro_conductores_search_order_amount => {
    return {
        filtro_conductores_search_order_amount,
        type: filtrostypes.SET_FILTRO_CONDUCTORES_SEARCH_ORDER_AMOUNT
    }
}

export const set_limpiar_filtros = limpiar_filtros => {
    return {
        limpiar_filtros,
        type: filtrostypes.SET_LIMPIAR_FILTROS
    }
}