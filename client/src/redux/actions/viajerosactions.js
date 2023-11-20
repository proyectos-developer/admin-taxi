export const viajerostypes = {
    SET_DATA_VIAJERO: 'SET_DATA_VIAJERO',
}

export const set_data_viajero = data_viajero => {
    return {
        data_viajero,
        type: viajerostypes.SET_DATA_VIAJERO
    }
}