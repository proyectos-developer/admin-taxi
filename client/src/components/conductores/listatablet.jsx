import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {conductoresdata} from '../../redux/slice/conductoresdata'
import {conductoresConstants} from '../../uri/conductores-constants'

import { set_filtro_conductores_search_order_amount, set_limpiar_filtros } from '../../redux/actions/filtrosactions.js'

import clean from '../../iconos/clean_grey.png'
import left from '../../iconos/left_grey.png'
import right from '../../iconos/right_grey.png'

import CardConductorTablet from './cards/conductortablet.jsx'

export default function ListaConductoresTablet({proporcional}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [boton_filtro, setBotonFiltro] = useState (false)
    
    const [filtros, setFiltros] = useState ({})
    const [order_by, setOrderBy] = useState ('')
    const [conductores, setConductores] = useState ([])
    const [lista_conductores, setListaConductores] = useState ([])
    const [total_conductores, setTotalConductores] = useState (0)
    const [count_indice, setCountIndice] = useState (0)
    const [show_ordenar_por, setShowOrdenarPor] = useState (false)
    const [seleccionar_ordenarpor, setSeleccionarOrdenarPor] = useState (false)

    const [begin, setBegin] = useState (0)
    const [amount, setAmount] = useState (16)
    
    const [boton_anteriores, setBotonAnteriores] = useState (false)
    const [boton_posteriores, setBotonPosteriores] = useState (false)

    const {get_conductores_filtro_total} = useSelector (({conductores}) => conductores)
    const {filtro_conductores_search_order_amount} = useSelector(({filtrosreducer}) => filtrosreducer)

    useEffect (() => {
        const id = filtro_conductores_search_order_amount.id
        const search = filtro_conductores_search_order_amount.search
        const order_by = filtro_conductores_search_order_amount.order_by
        const order = filtro_conductores_search_order_amount.order
        const filtro = filtro_conductores_search_order_amount.filtro
        const id_filtro = filtro_conductores_search_order_amount.id_filtro
        const inicio = filtro_conductores_search_order_amount.begin
        const cantidad = filtro_conductores_search_order_amount.amount
        setBegin (inicio)
        setAmount (cantidad)
        dispatch(conductoresdata(conductoresConstants(id, search, order_by, order, filtro, id_filtro, inicio, cantidad, {}, false).get_conductores_filtro_total))
    }, [])

    useEffect(() => {
        setFiltros(filtro_conductores_search_order_amount)
    }, [filtro_conductores_search_order_amount])

    useEffect (() => {
        if (get_conductores_filtro_total && get_conductores_filtro_total.conductores && get_conductores_filtro_total.success === true){
            let data = get_conductores_filtro_total.conductores.length
            let lista = []
            let cuenta = data / 2 < 1 ? 1 : data % 2 !== 0 ? (data / 2) + 1 : data / 4
            for (let count = 0; count < cuenta; count ++){
                lista.push ({num: `${count + 1}`})
            }
            if (get_conductores_filtro_total.total_conductores){setTotalConductores(get_conductores_filtro_total.total_conductores)}
            setConductores (get_conductores_filtro_total.conductores)
            setListaConductores (lista)
        }
    }, [get_conductores_filtro_total])

    const ordenar_por_filtro = (value) => {
        setOrderBy(value)
        setBegin (0)
        const id = filtros.id
        const search = filtros.search
        const order_by = value.split('-')[0]
        const order = value.split('-')[1]
        const filtro = filtro
        const id_filtro = filtros.id_filtro
        dispatch (set_filtro_conductores_search_order_amount({pagina: 'conductores', id: id, search: search, order_by: order_by, order: order, filtro: filtro, id_filtro: id_filtro, begin: 0, amount: 16}))
        dispatch(conductoresdata(conductoresConstants(id, search, order_by, order, filtro, id_filtro, 0, 16, {}, false).get_conductores_filtro_total))
    }

    const siguientes_conductores = () => {
        setCountIndice(count_indice + 1)
        window.scrollTo (0, 0); 
        setBegin (filtros.begin + amount)
        const id = filtros.id
        const search = filtros.search
        const order_by = filtros.order_by
        const order = filtros.order
        const filtro = filtro
        const id_filtro = filtros.id_filtro
        const inicio = filtros.begin + amount
        const cantidad = filtros.amount
        setBotonPosteriores(false)
        dispatch(set_filtro_conductores_search_order_amount({pagina: 'conductores', id: id, search: search, order_by: order_by, order: order, filtro: filtro, id_filtro: id_filtro, begin: inicio, amount: cantidad}))
        dispatch(conductoresdata(conductoresConstants(id, search, order_by, order, filtro, id_filtro, inicio, cantidad, {}, false).get_conductores_filtro_total))
    }

    const anteriores_conductores = () => {
        setCountIndice(count_indice - 1)
        window.scrollTo (0, 0); 
        setBegin (filtros.begin - amount)
        const id = filtros.id
        const search = filtros.search
        const order_by = filtros.order_by
        const order = filtros.order
        const filtro = filtro
        const id_filtro = filtros.id_filtro
        const inicio = filtros.begin - amount
        const cantidad = filtros.amount
        setBotonAnteriores(false)
        dispatch(set_filtro_conductores_search_order_amount({pagina: 'conductores', id: id, search: search, order_by: order_by, order: order, filtro: filtro, id_filtro: id_filtro, begin: inicio, amount: cantidad}))
        dispatch(conductoresdata(conductoresConstants(id, search, order_by, order, filtro, id_filtro, inicio, cantidad, {}, false).get_conductores_filtro_total))
    }

    const limpiar_filtros = () => {
        setBegin (0)
        setOrderBy('')
        dispatch(set_filtro_conductores_search_order_amount({pagina: '', id: 0, search: 0, order_by: 0, order: 0, filtro: 0, id_filtro: 0, begin: 0, amount: 16}))
        dispatch (conductoresdata (conductoresConstants(0, 0, 0, 0, 0, 0, 0, 16, {}, false).get_conductores_filtro_total))
        dispatch (set_limpiar_filtros({limpiar_filtros: true}))
    }

    useEffect (() => {
        return () => {
        }
    }, [])

    return ( 
        <div className='position-relative' style={{width: 976 / proporcional, paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional}}>
            <div className='d-flex' style={{width: 876 / proporcional, height: 50 / proporcional, marginBottom: 25 / proporcional }}>
                <p className='mb-0' 
                    style={{fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 400, color: '#212121', 
                            marginRight: 20 / proporcional, fontFamily: `'Lora', serif`}}>
                    CONDUCTORES:
                </p>
                <p className='mb-0' 
                    style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 500, color: '#757575',  
                            fontFamily: `Mukta, sans-serif`}}>
                    mostrando del {begin} al {begin + conductores.length} de {total_conductores} conductores
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
                            <div className='position-absolute h-100' style={{background: 'rgba(189, 189, 189, 0.4)', zIndex: 90000, width: 1920 / proporcional,
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
                {
                    filtros.search !== 0 || filtros.order_by !== 0 || filtros.id !== 0 ? (
                        <div className='d-flex justify-content-center' style={{width: 370 / proporcional, height: 50 / proporcional}}>
                            <div className='d-flex cursor-pointer' style={{width: 200 / proporcional, height: 50 / proporcional, cursor: 'pointer'}}
                                onClick={() => {limpiar_filtros(); setBotonFiltro(false)}} onMouseOver={() => setBotonFiltro(true)} onMouseLeave={() => setBotonFiltro(false)}>
                                <p style={{width: 150 / proporcional, textAlign: 'center', fontSize: 16 / proporcional, lineHeight: `${50 / proporcional}px`,
                                        color: '#9E9E9E', 
                                        fontWeight: boton_filtro ? 400 : 700, borderRadius: 8 / proporcional, fontFamily: 'PT Serif, serif'}}>
                                    LIMPIAR FILTROS
                                </p>
                                <div style={{width: 50 / proporcional,  height: 50 / proporcional}}>
                                    <img src={clean} style={{width: boton_filtro ? 30 / proporcional : 35 / proporcional, height: boton_filtro ? 30 / proporcional : 35 / proporcional, 
                                                            margin: boton_filtro ? 10 / proporcional : 7.5 / proporcional}} alt='' className='rounded-circle'/>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='d-flex' style={{width: 350 / proporcional, height: 50 / proporcional}}>
                            <div className='d-flex justify-content-start' style={{width: 175 / proporcional, paddingLeft: 15 / proporcional}}>
                                {
                                    begin !== 0 && conductores.length > 0 ? (
                                        <img className='cursor-pointer' 
                                            src={left} style={{cursor: 'pointer', width: boton_anteriores ? 25 / proporcional : 35 / proporcional, height: boton_anteriores ? 25 / proporcional : 35 / proporcional,
                                                                margin: boton_anteriores ? 12.5 / proporcional : 7.5 / proporcional}} alt='' 
                                            onMouseOver={() => setBotonAnteriores(true)} onMouseLeave={() => setBotonAnteriores(false)} onClick={() => {anteriores_conductores(); setBotonAnteriores(false)}}/>
                                    ) : null
                                }
                            </div>
                            <div className='d-flex justify-content-end' style={{width: 175 / proporcional}}>
                                {
                                    conductores.length > 0 && begin + amount < total_conductores  ? (
                                        <img className='cursor-pointer' 
                                            src={right} style={{cursor: 'pointer', width: boton_posteriores ? 25 / proporcional : 35 / proporcional, height: boton_posteriores ? 25 / proporcional : 35 / proporcional,
                                                                margin: boton_posteriores ? 12.5 / proporcional : 7.5 / proporcional}} alt='' 
                                            onMouseOver={() => setBotonPosteriores(true)} onMouseLeave={() => setBotonPosteriores(false)} onClick={() => {siguientes_conductores(); setBotonPosteriores(false)}}/>
                                    ) : null
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            
            <div style={{width: 876 / proporcional, height: 'auto', marginBottom: 25 / proporcional}}>
                {
                    filtros.search !== 0 && filtros.order_by === 0 && filtros.id === 0 ? (
                        <div className='d-flex' style={{width: 876 / proporcional, height: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 7.5 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: 493.33 / proporcional}}>
                                <p className='mb-0' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', paddingTop: 15 / proporcional, 
                                            paddingBottom: 15 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 600}}>
                                    <span style={{color: '#757575', fontSize: 18 / proporcional, linHeight: `${20 / proporcional}px`, fontWeight: 500}}>Buscar por:</span> "{filtros.search}"
                                </p>
                            </div>
                        </div>
                    ): filtros.search === 0 && filtros.order_by !== 0 && filtros.id === 0  ? (
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
                    ): filtros.search === 0 && filtros.order_by === 0 && filtros.id !== 0  ? (
                        <div className='d-flex' style={{width: 876 / proporcional, height: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 7.5 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: 493.33 / proporcional}}>
                                <p className='mb-0' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', paddingTop: 15 / proporcional, 
                                            paddingBottom: 15 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 600}}>
                                    <span style={{color: '#757575', fontSize: 18 / proporcional, linHeight: `${20 / proporcional}px`, fontWeight: 500}}>Filtrar por:</span> "{filtros.id}"
                                </p>
                            </div>
                        </div>
                    ) : filtros.search !== 0 && filtros.order_by !== 0 && filtros.id === 0 ? (
                        <div className='d-flex' style={{width: 876 / proporcional, height: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 7.5 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: 493.33 / proporcional, borderRight: '2px solid #BDBDBD'}}>
                                <p className='mb-0' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', paddingTop: 15 / proporcional, 
                                            paddingBottom: 15 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 600}}>
                                    <span style={{color: '#757575', fontSize: 18 / proporcional, linHeight: `${20 / proporcional}px`, fontWeight: 500}}>Buscar por:</span> "{filtros.search}"
                                </p>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: 493.33 / proporcional}}>
                                <p className='mb-0' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', paddingTop: 15 / proporcional, 
                                            paddingBottom: 15 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 600}}>
                                    <span style={{color: '#757575', fontSize: 18 / proporcional, linHeight: `${20 / proporcional}px`, fontWeight: 500}}>ordenar por: </span>"{filtros.order_by === 'nombres' ? 'nombres' : filtros.order_by === 'codigo' ? 'código proveedor' : filtros.order_by === 'created_at' ? 'proveedor creado' : ''}"
                                </p>
                            </div>
                        </div>
                    ) : filtros.search !== 0 && filtros.order_by === 0 && filtros.id !== 0 ? (
                        <div className='d-flex' style={{width: 876 / proporcional, height: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 7.5 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: 493.33 / proporcional, borderRight: '2px solid #BDBDBD'}}>
                                <p className='mb-0' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', paddingTop: 15 / proporcional, 
                                            paddingBottom: 15 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 600}}>
                                    <span style={{color: '#757575', fontSize: 18 / proporcional, linHeight: `${20 / proporcional}px`, fontWeight: 500}}>Buscar por:</span> "{filtros.search}"
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
                    ) : filtros.search === 0 && filtros.order_by !== 0 && filtros.id !== 0 ? (
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
                    ) : filtros.search !== 0 && filtros.order_by !== 0 && filtros.id !== 0 ? (
                        <div className='d-flex' style={{width: 876 / proporcional, height: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 7.5 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: 493.33 / proporcional, borderRight: '2px solid #BDBDBD'}}>
                                <p className='mb-0' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, color: '#212121', paddingTop: 15 / proporcional, 
                                            paddingBottom: 15 / proporcional, fontFamily: 'Mukta, sans-serif'}}>
                                    <span style={{color: '#757575', fontSize: 18 / proporcional, linHeight: `${20 / proporcional}px`, fontWeight: 600}}>Buscar por:</span> "{filtros.search}"
                                </p>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: 493.33 / proporcional, borderRight: '2px solid #BDBDBD'}}>
                                <p className='mb-0' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, color: '#212121', paddingTop: 15 / proporcional, 
                                            paddingBottom: 15 / proporcional, fontFamily: 'Mukta, sans-serif'}}>
                                    <span style={{color: '#757575', fontSize: 18 / proporcional, linHeight: `${20 / proporcional}px`, fontWeight: 600}}>ordenar por:</span> "{filtros.order_by === 'nombres' ? 'nombres' : filtros.order_by === 'codigo' ? 'código proveedor' : filtros.order_by === 'created_at' ? 'proveedor creado' : ''}"
                                </p>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: 493.33 / proporcional}}>
                                <p className='mb-0' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, color: '#212121', paddingTop: 15 / proporcional, 
                                            paddingBottom: 15 / proporcional, fontFamily: 'Mukta, sans-serif'}}>
                                    <span style={{color: '#757575', fontSize: 18 / proporcional, linHeight: `${20 / proporcional}px`, fontWeight: 600}}>filtrar por:</span> "{filtros.id}"
                                </p>
                            </div>
                        </div>
                    ) : null
                }
            </div>
            
            <div style={{width: 876 / proporcional, minHeight: 480 / proporcional}}>
                {
                    lista_conductores && lista_conductores.length > 0 ? (
                        lista_conductores.map ((conductor, numcon) => {
                            return (
                                <div key={numcon} className='d-flex' 
                                    style={{marginBottom: 12.5 / proporcional}}>
                                    {
                                        conductores[(2 *  numcon)] ? ( 
                                            <CardConductorTablet conductor={conductores[(2 *  numcon)]} key={(2 *  numcon)} index={(2 *  numcon)} proporcional={proporcional}/>
                                        ) : null
                                    }
                                    {
                                        conductores[(2 *  numcon) + 1] ? ( 
                                            <CardConductorTablet conductor={conductores[(2 *  numcon) + 1]} key={(2 *  numcon) + 1} index={(2 *  numcon) + 1} proporcional={proporcional}/>
                                        ) : null
                                    }
                                </div>
                            )
                        })
                    ) : null
                }
            </div>
            <div className='d-flex' style={{width: 876 / proporcional, height: 50 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: 375 / proporcional, height: 50 / proporcional}}>
                    {
                        begin !== 0 && conductores.length > 0 ? (
                            <img className='cursor-pointer' src={left} 
                                style={{cursor: 'pointer', width: boton_anteriores ? 25 / proporcional  : 35 / proporcional, height: boton_anteriores ? 25 / proporcional  : 35 / proporcional,
                                        margin: boton_anteriores ? 12.5 / proporcional : 7.5 / proporcional}} alt='' 
                                onMouseOver={() => setBotonAnteriores(true)} onMouseLeave={() => setBotonAnteriores(false)} onClick={() => {anteriores_conductores(); setBotonAnteriores(false)}}/>
                        ) : null
                    }                    
                </div>
                <div className='d-flex' style={{width: 900 / proporcional, height: 50 / proporcional}}/>
                <div className='d-flex justify-content-end' style={{width: 375 / proporcional, height: 50 / proporcional}}>
                    {
                        conductores.length > 0 && begin + amount < total_conductores  ? (
                            <img className='cursor-pointer' src={right} 
                                style={{cursor: 'pointer', width: boton_posteriores ? 25 / proporcional  : 35 / proporcional, height: boton_posteriores ? 25 / proporcional  : 35 / proporcional,
                                        margin: boton_posteriores ? 12.5 / proporcional : 7.5 / proporcional}} alt='' 
                                onMouseOver={() => setBotonPosteriores(true)} onMouseLeave={() => setBotonPosteriores(false)} onClick={() => {siguientes_conductores(); setBotonPosteriores(false)}}/>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}
