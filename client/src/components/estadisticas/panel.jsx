import React from 'react'
import { Outlet } from 'react-router-dom'

export default function EstadisticasPanel({proporcional}) {
    return (
        <div className='' style={{width: 1480 / proporcional, paddingTop: 50 / proporcional,
            paddingBottom: 50 / proporcional}}>
            <Outlet/>
        </div>
    )
}
