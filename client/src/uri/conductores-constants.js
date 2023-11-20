import { constantes } from "./constantes"

export const conductoresConstants = (id = 1, search = '', order_by = '', order = '', filtro = '', id_filtro = '', begin = 0, cantidad = 16, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        update_estado_conductor: {
            path: `conductor/estado/${id}`,
            stateType: 'update_estado_conductor',
            data: data,
            reset: reset
        },
        get_conductor: {
            path: `conductor/${id}`,
            stateType: 'get_conductor',
            reset: reset
        },
        get_conductores_filtro_total: {
            path: `conductores/buscar/${search}/ordenar/${order_by}/${order}/filtrados/${filtro}/${id_filtro}/${begin}/${cantidad}`,
            stateType: 'get_conductores_filtro_total',
            reset: reset
        }
    }
}