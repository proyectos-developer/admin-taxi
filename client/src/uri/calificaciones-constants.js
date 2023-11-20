import { constantes } from "./constantes"

export const calificacionesConstants = (id = 1, order_by = '', order = '', begin = 0, cantidad = 16, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        get_calificaciones_filtro_total: {
            path: `calificaciones/ordenar/${order_by}/${order}/${begin}/${cantidad}`,
            stateType: 'get_calificaciones_filtro_total',
            reset: reset
        },
        get_calificaciones_conductor: {
            path: `calificaciones/conductor/${id}/${begin}/${cantidad}`,
            stateType: 'get_calificaciones_conductor',
            reset: reset
        }
    }
}