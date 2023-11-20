import React from 'react'

import icono_taxi from '../../iconos/icono_taxi.png'
import icono_viajeros from '../../iconos/icono_viajeros.png'
import icono_viajes from '../../iconos/icono_viajes.png'
import icono_calificaciones from '../../iconos/icono_calificaciones.png'
import icono_estadisticas from '../../iconos/icono_estadisticas.png'
import icono_ingresos from '../../iconos/icono_ingresos.png'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function HomeDashboardCell({proporcional}) {

  const navigate = useNavigate()

  const [opcion_menu, setOpcionMenu] = useState ('')

  return (
    <div className='' style={{width: 499 / proporcional, paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 50 / proporcional,
      paddingBottom: 50 / proporcional}}>
        <div style={{width: 250 / proporcional, height: 300 / proporcional, marginRight: 74.5 / proporcional, marginLeft: 74.5 / proporcional, marginBottom: 25 / proporcional}}>
          <div className='shadow-lg rounded-circle position-relative' 
              onMouseOver={() => setOpcionMenu('conductores')} onMouseLeave={() => setOpcionMenu('')}
              onClick={() => navigate ('conductores')}
              style={{cursor: 'pointer', width: 250 / proporcional, height: 250 / proporcional, padding: 50 / proporcional, border: '2px solid rgb(33,33,33, 0.6)'}}>
              <img src={icono_taxi} style={{width: 150 / proporcional, height: 150 / proporcional}}/>
              {
                  opcion_menu === 'conductores' ? (
                      <div style={{cursor: 'pointer', width: 248 / proporcional, height: 248 / proporcional, background: 'rgb(33,33,33, 0.6)'}} 
                          className='position-absolute top-0 start-0 rounded-circle shadow-sm'>
                      </div>
                  ) : null
              }
          </div>
          <p style={{fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#212121', fontWeight: 500, textAlign: 'center', cursor: 'default'}}>CONDUCTORES</p>
        </div>
        <div style={{width: 250 / proporcional, height: 300 / proporcional, marginLeft: 74.5 / proporcional, marginLeft: 74.5 / proporcional, marginBottom: 25 / proporcional}}>
          <div className='shadow-lg rounded-circle position-relative' 
              onMouseOver={() => setOpcionMenu('usuarios')} onMouseLeave={() => setOpcionMenu('')}
              onClick={() => navigate ('usuarios')}
              style={{cursor: 'pointer', width: 250 / proporcional, height: 250 / proporcional, padding: 50 / proporcional, border: '2px solid rgb(33,33,33, 0.6)'}}>
              <img src={icono_viajeros} style={{width: 150 / proporcional, height: 150 / proporcional}}/>
              {
                  opcion_menu === 'usuarios' ? (
                      <div style={{cursor: 'pointer', width: 248 / proporcional, height: 248 / proporcional, background: 'rgb(33,33,33, 0.6)'}} 
                          className='position-absolute top-0 start-0 rounded-circle shadow-sm'>
                      </div>
                  ) : null
              }
          </div>
          <p style={{fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#212121', fontWeight: 500, textAlign: 'center', cursor: 'default'}}>USUARIOS</p>
        </div>
        <div style={{width: 250 / proporcional, height: 300 / proporcional, marginRight: 74.5 / proporcional, marginLeft: 74.5 / proporcional, marginBottom: 25 / proporcional}}>
          <div className='shadow-lg rounded-circle position-relative' 
            onMouseOver={() => setOpcionMenu('calificaciones')} onMouseLeave={() => setOpcionMenu('')}
            onClick={() => navigate ('calificaciones')}
            style={{cursor: 'pointer', width: 250 / proporcional, height: 250 / proporcional, padding: 50 / proporcional, border: '2px solid rgb(33,33,33, 0.6)'}}>
            <img src={icono_calificaciones} style={{width: 150 / proporcional, height: 150 / proporcional}}/>
            {
                opcion_menu === 'calificaciones' ? (
                    <div style={{cursor: 'pointer', width: 248 / proporcional, height: 248 / proporcional, background: 'rgb(33,33,33, 0.6)'}} 
                        className='position-absolute top-0 start-0 rounded-circle shadow-sm'>
                    </div>
                ) : null
            }
          </div>
          <p style={{fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#212121', fontWeight: 500, textAlign: 'center', cursor: 'default'}}>CALIFICACIONES</p>
        </div>
        <div style={{width: 250 / proporcional, height: 300 / proporcional, marginLeft: 74.5 / proporcional, marginLeft: 74.5 / proporcional, marginBottom: 25 / proporcional}}>
          <div className='shadow-lg rounded-circle position-relative' 
              onMouseOver={() => setOpcionMenu('viajes')} onMouseLeave={() => setOpcionMenu('')}
              onClick={() => navigate ('viajes')}
              style={{cursor: 'pointer', width: 250 / proporcional, height: 250 / proporcional, padding: 50 / proporcional, border: '2px solid rgb(33,33,33, 0.6)'}}>
              <img src={icono_viajes} style={{width: 150 / proporcional, height: 150 / proporcional}}/>
              {
                  opcion_menu === 'viajes' ? (
                      <div style={{cursor: 'pointer', width: 248 / proporcional, height: 248 / proporcional, background: 'rgb(33,33,33, 0.6)'}} 
                          className='position-absolute top-0 start-0 rounded-circle shadow-sm'>
                      </div>
                  ) : null
              }
            </div>
            <p style={{fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#212121', fontWeight: 500, textAlign: 'center', cursor: 'default'}}>VIAJES</p>
        </div>
        <div style={{width: 250 / proporcional, height: 300 / proporcional, marginRight: 74.5 / proporcional, marginLeft: 74.5 / proporcional, marginBottom: 25 / proporcional}}>
          <div className='shadow-lg rounded-circle position-relative' 
              onMouseOver={() => setOpcionMenu('estadisticas')} onMouseLeave={() => setOpcionMenu('')}
              onClick={() => navigate ('estadisticas')}
              style={{cursor: 'pointer', width: 250 / proporcional, height: 250 / proporcional, padding: 50 / proporcional, border: '2px solid rgb(33,33,33, 0.6)'}}>
              <img src={icono_estadisticas} style={{width: 150 / proporcional, height: 150 / proporcional}}/>
              {
                  opcion_menu === 'estadisticas' ? (
                      <div style={{cursor: 'pointer', width: 248 / proporcional, height: 248 / proporcional, background: 'rgb(33,33,33, 0.6)'}} 
                          className='position-absolute top-0 start-0 rounded-circle shadow-sm'>
                      </div>
                  ) : null
              }
          </div>
          <p style={{fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#212121', fontWeight: 500, textAlign: 'center', cursor: 'default'}}>ESTADÍSTICAS</p>
        </div>
        <div style={{width: 250 / proporcional, height: 300 / proporcional, marginLeft: 74.5 / proporcional, marginLeft: 74.5 / proporcional, marginBottom: 25 / proporcional}}>
          <div className='shadow-lg rounded-circle position-relative' 
              onMouseOver={() => setOpcionMenu('ingresos')} onMouseLeave={() => setOpcionMenu('')}
              onClick={() => navigate ('ingresos')}
              style={{cursor: 'pointer', width: 250 / proporcional, height: 250 / proporcional, padding: 50 / proporcional, border: '2px solid rgb(33,33,33, 0.6)'}}>
              <img src={icono_ingresos} style={{width: 150 / proporcional, height: 150 / proporcional}}/>
              {
                  opcion_menu === 'ingresos' ? (
                      <div style={{cursor: 'pointer', width: 248 / proporcional, height: 248 / proporcional, background: 'rgb(33,33,33, 0.6)'}} 
                          className='position-absolute top-0 start-0 rounded-circle shadow-sm'>
                      </div>
                  ) : null
              }
          </div>
          <p style={{fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#212121', fontWeight: 500, textAlign: 'center', cursor: 'default'}}>INGRESOS</p>
        </div>
    </div>
  )
}
