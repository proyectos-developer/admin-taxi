import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

export default function ConductoresPanel({proporcional}) {
  
  const {open_menu_izquierdo} = useSelector(({menu}) => menu)

  return (
    <div className='' style={{width: 1480 / proporcional, paddingTop: 50 / proporcional,
      paddingBottom: 50 / proporcional}}>
      <Outlet/>
    </div>
  )
}
