export const filtrostypes = {
    SET_FILTRO_CONDUCTORES_SEARCH_ORDER_AMOUNT:                 'SET_FILTRO_CONDUCTORES_SEARCH_ORDER_AMOUNT',
    SET_FILTRO_VIAJEROS_SEARCH_ORDER_AMOUNT:                    'SET_FILTRO_VIAJEROS_SEARCH_ORDER_AMOUNT',
    SET_FILTRO_CALIFICACIONES_SEARCH_ORDER_AMOUNT:              'SET_FILTRO_CALIFICACIONES_SEARCH_ORDER_AMOUNT',
    SET_FILTRO_CALIFICACIONES_CONDUCTOR_SEARCH_ORDER_AMOUNT:    'SET_FILTRO_CALIFICACIONES_CONDUCTOR_SEARCH_ORDER_AMOUNT',
    SET_FILTRO_VIAJES_SEARCH_ORDER_AMOUNT:                      'SET_FILTRO_VIAJES_SEARCH_ORDER_AMOUNT',
    SET_LIMPIAR_FILTROS:                                        'SET_LIMPIAR_FILTROS',
}

export const set_filtro_conductores_search_order_amount = filtro_conductores_search_order_amount => {
    return {
        filtro_conductores_search_order_amount,
        type: filtrostypes.SET_FILTRO_CONDUCTORES_SEARCH_ORDER_AMOUNT
    }
}

export const set_filtro_viajeros_search_order_amount = filtro_viajeros_search_order_amount => {
    return {
        filtro_viajeros_search_order_amount,
        type: filtrostypes.SET_FILTRO_VIAJEROS_SEARCH_ORDER_AMOUNT
    }
}

export const set_filtro_calificaciones_search_order_amount = filtro_calificaciones_search_order_amount => {
    return {
        filtro_calificaciones_search_order_amount,
        type: filtrostypes.SET_FILTRO_CALIFICACIONES_SEARCH_ORDER_AMOUNT
    }
}

export const set_filtro_calificaciones_conductor_search_order_amount = filtro_calificaciones_conductor_search_order_amount => {
    return {
        filtro_calificaciones_conductor_search_order_amount,
        type: filtrostypes.SET_FILTRO_CALIFICACIONES_CONDUCTOR_SEARCH_ORDER_AMOUNT
    }
}

export const set_filtro_viajes_search_order_amount = filtro_viajes_search_order_amount => {
    return {
        filtro_viajes_search_order_amount,
        type: filtrostypes.SET_FILTRO_VIAJES_SEARCH_ORDER_AMOUNT
    }
}

export const set_limpiar_filtros = limpiar_filtros => {
    return {
        limpiar_filtros,
        type: filtrostypes.SET_LIMPIAR_FILTROS
    }
}