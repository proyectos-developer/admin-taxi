import React from 'react'

import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import icono_menu_left from '../../assets/iconos/menu_left.png'
import icono_menu_right from '../../assets/iconos/menu_right.png'

import { set_open_menu_izquierdo } from '../../redux/actions/menuactions'
import { useDispatch } from 'react-redux'

export default function HomePanel({proporcional}) {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [open, setOpen] = useState (false)

  const cerrar_sesion = () => {
    
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
        <div className='d-flex'>
          {
            open ? (
              <div style={{width: 250 / proporcional, background: 'rgba(39, 39, 39, 0.6)', height: 842 / proporcional, padding: 20 / proporcional}} className='shadow-sm'>
                <div style={{width: 210 / proporcional, height: 52}}>
                  <p style={{fontSize: 20 / proporcional, color: 'white', lineHeight: `${35 / proporcional}px`, fontWeight: 500, cursor: 'pointer',
                            marginBottom: 5}} onClick={() => navigate('home/conductores')}>Conductores</p>
                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'white'}}/>
                </div>
                <div style={{width: 210 / proporcional, height: 52}}>
                  <p style={{fontSize: 20 / proporcional, color: 'white', lineHeight: `${35 / proporcional}px`, fontWeight: 500, cursor: 'pointer',
                            marginBottom: 5}} onClick={() => navigate('home/usuarios')}>Usuarios</p>
                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'white'}}/>
                </div>
                <div style={{width: 210 / proporcional, height: 52}}>
                  <p style={{fontSize: 20 / proporcional, color: 'white', lineHeight: `${35 / proporcional}px`, fontWeight: 500, cursor: 'pointer',
                            marginBottom: 5}} onClick={() => navigate('home/viajes')}>Viajes</p>
                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'white'}}/>
                </div>
                <div style={{width: 210 / proporcional, height: 52}}>
                  <p style={{fontSize: 20 / proporcional, color: 'white', lineHeight: `${35 / proporcional}px`, fontWeight: 500, cursor: 'pointer',
                            marginBottom: 5}} onClick={() => navigate('home/estadisticas')}>Estadísticas</p>
                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'white'}}/>
                </div>
                <div style={{width: 210 / proporcional, height: 52}}>
                  <p style={{fontSize: 20 / proporcional, color: 'white', lineHeight: `${35 / proporcional}px`, fontWeight: 500, cursor: 'pointer',
                            marginBottom: 5}} onClick={() => navigate('home/ingresos')}>Ingresos</p>
                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'white'}}/>
                </div>
                <div style={{width: 210 / proporcional, height: 52}}>
                  <p style={{fontSize: 20 / proporcional, color: 'white', lineHeight: `${35 / proporcional}px`, fontWeight: 500, cursor: 'pointer',
                            marginBottom: 5}} onClick={() => cerrar_sesion()}>Cerrar sesión</p>
                  <div style={{width: 210 / proporcional, height: 2 / proporcional, background: 'white'}}/>
                </div>
              </div>
            ) : null
          }   
          <Outlet/>     
        </div>
    </div>
  )
}