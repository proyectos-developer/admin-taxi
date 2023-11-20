import React from 'react'
import { Outlet } from 'react-router-dom'

export default function IngresosPanelCell({proporcional}) {

    return (
        <div className='' style={{width: 449 / proporcional, paddingTop: 50 / proporcional,
            paddingBottom: 50 / proporcional}}>
            <Outlet/>
        </div>
    )
}
