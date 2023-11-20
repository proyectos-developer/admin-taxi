import { constantes } from "./constantes"

export const viajesConstants = (id = 1, order_by = '', order = '', begin = 0, cantidad = 16, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        get_viajes_filtro_total: {
            path: `viajes/ordenar/${order_by}/${order}/${begin}/${cantidad}`,
            stateType: 'get_viajes_filtro_total',
            reset: reset
        }
    }
}