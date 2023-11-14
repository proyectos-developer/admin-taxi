import React from 'react'

import icono_taxi from '../../iconos/icono_taxi.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function HomeDashboardTablet({proporcional}) {

  const navigate = useNavigate()

  const [opcion_menu, setOpcionMenu] = useState ('')

  return (
    <div className='' style={{width: 874 / proporcional, marginLeft: 58.5 / proporcional, marginRight: 58.5 / proporcional, paddingTop: 50 / proporcional,
      paddingBottom: 50 / proporcional}}>
      <div className='d-flex' style={{width: 874 / proporcional}}>
          <div className='shadow-lg rounded-circle position-relative' 
              onMouseOver={() => setOpcionMenu('conductores')} onMouseLeave={() => setOpcionMenu('')}
              onClick={() => navigate ('/home/conductores')}
              style={{width: 218.5 / proporcional, height: 218.5 / proporcional, padding: 25 / proporcional, cursor: 'pointer', border: '2px solid rgb(33,33,33, 0.6)'}}>
              <img src={icono_taxi} style={{width: 168.5 / proporcional, height: 168.5 / proporcional}}/>
              {
                  opcion_menu === 'conductores' ? (
                      <div style={{width: 216.5 / proporcional, height: 216.5 / proporcional, background: 'rgb(33,33,33, 0.6)'}} 
                          className='position-absolute top-0 start-0 rounded-circle shadow-sm'>
                          <p className='position-absolute start-50 top-50 translate-middle mb-0' 
                          style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 500, cursor: 'pointer'}}>CONDUCTORES</p>
                      </div>
                  ) : null
              }
          </div>
      </div>
    </div>
  )
}
