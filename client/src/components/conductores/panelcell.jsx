import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ConductoresPanelCell({proporcional}) {
  return (
    <div className='' style={{width: 499 / proporcional, paddingTop: 50 / proporcional,
      paddingBottom: 50 / proporcional}}>
      <Outlet/>
    </div>
  )
}
