import React from 'react'

import icono_taxi from '../../iconos/icono_taxi.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function HomeDashboardCell({proporcional}) {

  const navigate = useNavigate()

  const [opcion_menu, setOpcionMenu] = useState ('')

  return (
    <div className='' style={{width: 459 / proporcional, marginLeft: 20 / proporcional, marginRight: 20 / proporcional, paddingTop: 50 / proporcional,
      paddingBottom: 50 / proporcional}}>
      <div className='d-flex' style={{width: 459 / proporcional}}>
          <div className='shadow-lg rounded-circle position-relative' 
              onMouseOver={() => setOpcionMenu('conductores')} onMouseLeave={() => setOpcionMenu('')}
              onClick={() => navigate ('/home/conductores')}
              style={{width: 229.5 / proporcional, height: 229.5 / proporcional, padding: 25 / proporcional, cursor: 'pointer', border: '2px solid rgb(33,33,33, 0.6)'}}>
              <img src={icono_taxi} style={{width: 179.5 / proporcional, height: 179.5 / proporcional}}/>
              <div style={{width: 229.5 / proporcional, height: 229.5 / proporcional, background: 'rgb(33,33,33, 0.4)'}} 
                  className='position-absolute top-0 start-0 rounded-circle shadow-sm'>
                  <p className='position-absolute start-50 top-50 translate-middle mb-0' 
                  style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 500, cursor: 'pointer'}}>CONDUCTORES</p>
              </div>
          </div>
      </div>
    </div>
  )
}
