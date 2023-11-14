import React from 'react'

import icono_taxi from '../../iconos/icono_taxi.png'
import icono_viajeros from '../../iconos/icono_viajeros.png'
import icono_viajes from '../../iconos/icono_viajes.png'
import icono_estadisticas from '../../iconos/icono_estadisticas.png'
import icono_ingresos from '../../iconos/icono_ingresos.png'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function HomeDashboard({proporcional}) {

  const navigate = useNavigate()

  const [opcion_menu, setOpcionMenu] = useState ('')
  const {open_menu_izquierdo} = useSelector(({menu}) => menu)

  return (
    <div className='' 
      style={{width: open_menu_izquierdo ? 1230 / proporcional : 1480 / proporcional, marginLeft: 220 / proporcional,
              marginRight: 220 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
      <div className='d-flex' style={{width: open_menu_izquierdo ? 1230 / proporcional : 1480 / proporcional, marginBottom: 100 / proporcional}}>
          <div style={{width: 250 / proporcional, height: 300 / proporcional, marginRight: open_menu_izquierdo ? 120 / proporcional : 182.5 / proporcional}}>
            <div className='shadow-lg rounded-circle position-relative' 
                onMouseOver={() => setOpcionMenu('conductores')} onMouseLeave={() => setOpcionMenu('')}
                onClick={() => navigate ('/home/conductores')}
                style={{cursor: 'pointer', width: 250 / proporcional, height: 250 / proporcional, padding: 50 / proporcional, border: '2px solid rgb(33,33,33, 0.6)'}}>
                <img src={icono_taxi} style={{width: 150 / proporcional, height: 150 / proporcional}}/>
                {
                    opcion_menu === 'conductores' ? (
                        <div style={{cursor: 'pointer', width: 248 / proporcional, height: 248 / proporcional, background: 'rgb(33,33,33, 0.6)'}} 
                            className='position-absolute top-0 start-0 rounded-circle shadow-sm'>
                            <p className='position-absolute start-50 top-50 translate-middle mb-0' 
                            style={{fontSize: 30 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', fontWeight: 500, cursor: 'default'}}>CONDUCTORES</p>
                        </div>
                    ) : null
                }
            </div>
            <p style={{fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#212121', fontWeight: 500, textAlign: 'center'}}>CONDUCTORES</p>
          </div>
          <div style={{width: 250 / proporcional, height: 300 / proporcional,
                        marginRight: open_menu_izquierdo ? 120 / proporcional : 182.5 / proporcional, marginLeft: open_menu_izquierdo ? 120 / proporcional : 182.5 / proporcional}}>
            <div className='shadow-lg rounded-circle position-relative' 
                onMouseOver={() => setOpcionMenu('usuarios')} onMouseLeave={() => setOpcionMenu('')}
                onClick={() => navigate ('/home/usuarios')}
                style={{cursor: 'pointer', width: 250 / proporcional, height: 250 / proporcional, padding: 50 / proporcional, border: '2px solid rgb(33,33,33, 0.6)'}}>
                <img src={icono_viajeros} style={{width: 150 / proporcional, height: 150 / proporcional}}/>
                {
                    opcion_menu === 'usuarios' ? (
                        <div style={{cursor: 'pointer', width: 248 / proporcional, height: 248 / proporcional, background: 'rgb(33,33,33, 0.6)'}} 
                            className='position-absolute top-0 start-0 rounded-circle shadow-sm'>
                            <p className='position-absolute start-50 top-50 translate-middle mb-0' 
                            style={{fontSize: 30 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', fontWeight: 500, cursor: 'default'}}>USUARIOS</p>
                        </div>
                    ) : null
                }
            </div>
            <p style={{fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#212121', fontWeight: 500, textAlign: 'center'}}>USUARIOS</p>
          </div>
          <div style={{width: 250 / proporcional, height: 300 / proporcional, marginLeft: open_menu_izquierdo ? 120 / proporcional : 182.5 / proporcional}}>
            <div className='shadow-lg rounded-circle position-relative' 
              onMouseOver={() => setOpcionMenu('viajes')} onMouseLeave={() => setOpcionMenu('')}
              onClick={() => navigate ('/home/viajes')}
              style={{cursor: 'pointer', width: 250 / proporcional, height: 250 / proporcional, padding: 50 / proporcional, border: '2px solid rgb(33,33,33, 0.6)'}}>
              <img src={icono_viajes} style={{width: 150 / proporcional, height: 150 / proporcional}}/>
              {
                  opcion_menu === 'viajes' ? (
                      <div style={{cursor: 'pointer', width: 248 / proporcional, height: 248 / proporcional, background: 'rgb(33,33,33, 0.6)'}} 
                          className='position-absolute top-0 start-0 rounded-circle shadow-sm'>
                          <p className='position-absolute start-50 top-50 translate-middle mb-0' 
                          style={{fontSize: 30 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', fontWeight: 500, cursor: 'default'}}>VIAJES</p>
                      </div>
                  ) : null
              }
            </div>
            <p style={{fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#212121', fontWeight: 500, textAlign: 'center'}}>VIAJES</p>
          </div>
        </div>
        <div className='d-flex' style={{width: open_menu_izquierdo ? 1230 / proporcional : 1480 / proporcional, marginTop: 100 / proporcional}}>
          <div style={{width: 250 / proporcional, height: 300 / proporcional,
                        marginLeft: open_menu_izquierdo ? 241.5 : 300 / proporcional, marginRight: open_menu_izquierdo ? 123.5 : 190 / proporcional}}>
            <div className='shadow-lg rounded-circle position-relative' 
                onMouseOver={() => setOpcionMenu('estadisticas')} onMouseLeave={() => setOpcionMenu('')}
                onClick={() => navigate ('/home/estadisticas')}
                style={{cursor: 'pointer', width: 250 / proporcional, height: 250 / proporcional, padding: 50 / proporcional, border: '2px solid rgb(33,33,33, 0.6)'}}>
                <img src={icono_estadisticas} style={{width: 150 / proporcional, height: 150 / proporcional}}/>
                {
                    opcion_menu === 'estadisticas' ? (
                        <div style={{cursor: 'pointer', width: 248 / proporcional, height: 248 / proporcional, background: 'rgb(33,33,33, 0.6)'}} 
                            className='position-absolute top-0 start-0 rounded-circle shadow-sm'>
                            <p className='position-absolute start-50 top-50 translate-middle mb-0' 
                            style={{fontSize: 30 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', fontWeight: 500, cursor: 'default'}}>ESTADÍSTICAS</p>
                        </div>
                    ) : null
                }
              </div>
              <p style={{fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#212121', fontWeight: 500, textAlign: 'center'}}>ESTADÍSTICAS</p>
          </div>
          <div style={{width: 250 / proporcional, height: 300 / proporcional,
                        marginRight: open_menu_izquierdo ?  241.5 : 300 / proporcional, marginLeft: open_menu_izquierdo ? 123.5 : 190 / proporcional}}>
            <div className='shadow-lg rounded-circle position-relative' 
                onMouseOver={() => setOpcionMenu('ingresos')} onMouseLeave={() => setOpcionMenu('')}
                onClick={() => navigate ('/home/ingresos')}
                style={{cursor: 'pointer', width: 250 / proporcional, height: 250 / proporcional, padding: 50 / proporcional, border: '2px solid rgb(33,33,33, 0.6)'}}>
                <img src={icono_ingresos} style={{width: 150 / proporcional, height: 150 / proporcional}}/>
                {
                    opcion_menu === 'ingresos' ? (
                        <div style={{cursor: 'pointer', width: 248 / proporcional, height: 248 / proporcional, background: 'rgb(33,33,33, 0.6)'}} 
                            className='position-absolute top-0 start-0 rounded-circle shadow-sm'>
                            <p className='position-absolute start-50 top-50 translate-middle mb-0' 
                            style={{fontSize: 30 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', fontWeight: 500, cursor: 'default'}}>INGRESOS</p>
                        </div>
                    ) : null
                }
            </div>
            <p style={{fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#212121', fontWeight: 500, textAlign: 'center'}}>INGRESOS</p>
          </div>
      </div>
    </div>
  )
}
