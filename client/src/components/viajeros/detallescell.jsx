import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {PatternFormat} from 'react-number-format';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import icon_conductor from '../../iconos/icon_conductor.png'

export default function DetallesViajeroCell({proporcional}) {
    
    const dispatch = useDispatch()
    const navigate = useNavigate ()
    
    const [nombres, setNombres] = useState ('')
    const [fecha_nacimiento, setFechaNacimiento] = useState ('')
    const [tipo_documento, setTipoDocumento] = useState ('Documento')
    const [nro_documento, setNroDocumento] = useState ('')
    const [nro_telefono, setNroTelefono] = useState ('')
    const [correo, setCorreo] = useState ('')
    const [foto, setFoto] = useState ('')
    const [direccion, setDireccion] = useState ('')

    const [boton_volver, setBotonVolver] = useState (false)

    const [enombres, setENombres] = useState (false)
    const [enro_documento, setENroDocumento] = useState (false)
    const [enro_telefono, setENroTelefono] = useState (false)
    const [ecorreo, setECorreo] = useState (false)

    const {data_viajero} = useSelector(({viajerosreducer}) => viajerosreducer)
    
    useEffect(() => {
        if (data_viajero && data_viajero.usuario){
            setNombres(data_viajero.usuario.nombres)
            setTipoDocumento(data_viajero.usuario.tipo_documento)
            setNroDocumento(data_viajero.usuario.nro_documento)
            setFechaNacimiento(data_viajero.usuario.fecha_nacimiento)
            setNroTelefono(data_viajero.usuario.nro_telefono)
            setCorreo(data_viajero.usuario.correo)
            setFoto(data_viajero.usuario.foto)
            setDireccion(data_viajero.usuario.direccion_principal)
            window.scrollTo(0, 0)
        }
    }, [])

    useEffect (() => {
        return () => {
        }
    }, [])

    return (
        <div className='' style={{width: 499 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 50 / proporcional,
          paddingBottom: 50 / proporcional}}>
            <div className='d-flex' style={{width: 459 / proporcional, height: 'auto', marginBottom: 12.5 / proporcional}}>
                <div className='' style={{width: 150 / proporcional, marginRight: 20 / proporcional, paddingTop: 12.5 / proporcional, paddingBottom: 12.5 / proporcional}}>
                    <div className='shadow bg-white rounded-circle'
                        style={{width: 150 / proporcional, height: 150 / proporcional, border: '1px solid #B2DFDB', padding: 2 / proporcional, cursor: 'pointer'}}>
                        <img src={foto === '' ? icon_conductor : foto} style={{width: 142 / proporcional, height: 142 / proporcional}} alt='' className='rounded-circle'/>
                    </div>
                </div>
                <div className='' style={{width: 299 / proporcional}}>
                    <div className='d-flex shadow-sm bg-white rounded' style={{width: 299 / proporcional, height: 50 / proporcional, marginBottom: 12.5 / proporcional, border: enombres ? '1px solid red' : '1px solid #B2DFDB', 
                                                    borderRadius: 4 / proporcional}}>
                        <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                    lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Nombres (*):</p>
                        <input type='text'
                            disabled={true}
                            style={{fontFamily: 'Mukta, sans-serif', width: 191 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`,
                                    fontWeight: 500, color: '#212121'}}
                            className='form-control border-0'
                            value={nombres}
                            onChange={(event) => {setNombres(event.target.value)}}
                            id='nombres'
                            placeholder='e.j Jorge'/>
                    </div>
                    <div className='d-flex shadow-sm bg-white rounded' style={{width: 299 / proporcional, height: 50 / proporcional, marginBottom: 12.5 / proporcional, border: '1px solid #B2DFDB', 
                                                    borderRadius: 4 / proporcional}}>
                        <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                    lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Seleccionar:</p>
                        <input
                            disabled={true}
                            style={{fontFamily: 'Mukta, sans-serif', width: 191 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`,
                                    fontWeight: 500, color: '#212121', cursor: 'default'}}
                            className='form-select border-0 mb-0 default'
                            defaultValue={tipo_documento === '' ? 'Documento' : tipo_documento}
                            onChange={() => setTipoDocumento(tipo_documento)}
                            value={tipo_documento}
                        />
                    </div>
                    <div className='d-flex shadow-sm bg-white rounded' style={{width: 299 / proporcional, height: 50 / proporcional, border: enro_documento ? '1px solid red' : '1px solid #B2DFDB', 
                                                    borderRadius: 4 / proporcional}}>
                        <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                    lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 6600, cursor: 'default'}} className='mb-0'>Número:</p>
                        <PatternFormat 
                            id='nro_documeno'
                            disabled={true}
                            style={{fontFamily: 'Mukta, sans-serif', width: 191 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`, 
                                    fontWeight: 500, color: '#212121'}}
                            className='form-control border-0 '
                            value={tipo_documento === 'D.N.I' ? nro_documento.slice(0, 8) : tipo_documento === 'Pasaporte' ? nro_documento.slice(0, 9) : nro_documento}
                            onChange={(event) => {setNroDocumento(event.target.value)}}
                            onBlur={() => {}}
                            placeholder='e.j 4060xxxx'
                            format={tipo_documento === 'D.N.I' ? '########' : tipo_documento === 'Pasaporte' ? '########' : '############'} />
                    </div>
                </div>
            </div>
            <div className='' style={{width: 459 / proporcional}}>
                <div className='d-flex shadow-sm bg-white rounded' style={{width: 459 / proporcional, marginBottom: 12.5 / proporcional, height: 50 / proporcional, border: '1px solid #B2DFDB', 
                                                borderRadius: 4 / proporcional}}>
                    <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                lineHeight: `${24 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Fecha <br/>nacimiento:</p>
                    <input
                        disabled={true}
                        style={{fontFamily: 'Mukta, sans-serif', width: 351 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`,
                                fontWeight: 500, color: '#212121', cursor: 'default'}}
                        className='form-select border-0 mb-0 default'
                        defaultValue={fecha_nacimiento === '' ? 'dd/mm/aaaa' : fecha_nacimiento}
                        onChange={() => setFechanacimiento(fecha_nacimiento)}
                        value={fecha_nacimiento}
                    />
                </div>
                <div className='d-flex shadow-sm bg-white rounded' style={{width: 459 / proporcional, height: 50 / proporcional, marginBottom: 12.5 / proporcional, border: enro_telefono ? '1px solid red' : '1px solid #B2DFDB', 
                                                borderRadius: 4 / proporcional}}>
                    <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Teléfono:</p>
                    <PhoneInput
                        disabled={true}
                        id='nro_telefono'
                        style={{fontFamily: 'Mukta, sans-serif', width: 351 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`, fontWeight: 500, color: '#212121',
                                borderWidth: 0, marginTop: 1 / proporcional}}
                        className='form-control border-0'
                        value={nro_telefono}
                        onChange={(value) => {setNroTelefono(value)}}
                        placeholder='E.j: 968xxxxxx'/>
                </div>
                <div className='d-flex shadow-sm bg-white rounded' style={{width: 459 / proporcional, height: 50 / proporcional, marginBottom: 12.5 / proporcional, border: ecorreo ? '1px solid red' : '1px solid #B2DFDB', 
                                                borderRadius: 4 / proporcional}}>
                    <p style={{fontFamily: 'Mukta, sans-serif', width: 148 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Correo electrónico:</p>
                    <input type='email'
                        disabled={true}
                        style={{fontFamily: 'Mukta, sans-serif', width: 351 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`, 
                                fontWeight: 500, color: '#212121'}}
                        className='form-control border-0'
                        value={correo}
                        onChange={(event) => {setCorreo(event.target.value)}}
                        onBlur={() => {(correo !== '' && correo.split('@')[1]) === undefined ? setECorreo(true) : setECorreo(false)}}
                        id='correo'
                        placeholder='E.j. nombres@dominio.com'/>
                </div>
                <div className='d-flex shadow-sm bg-white rounded' style={{width: 459 / proporcional, height: 50 / proporcional, marginBottom: 12.5 / proporcional, border: '1px solid #B2DFDB', 
                                                borderRadius: 4 / proporcional}}>
                    <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Dirección:</p>
                    <input
                        type='text'
                        disabled={true}
                        style={{fontFamily: 'Mukta, sans-serif', width: 351 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`,
                                fontWeight: 500, color: '#212121', cursor: 'default'}}
                        className='form-control border-0 mb-0 default'
                        onChange={(event) => setDireccion (event.target.value)}
                        value={direccion}
                        placeholder='Dirección principal'
                    />
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: 459 / proporcional}}>
                <button className='btn text-icons shadow rounded' 
                        onClick={() => {navigate ('/home/usuarios'); window.scrollTo(0, 0); setBotonVolver(false)}} 
                        onMouseOver={() => setBotonVolver(true)} onMouseLeave={() => setBotonVolver(false)}
                        style={{fontFamily: 'PT Serif, sans-serif', width: boton_volver ? 459 / proporcional : 453 / proporcional, height: 50 / proporcional, fontWeight: 500,
                                fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, border: '2px solid #9E9E9E', background: boton_volver ? '#9E9E9E' : 'white', 
                                color: boton_volver ? 'white' : '#9E9E9E'}}>
                    VOLVER
                </button>
                </div>
        </div>
    )
}
