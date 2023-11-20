import React from 'react'

import menu_home           from '../../../iconos/icono_menu_home.png'
import menu_taxi           from '../../../iconos/icono_menu_taxi.png'
import menu_usuario        from '../../../iconos/icono_menu_usuario.png'
import menu_calificaciones from '../../../iconos/icono_menu_calificaciones.png'
import menu_viajes         from '../../../iconos/icono_menu_viajes.png'
import menu_estadisticas   from '../../../iconos/icono_menu_estadisticas.png'
import menu_ingresos       from '../../../iconos/icono_menu_ingresos.png'
import menu_cerrar_sesion  from '../../../iconos/icono_menu_cerrar_sesion.png'

import { useNavigate } from 'react-router-dom'

export default function MenuLateralTablet({proporcional}) {

    const navigate = useNavigate()

    const cerrar_sesion = () => {
      
    }

    return (
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
    )
}
