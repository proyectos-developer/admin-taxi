export const menutypes = {
    SET_OPEN_MENU_IZQUIERDO: 'SET_OPEN_MENU_IZQUIERDO'
}

export const set_open_menu_izquierdo = open_menu_izquierdo => {
    return {
        open_menu_izquierdo,
        type: menutypes.SET_OPEN_MENU_IZQUIERDO
    }
}