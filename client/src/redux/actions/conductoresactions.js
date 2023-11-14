export const conductorestypes = {
    SET_DATA_CONDUCTOR: 'SET_DATA_CONDUCTOR',
    SET_DATA_CONDUCTOR_NEW: 'SET_DATA_CONDUCTOR_NEW',
    SET_CONDUCTOR_DELETE: 'SET_CONDUCTOR_DELETE',

    SET_NOMBRE_DELETE: 'SET_NOMBRE_DELETE'
}

export const set_data_conductor = data_conductor => {
    return {
        data_conductor,
        type: conductorestypes.SET_DATA_CONDUCTOR
    }
}

export const set_conductor_new = conductor_new => {
    return {
        conductor_new,
        type: conductorestypes.SET_DATA_CONDUCTOR_NEW
    }
}

export const set_conductor_delete = conductor_delete => {
    return {
        conductor_delete,
        type: conductorestypes.SET_CONDUCTOR_DELETE
    }
}

export const set_nombre_delete = nombre_delete => {
    return {
        nombre_delete,
        type: conductorestypes.SET_NOMBRE_DELETE
    }
}