export const conductorestypes = {
    SET_DATA_CONDUCTOR: 'SET_DATA_CONDUCTOR',
}

export const set_data_conductor = data_conductor => {
    return {
        data_conductor,
        type: conductorestypes.SET_DATA_CONDUCTOR
    }
}