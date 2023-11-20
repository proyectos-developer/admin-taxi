export const viajestypes = {
    SET_DATA_VIAJE: 'SET_DATA_VIAJE',
}

export const set_data_viaje = data_viaje => {
    return {
        data_viaje,
        type: viajestypes.SET_DATA_VIAJE
    }
}