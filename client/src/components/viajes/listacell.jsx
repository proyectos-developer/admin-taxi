import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {viajesdata} from '../../redux/slice/viajesdata'
import {viajesConstants} from '../../uri/viajes-constants'

import { set_filtro_viajes_search_order_amount, set_limpiar_filtros } from '../../redux/actions/filtrosactions.js'

import clean from '../../iconos/clean_grey.png'
import left from '../../iconos/left_grey.png'
import right from '../../iconos/right_grey.png'

import CardViajeCell from './cards/viajecell.jsx'

export default function ListaViajesCell({proporcional}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [boton_filtro, setBotonFiltro] = useState (false)
    
    const [filtros, setFiltros] = useState ({})
    const [order_by, setOrderBy] = useState ('')
    const [viajes, setViajes] = useState ([])
    const [lista_viajes, setListaViajes] = useState ([])
    const [total_viajes, setTotalViajes] = useState (0)
    const [count_indice, setCountIndice] = useState (0)
    const [show_ordenar_por, setShowOrdenarPor] = useState (false)
    const [seleccionar_ordenarpor, setSeleccionarOrdenarPor] = useState (false)

    const [begin, setBegin] = useState (0)
    const [amount, setAmount] = useState (16)
    
    const [boton_anteriores, setBotonAnteriores] = useState (false)
    const [boton_posteriores, setBotonPosteriores] = useState (false)

    const {get_viajes_filtro_total} = useSelector (({viajes}) => viajes)
    const {filtro_viajes_search_order_amount} = useSelector(({filtrosreducer}) => filtrosreducer)

    useEffect (() => {
        const id = filtro_viajes_search_order_amount.id
        const order_by = filtro_viajes_search_order_amount.order_by
        const order = filtro_viajes_search_order_amount.order
        const inicio = filtro_viajes_search_order_amount.begin
        const cantidad = filtro_viajes_search_order_amount.amount
        setBegin (inicio)
        setAmount (cantidad)
        dispatch(viajesdata(viajesConstants(id, order_by, order, inicio, cantidad, false).get_viajes_filtro_total))
    }, [])

    useEffect(() => {
        setFiltros(filtro_viajes_search_order_amount)
    }, [filtro_viajes_search_order_amount])

    useEffect (() => {
        if (get_viajes_filtro_total && get_viajes_filtro_total.viajes && get_viajes_filtro_total.success === true){
            if (get_viajes_filtro_total.total_viajes){setTotalViajes(get_viajes_filtro_total.total_viajes)}
            setViajes (get_viajes_filtro_total.viajes)
            setListaViajes (get_viajes_filtro_total.viajes)
        }
    }, [get_viajes_filtro_total])

    const ordenar_por_filtro = (value) => {
        setOrderBy(value)
        setBegin (0)
        const id = filtros.id
        const order_by = value.split('-')[0]
        const order = value.split('-')[1]
        dispatch (set_filtro_viajes_search_order_amount({pagina: 'viajes', id: id, order_by: order_by, order: order, begin: 0, amount: 16}))
        dispatch(viajesdata(viajesConstants(id, order_by, order, 0, 16, false).get_viajes_filtro_total))
    }

    const siguientes_viajes = () => {
        setCountIndice(count_indice + 1)
        window.scrollTo (0, 0); 
        setBegin (filtros.begin + amount)
        const id = filtros.id
        const order_by = filtros.order_by
        const order = filtros.order
        const inicio = filtros.begin + amount
        const cantidad = filtros.amount
        setBotonPosteriores(false)
        dispatch(set_filtro_viajes_search_order_amount({pagina: 'viajes', id: id, order_by: order_by, order: order, begin: inicio, amount: cantidad}))
        dispatch(viajesdata(viajesConstants(id, order_by, order, inicio, cantidad, false).get_viajes_filtro_total))
    }

    const anteriores_viajes = () => {
        setCountIndice(count_indice - 1)
        window.scrollTo (0, 0); 
        setBegin (filtros.begin - amount)
        const id = filtros.id
        const order_by = filtros.order_by
        const order = filtros.order
        const inicio = filtros.begin - amount
        const cantidad = filtros.amount
        setBotonAnteriores(false)
        dispatch(set_filtro_viajes_search_order_amount({pagina: 'viajes', id: id, order_by: order_by, order: order, begin: inicio, amount: cantidad}))
        dispatch(viajesdata(viajesConstants(id, order_by, order, inicio, cantidad, false).get_viajes_filtro_total))
    }

    const limpiar_filtros = () => {
        setBegin (0)
        setOrderBy('')
        dispatch(set_filtro_viajes_search_order_amount({pagina: '', id: 0, search: 0, order_by: 0, order: 0, begin: 0, amount: 16}))
        dispatch (viajesdata (viajesConstants(0, 0, 0, 0, 0, 16, false).get_viajes_filtro_total))
        dispatch (set_limpiar_filtros({limpiar_filtros: true}))
    }

    useEffect (() => {
        return () => {
        }
    }, [])

    return ( 
        <div className='position-relative' style={{width: 499 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div className='d-flex' style={{width: 459 / proporcional, height: 50 / proporcional, marginBottom: 25 / proporcional }}>
                <p className='mb-0' 
                    style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 400, color: '#212121', 
                            marginRight: 10 / proporcional, fontFamily: `'Lora', serif`}}>
                    VIAJES:
                </p>
                <p className='mb-0' 
                    style={{fontSize: 16 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 500, color: '#757575',  
                            fontFamily: `Mukta, sans-serif`}}>
                    del {begin} al {begin + viajes.length} de {total_viajes}
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
                            <div className='position-absolute h-100' style={{background: 'rgba(189, 189, 189, 0.4)', zIndex: 90000, width: 499 / proporcional,
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
            </div>
            
            <div style={{width: 876 / proporcional, height: 'auto', marginBottom: 25 / proporcional}}>
                {
                    filtros.order_by !== 0 && filtros.id === 0  ? (
                        <div className='d-flex' style={{width: 876 / proporcional, height: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 7.5 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: 493.33 / proporcional}}>
                                <p className='mb-0' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', paddingTop: 15 / proporcional, 
                                            paddingBottom: 15 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 600}}>
                                    <span style={{color: '#757575', fontSize: 18 / proporcional, linHeight: `${20 / proporcional}px`, fontWeight: 500}}>Ordenar por: </span> 
                                    "{filtros.order_by === 'nombres' ? 'nombres' : filtros.order_by === 'codigo' ? 'código proveedor' : filtros.order_by === 'created_at' ? 'proveedor creado' : ''}"
                                </p>
                            </div>
                        </div>
                    ): filtros.order_by === 0 && filtros.id !== 0  ? (
                        <div className='d-flex' style={{width: 876 / proporcional, height: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 7.5 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: 493.33 / proporcional}}>
                                <p className='mb-0' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', paddingTop: 15 / proporcional, 
                                            paddingBottom: 15 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 600}}>
                                    <span style={{color: '#757575', fontSize: 18 / proporcional, linHeight: `${20 / proporcional}px`, fontWeight: 500}}>Filtrar por:</span> "{filtros.id}"
                                </p>
                            </div>
                        </div>
                    ) : filtros.order_by !== 0 && filtros.id !== 0 ? (
                        <div className='d-flex' style={{width: 876 / proporcional, height: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 7.5 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: 493.33 / proporcional, borderRight: '2px solid #BDBDBD'}}>
                                <p className='mb-0' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', paddingTop: 15 / proporcional, 
                                            paddingBottom: 15 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 600}}>
                                    <span style={{color: '#757575', fontSize: 18 / proporcional, linHeight: `${20 / proporcional}px`, fontWeight: 500}}>Ordenar por:</span> "{filtros.order_by === 'nombres' ? 'nombres' : filtros.order_by === 'codigo' ? 'código proveedor' : filtros.order_by === 'created_at' ? 'proveedor creado' : ''}"
                                </p>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: 493.33 / proporcional}}>
                                <p className='mb-0' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', paddingTop: 15 / proporcional, 
                                            paddingBottom: 15 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 600}}>
                                    <span style={{color: '#757575', fontSize: 18 / proporcional, linHeight: `${20 / proporcional}px`, fontWeight: 500}}>filtrar por:</span> "{filtros.id}"
                                </p>
                            </div>
                        </div>
                    ) : null
                }
            </div>
            
            <div style={{width: 876 / proporcional, minHeight: 480 / proporcional}}>
                {
                    lista_viajes && lista_viajes.length > 0 ? (
                        lista_viajes.map ((viaje, numviaje) => {
                            return (
                                <div key={numviaje} className='d-flex' 
                                    style={{marginBottom: 12.5 / proporcional}}>
                                        <CardViajeCell viaje={viaje} key={numviaje} index={numviaje} proporcional={proporcional}/>
                                </div>
                            )
                        })
                    ) : null
                }
            </div>
            <div className='d-flex' style={{width: 876 / proporcional, height: 50 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: 375 / proporcional, height: 50 / proporcional}}>
                    {
                        begin !== 0 && viajes.length > 0 ? (
                            <img className='cursor-pointer' src={left} 
                                style={{cursor: 'pointer', width: boton_anteriores ? 25 / proporcional  : 35 / proporcional, height: boton_anteriores ? 25 / proporcional  : 35 / proporcional,
                                        margin: boton_anteriores ? 12.5 / proporcional : 7.5 / proporcional}} alt='' 
                                onMouseOver={() => setBotonAnteriores(true)} onMouseLeave={() => setBotonAnteriores(false)} onClick={() => {anteriores_viajes(); setBotonAnteriores(false)}}/>
                        ) : null
                    }                    
                </div>
                <div className='d-flex' style={{width: 900 / proporcional, height: 50 / proporcional}}/>
                <div className='d-flex justify-content-end' style={{width: 375 / proporcional, height: 50 / proporcional}}>
                    {
                        viajes.length > 0 && begin + amount < total_viajes  ? (
                            <img className='cursor-pointer' src={right} 
                                style={{cursor: 'pointer', width: boton_posteriores ? 25 / proporcional  : 35 / proporcional, height: boton_posteriores ? 25 / proporcional  : 35 / proporcional,
                                        margin: boton_posteriores ? 12.5 / proporcional : 7.5 / proporcional}} alt='' 
                                onMouseOver={() => setBotonPosteriores(true)} onMouseLeave={() => setBotonPosteriores(false)} onClick={() => {siguientes_viajes(); setBotonPosteriores(false)}}/>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}
