import React, { useEffect } from 'react'

import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { set_open_menu_izquierdo } from '../../redux/actions/menuactions'
import { useDispatch, useSelector } from 'react-redux'

import icono_menu_left     from '../../iconos/menu_left.png'
import icono_menu_right    from '../../iconos/menu_right.png'

import menu_home           from '../../iconos/icono_menu_home.png'
import menu_taxi           from '../../iconos/icono_menu_taxi.png'
import menu_usuario        from '../../iconos/icono_menu_usuario.png'
import menu_calificaciones from '../../iconos/icono_menu_calificaciones.png'
import menu_viajes         from '../../iconos/icono_menu_viajes.png'
import menu_estadisticas   from '../../iconos/icono_menu_estadisticas.png'
import menu_ingresos       from '../../iconos/icono_menu_ingresos.png'
import menu_cerrar_sesion  from '../../iconos/icono_menu_cerrar_sesion.png'

import {begindata} from '../../redux/slice/begindata'
import { beginConstants } from '../../uri/begin-constants'

//import MenuLateral         from './menu/lateral.jsx'

export default function HomePanel({proporcional}) {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const {log_out} = useSelector(({begin}) => begin)

  const [open, setOpen] = useState (false)
  
    useEffect (() => {
        if (log_out && log_out.success === true){
            borrar_datos_sesion()
        }
    }, [log_out])

    const borrar_datos_sesion = async() => {
            window.localStorage.removeItem('correo')
            window.localStorage.removeItem('session_id')
            dispatch (begindata(beginConstants({}, true, 0).log_out))
            navigate('/')
    }

    const cerrar_sesion = () => {
        dispatch (begindata(beginConstants({}, false, 0).log_out))
    }

  return (
    <div style={{width: 1920 / proporcional}}>
        <div className='position-relative' style={{width: 1920 / proporcional, height: 75 / proporcional, background: '#212121', padding: 12.5 / proporcional,
            borderBottom: '1px solid #212121'}}>
            <img src={icono_menu_left} style={{width: 40 / proporcional, height: 40 / proporcional, marginLeft: 20 / proporcional, marginTop: 5 / proporcional,
                  cursor: 'pointer'}} onClick={() => {setOpen (!open); dispatch(set_open_menu_izquierdo(!open))}}
                className='position-absolute start-0'/>
            <p onClick={() => navigate ('/home')} className='position-absolute top-50 start-50 translate-middle'
              style={{fontSize: 42 / proporcional, lineHeight: `${52 / proporcional}px`, color: 'rgba(189, 189, 189, 0.6)', fontWeight: 700 / proporcional, cursor: 'pointer',
                     height: 62 / proporcional, padding: 5 / proporcional}}>
                TAXI 24/7 hr
            </p>
            <p onClick={() => navigate ('/home')} className='position-absolute top-50 start-50 translate-middle'
              style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', fontWeight: 700 / proporcional, cursor: 'pointer',
                     height: 60 / proporcional, padding: 5 / proporcional, marginTop: 2 / proporcional}}>
                TAXI 24/7 hr
            </p>
            <img src={icono_menu_right} style={{width: 40 / proporcional, height: 40 / proporcional, marginRight: 40 / proporcional, marginTop: 5 / proporcional,
                  cursor: 'pointer'}}
                className='position-absolute end-0'/>
        </div>
        {
          open ? (
            <div style={{width: 300 / proporcional, background: 'rgba(39, 39, 39, 0.9)', height: 842 / proporcional, padding: 20 / proporcional, top: 75 / proporcional,
                zIndex: 99999}} 
                className='shadow-sm position-absolute start-0'>
                <div style={{width: 260 / proporcional, height: 57 / proporcional, marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: 260 / proporcional, height: 35 / proporcional, marginBottom: 10 / proporcional, cursor: 'pointer'}} 
                                                    onClick={() => {navigate(''); setOpen(!open)}}>
                    <img src={menu_home} style={{width: 25 / proporcional, height: 25 / proporcional, marginLeft: 5 / proporcional, marginRight: 15 / proporcional,
                        marginTop: 5 / proporcional, marginBottom: 5 / proporcional}}/>
                    <p style={{fontSize: 20 / proporcional, color: 'white', lineHeight: `${35 / proporcional}px`, fontWeight: 500, cursor: 'pointer',
                                marginBottom: 0}}>Inicio</p>
                    </div>
                    <div style={{width: 260 / proporcional, height: 2 / proporcional, background: 'white'}}/>
                </div>
                <div style={{width: 260 / proporcional, height: 57 / proporcional, marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: 260 / proporcional, height: 35 / proporcional, marginBottom: 10 / proporcional, cursor: 'pointer'}}
                    onClick={() => {navigate('conductores'); setOpen(!open)}}>
                    <img src={menu_taxi} style={{width: 25 / proporcional, height: 25 / proporcional, marginLeft: 5 / proporcional, marginRight: 15 / proporcional,
                        marginTop: 5 / proporcional, marginBottom: 5 / proporcional}}/>
                    <p style={{fontSize: 20 / proporcional, color: 'white', lineHeight: `${35 / proporcional}px`, fontWeight: 500, cursor: 'pointer',
                                marginBottom: 0}}>Conductores</p>
                    </div>
                    <div style={{width: 260 / proporcional, height: 2 / proporcional, background: 'white'}}/>
                </div>
                <div style={{width: 260 / proporcional, height: 57 / proporcional, marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: 260 / proporcional, height: 35 / proporcional, marginBottom: 10 / proporcional, cursor: 'pointer'}}
                    onClick={() => {navigate('usuarios'); setOpen(!open)}}>
                    <img src={menu_usuario} style={{width: 25 / proporcional, height: 25 / proporcional, marginLeft: 5 / proporcional, marginRight: 15 / proporcional,
                        marginTop: 5 / proporcional, marginBottom: 5 / proporcional}}/>
                    <p style={{fontSize: 20 / proporcional, color: 'white', lineHeight: `${35 / proporcional}px`, fontWeight: 500, cursor: 'pointer',
                                marginBottom: 0}}>Usuarios</p>
                    </div>
                    <div style={{width: 260 / proporcional, height: 2 / proporcional, background: 'white'}}/>
                </div>
                <div style={{width: 260 / proporcional, height: 57 / proporcional, marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: 260 / proporcional, height: 35 / proporcional, marginBottom: 10 / proporcional, cursor: 'pointer'}}
                    onClick={() => {navigate('calificaciones'); setOpen(!open)}}>
                    <img src={menu_calificaciones} style={{width: 25 / proporcional, height: 25 / proporcional, marginLeft: 5 / proporcional, marginRight: 15 / proporcional,
                        marginTop: 5 / proporcional, marginBottom: 5 / proporcional}}/>
                    <p style={{fontSize: 20 / proporcional, color: 'white', lineHeight: `${35 / proporcional}px`, fontWeight: 500, cursor: 'pointer',
                                marginBottom: 0}}>Calificaciones</p>
                    </div>
                    <div style={{width: 260 / proporcional, height: 2 / proporcional, background: 'white'}}/>
                </div>
                <div style={{width: 260 / proporcional, height: 57 / proporcional, marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: 260 / proporcional, height: 35 / proporcional, marginBottom: 10 / proporcional, cursor: 'pointer'}}
                    onClick={() => {navigate('viajes'); setOpen(!open)}}>
                    <img src={menu_viajes} style={{width: 25 / proporcional, height: 25 / proporcional, marginLeft: 5 / proporcional, marginRight: 15 / proporcional,
                        marginTop: 5 / proporcional, marginBottom: 5 / proporcional}}/>
                    <p style={{fontSize: 20 / proporcional, color: 'white', lineHeight: `${35 / proporcional}px`, fontWeight: 500, cursor: 'pointer',
                                marginBottom: 0}}>Viajes</p>
                    </div>
                    <div style={{width: 260 / proporcional, height: 2 / proporcional, background: 'white'}}/>
                </div>
                <div style={{width: 260 / proporcional, height: 57 / proporcional, marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: 260 / proporcional, height: 35 / proporcional, marginBottom: 10 / proporcional, cursor: 'pointer'}}
                    onClick={() => {navigate('estadisticas'); setOpen(!open)}}>
                    <img src={menu_estadisticas} style={{width: 25 / proporcional, height: 25 / proporcional, marginLeft: 5 / proporcional, marginRight: 15 / proporcional,
                        marginTop: 5 / proporcional, marginBottom: 5 / proporcional}}/>
                    <p style={{fontSize: 20 / proporcional, color: 'white', lineHeight: `${35 / proporcional}px`, fontWeight: 500, cursor: 'pointer',
                                marginBottom: 0}}>Estadísticas</p>
                    </div>
                    <div style={{width: 260 / proporcional, height: 2 / proporcional, background: 'white'}}/>
                </div>
                <div style={{width: 260 / proporcional, height: 57 / proporcional, marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: 260 / proporcional, height: 35 / proporcional, marginBottom: 10 / proporcional, cursor: 'pointer'}}
                    onClick={() => {navigate('ingresos'); setOpen(!open)}}>
                    <img src={menu_ingresos} style={{width: 25 / proporcional, height: 25 / proporcional, marginLeft: 5 / proporcional, marginRight: 15 / proporcional,
                        marginTop: 5 / proporcional, marginBottom: 5 / proporcional}}/>
                    <p style={{fontSize: 20 / proporcional, color: 'white', lineHeight: `${35 / proporcional}px`, fontWeight: 500, cursor: 'pointer',
                                marginBottom: 0}}>Ingreos</p>
                    </div>
                    <div style={{width: 260 / proporcional, height: 2 / proporcional, background: 'white'}}/>
                </div>
                <div style={{width: 260 / proporcional, height: 57 / proporcional, marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: 260 / proporcional, height: 35 / proporcional, marginBottom: 10 / proporcional, cursor: 'pointer'}}
                    onClick={() => {cerrar_sesion(); setOpen(!open)}}>
                    <img src={menu_cerrar_sesion} style={{width: 25 / proporcional, height: 25 / proporcional, marginLeft: 5 / proporcional, marginRight: 15 / proporcional,
                        marginTop: 5 / proporcional, marginBottom: 5 / proporcional}}/>
                    <p style={{fontSize: 20 / proporcional, color: 'white', lineHeight: `${35 / proporcional}px`, fontWeight: 500, cursor: 'pointer',
                                marginBottom: 0}}>Cerrar sesión</p>
                    </div>
                    <div style={{width: 260 / proporcional, height: 2 / proporcional, background: 'white'}}/>
                </div>
            </div>
          ) : null
        }   
        <Outlet/>     
    </div>
  )
}