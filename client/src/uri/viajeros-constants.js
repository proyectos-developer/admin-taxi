import { constantes } from "./constantes"

export const viajerosConstants = (id = 1, search = '', order_by = '', order = '', begin = 0, cantidad = 16, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        update_estado_viajero: {
            path: `viajero/estado/${id}`,
            stateType: 'update_estado_viajero',
            data: data,
            reset: reset
        },
        get_viajero: {
            path: `viajero/${id}`,
            stateType: 'get_viajero',
            reset: reset
        },
        get_viajeros_filtro_total: {
            path: `viajeros/buscar/${search}/ordenar/${order_by}/${order}/${begin}/${cantidad}`,
            stateType: 'get_viajeros_filtro_total',
            reset: reset
        }
    }
}