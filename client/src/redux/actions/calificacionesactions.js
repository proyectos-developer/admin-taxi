export const calificacionestypes = {
    SET_DATA_CALIFICACION: 'SET_DATA_CALIFICACION',
}

export const set_data_calificacion = data_calificacion => {
    return {
        data_calificacion,
        type: calificacionestypes.SET_DATA_CALIFICACION
    }
}