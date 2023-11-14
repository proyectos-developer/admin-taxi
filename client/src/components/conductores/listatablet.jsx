import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {conductoresdata} from '../../redux/slice/conductoresdata'
import {conductoresConstants} from '../../uri/conductores-constants'

import { set_filtro_conductores_search_order_amount, set_limpiar_filtros } from '../../redux/actions/filtrosactions.js'

import clean from '../../iconos/clean_grey.png'
import add_conductor from '../../iconos/add_white.png'
import left from '../../iconos/left_grey.png'
import right from '../../iconos/right_grey.png'

import CardConductorTablet from './cards/conductortablet.jsx'
import ModalDelete from './modal/delete.jsx'
import { set_nombre_delete, set_conductor_delete } from '../../redux/actions/conductoresactions'
import { constantes } from '../../uri/constantes'

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

    const [boton_agregar, setBotonAgregar] = useState (false)

    const {data_conductor, nombre_delete, conductor_delete} = useSelector(({conductoresreducer}) => conductoresreducer)
    const {get_conductores_filtro_total, delete_conductor} = useSelector (({conductores}) => conductores)
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
        dispatch(conductoresdata(conductoresConstants(id, search, order_by, order, filtro, id_filtro, inicio, 16, {}, false).get_conductores_filtro_total))
    }, [])

    useEffect(() => {
        setFiltros(filtro_conductores_search_order_amount)
    }, [filtro_conductores_search_order_amount])

    useEffect (() => {
        if (get_conductores_filtro_total && get_conductores_filtro_total.conductores && get_conductores_filtro_total.success === true){
            let data = get_conductores_filtro_total.conductores.length
            let lista = []
            let cuenta = data / 2 < 1 ? 1 : data % 2 !== 0 ? (data / 2) + 1 : data / 2
            for (let count = 0; count < cuenta; count ++){
                lista.push ({num: `${count + 1}`})
            }
            if (get_conductores_filtro_total.total_conductores){setTotalConductores(get_conductores_filtro_total.total_conductores)}
            setConductores (get_conductores_filtro_total.conductores)
            setListaConductores (lista)
        }
    }, [get_conductores_filtro_total])

    useEffect (() => {
        if (data_conductor && data_conductor.conductor && data_conductor.conductor.nombres){
        }
    }, [data_conductor])

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
        <div className='position-relative' style={{width: 991 / proporcional, paddingLeft: 58.5 / proporcional, paddingRight: 58.5 / proporcional}}>
            <div className='d-flex' style={{width: 874 / proporcional, height: 50 / proporcional, marginBottom: 25 / proporcional }}>
                <div className='d-flex' style={{width: 300 / proporcional, height: 50 / proporcional}}>
                    <p className='mb-0' 
                        style={{fontSize: 24 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 400, color: '#212121', 
                                marginRight: 5 / proporcional, fontFamily: `'Lora', serif`}}>
                        TUS CONDUCTORES:
                    </p>
                </div>
                <div className='d-flex' style={{width: 300 / proporcional, height: 50 / proporcional}}>
                    <p className='mb-0' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 500, color: '#757575',  
                                fontFamily: `Mukta, sans-serif`}}>
                        mostrando del {begin} al {begin + conductores.length} de {total_conductores} conductores
                    </p>
                </div>
            </div>
            <div style={{width: 874 / proporcional, height: 'auto', marginBottom: 25 / proporcional}}>
                {
                    filtros.search !== 0 && filtros.order_by === 0 && filtros.id === 0 ? (
                        <div className='d-flex' style={{width: 874 / proporcional, height: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 7.5 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: 493.33 / proporcional}}>
                                <p className='mb-0' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', paddingTop: 15 / proporcional, 
                                            paddingBottom: 15 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 600}}>
                                    <span style={{color: '#757575', fontSize: 18 / proporcional, linHeight: `${20 / proporcional}px`, fontWeight: 500}}>Buscar por:</span> "{filtros.search}"
                                </p>
                            </div>
                        </div>
                    ): filtros.search === 0 && filtros.order_by !== 0 && filtros.id === 0  ? (
                        <div className='d-flex' style={{width: 874 / proporcional, height: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 7.5 / proporcional}}>
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
                        <div className='d-flex' style={{width: 874 / proporcional, height: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 7.5 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: 493.33 / proporcional}}>
                                <p className='mb-0' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', paddingTop: 15 / proporcional, 
                                            paddingBottom: 15 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 600}}>
                                    <span style={{color: '#757575', fontSize: 18 / proporcional, linHeight: `${20 / proporcional}px`, fontWeight: 500}}>Filtrar por:</span> "{filtros.id}"
                                </p>
                            </div>
                        </div>
                    ) : filtros.search !== 0 && filtros.order_by !== 0 && filtros.id === 0 ? (
                        <div className='d-flex' style={{width: 874 / proporcional, height: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 7.5 / proporcional}}>
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
                        <div className='d-flex' style={{width: 874 / proporcional, height: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 7.5 / proporcional}}>
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
                        <div className='d-flex' style={{width: 874 / proporcional, height: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 7.5 / proporcional}}>
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
                        <div className='d-flex' style={{width: 874 / proporcional, height: 50 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginBottom: 7.5 / proporcional}}>
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
            <div style={{width: 874 / proporcional, height: 680 / proporcional}}>
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
            <div className='d-flex' style={{width: 874 / proporcional, height: 50 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: 437 / proporcional, height: 50 / proporcional}}>
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
                <div className='d-flex justify-content-end' style={{width: 437 / proporcional, height: 50 / proporcional}}>
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
            <div className='position-absolute shadow-lg rounded-circle' 
                onClick={() => navigate ('/home/conductores/nuevo-conductor')}
                onMouseOver={() => setBotonAgregar(true)} onMouseLeave={() => setBotonAgregar(false)}
                style={{width: 60 / proporcional, height: 60 / proporcional, background: '#9E9E9E', right: 58.5 / proporcional, bottom: 58.5 / proporcional}}>
                <img src={add_conductor} alt='' style={{cursor: 'pointer', width: boton_agregar ? 40 / proporcional : 50 / proporcional, 
                    height: boton_agregar ? 40 / proporcional : 50 / proporcional, margin: boton_agregar ? 10 / proporcional : 5 / proporcional}}/>
            </div>
        </div>
    )
}
