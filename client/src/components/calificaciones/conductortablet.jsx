import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {calificacionesdata} from '../../redux/slice/calificacionesdata'
import {calificacionesConstants} from '../../uri/calificaciones-constants'

import { set_filtro_calificaciones_conductor_search_order_amount, set_limpiar_filtros } from '../../redux/actions/filtrosactions.js'

import clean from '../../iconos/clean_grey.png'
import left from '../../iconos/left_grey.png'
import right from '../../iconos/right_grey.png'

import CardCalificacionConductorTablet from './cards/calificacionconductortablet.jsx'

export default function CalificacionesConductorTablet({proporcional}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [boton_filtro, setBotonFiltro] = useState (false)
    
    const [filtros, setFiltros] = useState ({})
    const [order_by, setOrderBy] = useState ('')
    const [calificaciones, setCalificaciones] = useState ([])
    const [lista_calificaciones, setListaCalificaciones] = useState ([])
    const [total_calificaciones, setTotalCalificaciones] = useState (0)
    const [count_indice, setCountIndice] = useState (0)
    const [show_ordenar_por, setShowOrdenarPor] = useState (false)
    const [seleccionar_ordenarpor, setSeleccionarOrdenarPor] = useState (false)
    const [nombres, setNombres] = useState ('')

    const [begin, setBegin] = useState (0)
    const [amount, setAmount] = useState (8)
    
    const [boton_anteriores, setBotonAnteriores] = useState (false)
    const [boton_posteriores, setBotonPosteriores] = useState (false)

    const {data_calificacion} = useSelector(({calificacionesreducer}) => calificacionesreducer)
    const {get_calificaciones_conductor} = useSelector (({calificaciones}) => calificaciones)
    const {filtro_calificaciones_conductor_search_order_amount} = useSelector(({filtrosreducer}) => filtrosreducer)

    useEffect (() => {
      if (data_calificacion && data_calificacion.calificacion.conductor){
        setNombres(data_calificacion.calificacion.nombres + ' ' + data_calificacion.calificacion.apellidos)
        dispatch(calificacionesdata(calificacionesConstants(data_calificacion.calificacion.conductor, 0, 0, 0, 8, false).get_calificaciones_conductor))
      }
    }, [data_calificacion])

    useEffect(() => {
        setFiltros(filtro_calificaciones_conductor_search_order_amount)
    }, [filtro_calificaciones_conductor_search_order_amount])

    useEffect (() => {
        if (get_calificaciones_conductor && get_calificaciones_conductor.calificaciones && get_calificaciones_conductor.success === true){
            if (get_calificaciones_conductor.total_calificaciones){setTotalCalificaciones(get_calificaciones_conductor.total_calificaciones)}
            setCalificaciones (get_calificaciones_conductor.calificaciones)
            setListaCalificaciones (get_calificaciones_conductor.calificaciones)
        }
    }, [get_calificaciones_conductor])

    const ordenar_por_filtro = (value) => {
        setOrderBy(value)
        setBegin (0)
        dispatch (set_filtro_calificaciones_conductor_search_order_amount({pagina: 'calificaciones_conductor', id: id, begin: 0, amount: 8}))
        dispatch(calificacionesdata(calificacionesConstants(data_calificacion.conductor, 0, 0, 0, 8, false).get_calificaciones_conductor))
    }

    const siguiente_calificaciones = () => {
        setCountIndice(count_indice + 1)
        window.scrollTo (0, 0); 
        setBegin (filtros.begin + amount)
        const inicio = filtros.begin + amount
        const cantidad = filtros.amount
        setBotonPosteriores(false)
        dispatch(set_filtro_calificaciones_conductor_search_order_amount({pagina: 'calificaciones_conductor', id: id, begin: inicio, amount: cantidad}))
        dispatch(calificacionesdata(calificacionesConstants(data_calificacion.conductor, 0, 0, inicio, cantidad, false).get_calificaciones_conductor))
    }

    const anteriores_calificaciones = () => {
        setCountIndice(count_indice - 1)
        window.scrollTo (0, 0); 
        setBegin (filtros.begin - amount)
        const inicio = filtros.begin - amount
        const cantidad = filtros.amount
        setBotonAnteriores(false)
        dispatch(set_filtro_calificaciones_conductor_search_order_amount({pagina: 'calificaciones_conductor', id: id, begin: inicio, amount: cantidad}))
        dispatch(calificacionesdata(calificacionesConstants(data_calificacion.conductor, 0, 0, inicio, cantidad, false).get_calificaciones_conductor))
    }

    const limpiar_filtros = () => {
        setBegin (0)
        setOrderBy('')
        dispatch(set_filtro_calificaciones_conductor_search_order_amount({pagina: '', id: 0, search: 0, order_by: 0, order: 0, begin: 0, amount: 8}))
        dispatch (calificacionesdata (calificacionesConstants(data_calificacion.conductor, 0, 0, 0, 8, false).get_calificaciones_conductor))
        dispatch (set_limpiar_filtros({limpiar_filtros: true}))
    }

    useEffect (() => {
        return () => {
        }
    }, [])

    return ( 
        <div className='position-relative' style={{width: 976 / proporcional, paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional}}>
            <div className='d-flex' style={{width: 876 / proporcional, height: 50 / proporcional, marginBottom: 12.5 / proporcional }}>
                <p className='mb-0' 
                    style={{fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 400, color: '#212121', 
                            marginRight: 20 / proporcional, fontFamily: `'Lora', serif`}}>
                    CALIFICACIONES:
                </p>
                <p className='mb-0' 
                    style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 500, color: '#757575',  
                            fontFamily: `Mukta, sans-serif`}}>
                    mostrando del {begin} al {begin + calificaciones.length} de {total_calificaciones} calificaciones
                </p>
                {/**<div className='' style={{width: 350 / proporcional, height: 50 / proporcional, marginLeft: 10 / proporcional, marginRight: 10 / proporcional}}>
                    <div className='d-flex shadow-sm bg-white rounded' 
                        style={{width: 350 / proporcional, height: 50 / proporcional, border: '1px solid #B2DFDB', borderRadius: 4 / proporcional, marginLeft: 10 / proporcional,
                                marginRight: 10 / proporcional}}>
                        <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, heigh: 48 / proporcional, fontSize: 16 / proporcional, 
                                lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Ordenar por:</p>
                        <input
                            style={{width: 242 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`, fontWeight: 500, color: '#212121',
                                    cursor: 'default', fontFamily: 'Mukta, sans-serif'}}
                            className='form-select fira-fans-sans-serif border-0'
                            onClick={() => setShowOrdenarPor (true)}
                            onFocus={() => setShowOrdenarPor (true)}
                            onChange={() => setOrderBy(order_by)}
                            defaultValue={order_by === '' ? 'Seleccionar' : order_by.split ('-')[0] === 'created_at' ? 'conductores creados' : order_by.split ('-')[0] + ' ' + (order_by.split('-')[1] === 'asc' ? 'ascendente' : 'descendente')}
                        />
                    </div>
                    {
                        show_ordenar_por ? (
                            <div className='position-absolute h-100' style={{background: 'rgba(189, 189, 189, 0.4)', zIndex: 90000, width: 976 / proporcional,
                                    left: 0 / proporcional, top: -50 / proporcional}} onClick={() => setShowOrdenarPor(false)}>
                                <div className='position-absolute shadow-lg bg-body rounded' 
                                    style={{width: 350 / proporcional, padding: 10 / proporcional, background: 'white', borderRadius: 4 / proporcional, top: 100 / proporcional, zIndex: 9999, 
                                            left: 1000 / proporcional}}>
                                    <p className='mb-0'
                                        style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', fontWeight: 500, cursor: 'default', textAlign: 'center',
                                                marginBottom: 7.5 / proporcional, fontFamily: 'Mukta, sans-serif'}}>
                                            Seleccionar filtro
                                    </p>
                                    <div style={{width: 330 / proporcional, height: 2 / proporcional, border: '1px dashed #BDBDBD', marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}/>
                                    <div style={{width: 330 / proporcional, minHeight: 40 / proporcional, maxHeight: 100 / proporcional, height: 'auto', padding: 2 / proporcional}} className='overflow-auto'>
                                        {
                                            constantes().lista_ordenar_conductores.map ((ordenar, index) => {
                                                return (
                                                    <p key={index} className='mb-0 cursor-pointer' onClick={() => {ordenar_por_filtro(ordenar.ordenar_por); setShowOrdenarPor(false)}}
                                                        onMouseOver={() => setSeleccionarOrdenarPor (ordenar.ordenar_por)} onMouseLeave={() => setSeleccionarOrdenarPor('')}
                                                        style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, color: seleccionar_ordenarpor === ordenar.ordenar_por ? 'white' : '#212121', fontWeight: 500, 
                                                                background: seleccionar_ordenarpor === ordenar.ordenar_por ? '#BDBDBD' : 'white', marginTop: 5 / proporcional, marginBottom: 7.5 / proporcional, borderRadius: 4 / proporcional,
                                                                fontFamily: 'Mukta, sans-serif', cursor: 'pointer'}}>
                                                            {ordenar.ordenar}
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>
                                    <div style={{width: 330 / proporcional, height: 2 / proporcional, border: '1px dashed #BDBDBD', marginTop: 5 / proporcional, marginBottom: 5 / proporcional}}/>
                                    <p className='mb-0 cursor-pointer' onClick={() => setShowOrdenarPor(false)}
                                            onMouseOver={() => setSeleccionarOrdenarPor ('Cerrar')} onMouseLeave={() => setSeleccionarOrdenarPor('')}
                                            style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, color: seleccionar_ordenarpor === 'Cerrar' ? 'white' : '#212121', fontWeight: 500, 
                                                    background: seleccionar_ordenarpor === 'Cerrar' ? '#BDBDBD' : 'white', marginTop: 5 / proporcional, marginBottom: 7.5 / proporcional, borderRadius: 4 / proporcional,
                                                    fontFamily: 'Mukta, sans-serif', cursor: 'pointer'}}>
                                            Cerrar
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>**/}
                <div className='d-flex' style={{width: 350 / proporcional, height: 50 / proporcional}}>
                    <div className='d-flex justify-content-start' style={{width: 175 / proporcional, paddingLeft: 15 / proporcional}}>
                        {
                            begin !== 0 && calificaciones.length > 0 ? (
                                <img className='cursor-pointer' 
                                    src={left} style={{cursor: 'pointer', width: boton_anteriores ? 25 / proporcional : 35 / proporcional, height: boton_anteriores ? 25 / proporcional : 35 / proporcional,
                                                        margin: boton_anteriores ? 12.5 / proporcional : 7.5 / proporcional}} alt='' 
                                    onMouseOver={() => setBotonAnteriores(true)} onMouseLeave={() => setBotonAnteriores(false)} onClick={() => {anteriores_calificaciones(); setBotonAnteriores(false)}}/>
                            ) : null
                        }
                    </div>
                    <div className='d-flex justify-content-end' style={{width: 175 / proporcional}}>
                        {
                            calificaciones.length > 0 && begin + amount < total_calificaciones  ? (
                                <img className='cursor-pointer' 
                                    src={right} style={{cursor: 'pointer', width: boton_posteriores ? 25 / proporcional : 35 / proporcional, height: boton_posteriores ? 25 / proporcional : 35 / proporcional,
                                                        margin: boton_posteriores ? 12.5 / proporcional : 7.5 / proporcional}} alt='' 
                                    onMouseOver={() => setBotonPosteriores(true)} onMouseLeave={() => setBotonPosteriores(false)} onClick={() => {siguiente_calificaciones(); setBotonPosteriores(false)}}/>
                            ) : null
                        }
                    </div>
                </div>
            </div>
            <div className='d-flex' style={{width: 876 / proporcional, height: 50 / proporcional, marginBottom: 25 / proporcional }}>
                  <p className='mb-0' 
                      style={{fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 400, color: '#212121', 
                              marginRight: 20 / proporcional, fontFamily: `'Lora', serif`}}>
                      DEL CONDUCTOR:
                  </p>
                  <p className='mb-0' 
                      style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 500, color: '#757575',  
                              fontFamily: `Mukta, sans-serif`}}>
                      {nombres}
                  </p>
            </div>
            
            <div style={{width: 876 / proporcional, minHeight: 480 / proporcional}}>
                {
                    lista_calificaciones && lista_calificaciones.length > 0 ? (
                        lista_calificaciones.map ((calificacion, numcal) => {
                            return (
                                <div key={numcal} className='d-flex' 
                                    style={{marginBottom: 12.5 / proporcional}}>
                                    <CardCalificacionConductorTablet calificacion={calificacion} key={numcal} index={numcal} proporcional={proporcional}/>
                                </div>
                            )
                        })
                    ) : null
                }
            </div>
            <div className='d-flex' style={{width: 876 / proporcional, height: 50 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: 375 / proporcional, height: 50 / proporcional}}>
                    {
                        begin !== 0 && calificaciones.length > 0 ? (
                            <img className='cursor-pointer' src={left} 
                                style={{cursor: 'pointer', width: boton_anteriores ? 25 / proporcional  : 35 / proporcional, height: boton_anteriores ? 25 / proporcional  : 35 / proporcional,
                                        margin: boton_anteriores ? 12.5 / proporcional : 7.5 / proporcional}} alt='' 
                                onMouseOver={() => setBotonAnteriores(true)} onMouseLeave={() => setBotonAnteriores(false)} onClick={() => {anteriores_calificaciones(); setBotonAnteriores(false)}}/>
                        ) : null
                    }                    
                </div>
                <div className='d-flex' style={{width: 900 / proporcional, height: 50 / proporcional}}/>
                <div className='d-flex justify-content-end' style={{width: 375 / proporcional, height: 50 / proporcional}}>
                    {
                        calificaciones.length > 0 && begin + amount < total_calificaciones  ? (
                            <img className='cursor-pointer' src={right} 
                                style={{cursor: 'pointer', width: boton_posteriores ? 25 / proporcional  : 35 / proporcional, height: boton_posteriores ? 25 / proporcional  : 35 / proporcional,
                                        margin: boton_posteriores ? 12.5 / proporcional : 7.5 / proporcional}} alt='' 
                                onMouseOver={() => setBotonPosteriores(true)} onMouseLeave={() => setBotonPosteriores(false)} onClick={() => {siguiente_calificaciones(); setBotonPosteriores(false)}}/>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}
