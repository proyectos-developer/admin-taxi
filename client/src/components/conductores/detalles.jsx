import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {PatternFormat} from 'react-number-format';
import PhoneInput from 'react-phone-number-input'
import AvatarEditor from 'react-avatar-editor'
import 'react-phone-number-input/style.css'

import icon_conductor from '../../iconos/icon_conductor.png'
import icon_licencia from '../../iconos/icon_licencia.png'
import icon_documento from '../../iconos/icon_documento.png'

import {conductoresdata} from '../../redux/slice/conductoresdata.js';
import { conductoresConstants } from '../../uri/conductores-constants.js';
import ModalCargando from '../modal/cargando.jsx';

export default function DetallesConductor({proporcional}) {
    
    const dispatch = useDispatch()
    const navigate = useNavigate ()
    
    const [nombres, setNombres] = useState ('')
    const [apellidos, setApellidos] = useState ('')
    const [fecha_nacimiento, setFechaNacimiento] = useState ('')
    const [tipo_documento, setTipoDocumento] = useState ('Documento')
    const [nro_documento, setNroDocumento] = useState ('')
    const [nro_telefono, setNroTelefono] = useState ('')
    const [correo, setCorreo] = useState ('')
    const [licencia_conducir, setLicenciaConducir] = useState ('')
    const [placa, setNroPlaca] = useState ('')
    const [clase, setClase] = useState ('')
    const [categoria, setCategoria] = useState ('')
    const [fecha_expedicion, setFechaExpedicion] = useState ('')
    const [fecha_revalidacion, setFechaRevalidacion] = useState ('')
    const [marca_carro, setMarcaCarro] = useState ('')
    const [modelo_carro, setModeloCarro] = useState ('')
    const [color, setColor] = useState ('')
    const [foto_perfil, setFotoPerfil] = useState ('')
    const [foto_licencia, setFotoLicencia] = useState ('')
    const [foto_documento, setFotoDocumento] = useState ('')
    
    const [boton_guardar, setBotonGuardar] = useState (false)
    const [boton_volver, setBotonVolver] = useState (false)

    const [enombres, setENombres] = useState (false)
    const [enro_documento, setENroDocumento] = useState (false)
    const [enro_telefono, setENroTelefono] = useState (false)
    const [ecorreo, setECorreo] = useState (false)

    const {data_conductor} = useSelector(({conductoresreducer}) => conductoresreducer)
    
    useEffect(() => {
        if (data_conductor && data_conductor.conductor){
            setNombres(data_conductor.conductor.nombres)
            setApellidos(data_conductor.conductor.apellidos)
            setTipoDocumento(data_conductor.conductor.tipo_documento)
            setNroDocumento(data_conductor.conductor.nro_documento)
            setFechaNacimiento(data_conductor.conductor.fecha_nacimiento)
            setNroTelefono(data_conductor.conductor.nro_telefono)
            setCorreo(data_conductor.conductor.correo)
            setMarcaCarro(data_conductor.conductor.marca_carro)
            setModeloCarro(data_conductor.conductor.modelo_carro)
            setNroPlaca(data_conductor.conductor.nro_placa)
            setLicenciaConducir(data_conductor.conductor.licencia_conducir)
            setClase(data_conductor.conductor.clase)
            setCategoria(data_conductor.conductor.categoria)
            setFechaExpedicion(data_conductor.conductor.fecha_expedicion)
            setFechaRevalidacion(data_conductor.conductor.fecha_revalidacion)
            setFotoPerfil(data_conductor.conductor.foto_perfil)
            setFotoDocumento(data_conductor.conductor.foto_documento)
            setFotoLicencia(data_conductor.conductor.foto_licencia)
            window.scrollTo(0, 0)
        }
    }, [])

    useEffect (() => {
        return () => {
        }
    }, [])

    return (
        <div className='' style={{width: 1920 / proporcional, paddingLeft: 460 / proporcional, paddingRight: 460 / proporcional, paddingTop: 50 / proporcional,
          paddingBottom: 50 / proporcional}}>
            <div className='d-flex' style={{width: 1000 / proporcional, height: 'auto', marginBottom: 12.5 / proporcional}}>
                <div className='' style={{width: 250 / proporcional, marginRight: 20 / proporcional}}>
                    <div className='shadow bg-white rounded-circle'
                        style={{width: 250 / proporcional, height: 250 / proporcional, border: '1px solid #B2DFDB', padding: 2 / proporcional, cursor: 'pointer'}}>
                        <img src={foto_perfil === '' ? icon_conductor : foto_perfil} style={{width: 242 / proporcional, height: 242 / proporcional}} alt='' className='rounded-circle'/>
                    </div>
                </div>
                <div className='' style={{width: 730 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: 730 / proporcional, height: 50 / proporcional, marginBottom: 16.66 / proporcional}}>
                        <div className='d-flex shadow-sm bg-white rounded' style={{width: 350 / proporcional, height: 50 / proporcional, marginRight: 15 / proporcional, border: enombres ? '1px solid red' : '1px solid #B2DFDB', 
                                                        borderRadius: 4 / proporcional}}>
                            <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                        lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Nombres (*):</p>
                            <input type='text'
                                disabled={true}
                                style={{fontFamily: 'Mukta, sans-serif', width: 242 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`,
                                        fontWeight: 500, color: '#212121'}}
                                className='form-control border-0'
                                value={nombres}
                                onChange={(event) => {setNombres(event.target.value)}}
                                id='nombres'
                                placeholder='e.j Jorge'/>
                        </div>
                        <div className='d-flex shadow-sm bg-white rounded' style={{width: 350 / proporcional, height: 50 / proporcional, marginLeft: 15 / proporcional, border: '1px solid #B2DFDB', 
                                                        borderRadius: 4 / proporcional}}>
                            <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                        lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Apellidos:</p>
                            <input type='text'
                                disabled={true}
                                style={{fontFamily: 'Mukta, sans-serif', width: 242 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`,
                                        fontWeight: 500, color: '#212121'}}
                                className='form-control border-0'
                                value={apellidos}
                                onChange={(event) => {setApellidos(event.target.value)}}
                                id='apellidos'
                                placeholder='e.j Huapaya'/>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: 730 / proporcional, height: 50 / proporcional, marginBottom: 16.66 / proporcional}}>
                        <div className='d-flex shadow-sm bg-white rounded' style={{width: 350 / proporcional, height: 50 / proporcional, marginRight: 15 / proporcional, border: '1px solid #B2DFDB', 
                                                        borderRadius: 4 / proporcional}}>
                            <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                        lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Seleccionar:</p>
                            <input
                                disabled={true}
                                style={{fontFamily: 'Mukta, sans-serif', width: 242 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`,
                                        fontWeight: 500, color: '#212121', cursor: 'default'}}
                                className='form-select border-0 mb-0 default'
                                defaultValue={tipo_documento === '' ? 'Documento' : tipo_documento}
                                onChange={() => setTipoDocumento(tipo_documento)}
                                value={tipo_documento}
                            />
                        </div>
                        <div className='d-flex shadow-sm bg-white rounded' style={{width: 350 / proporcional, height: 50 / proporcional, marginLeft: 15 / proporcional, border: enro_documento ? '1px solid red' : '1px solid #B2DFDB', 
                                                        borderRadius: 4 / proporcional}}>
                            <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                        lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 6600, cursor: 'default'}} className='mb-0'>Número:</p>
                            <PatternFormat 
                                id='nro_documeno'
                                disabled={true}
                                style={{fontFamily: 'Mukta, sans-serif', width: 242 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`, 
                                        fontWeight: 500, color: '#212121'}}
                                className='form-control border-0 '
                                value={tipo_documento === 'D.N.I' ? nro_documento.slice(0, 8) : tipo_documento === 'Pasaporte' ? nro_documento.slice(0, 9) : nro_documento}
                                onChange={(event) => {setNroDocumento(event.target.value)}}
                                onBlur={() => {}}
                                placeholder='e.j 4060xxxx'
                                format={tipo_documento === 'D.N.I' ? '########' : tipo_documento === 'Pasaporte' ? '########' : '############'} />
                        </div>
                    </div>
                    <div className='d-flex' style={{width: 730 / proporcional, height: 50 / proporcional, marginBottom: 16.66 / proporcional}}>
                        <div className='d-flex shadow-sm bg-white rounded' style={{width: 350 / proporcional, height: 50 / proporcional, marginRight: 15 / proporcional, border: '1px solid #B2DFDB', 
                                                        borderRadius: 4 / proporcional}}>
                            <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                        lineHeight: `${24 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Fecha <br/>nacimiento:</p>
                            <input
                                disabled={true}
                                style={{fontFamily: 'Mukta, sans-serif', width: 242 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`,
                                        fontWeight: 500, color: '#212121', cursor: 'default'}}
                                className='form-select border-0 mb-0 default'
                                defaultValue={fecha_nacimiento === '' ? 'dd/mm/aaaa' : fecha_nacimiento}
                                onChange={() => setFechanacimiento(fecha_nacimiento)}
                                value={fecha_nacimiento}
                            />
                        </div>
                        <div className='d-flex shadow-sm bg-white rounded' style={{width: 350 / proporcional, height: 50 / proporcional, marginLeft: 15 / proporcional, border: enro_telefono ? '1px solid red' : '1px solid #B2DFDB', 
                                                        borderRadius: 4 / proporcional}}>
                            <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                        lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Teléfono:</p>
                            <PhoneInput
                                disabled={true}
                                id='nro_telefono'
                                style={{fontFamily: 'Mukta, sans-serif', width: 242 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`, fontWeight: 500, color: '#212121',
                                        borderWidth: 0, marginTop: 1 / proporcional}}
                                className='form-control border-0'
                                value={nro_telefono}
                                onChange={(value) => {setNroTelefono(value)}}
                                placeholder='E.j: 968xxxxxx'/>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: 730 / proporcional, height: 50 / proporcional}}>
                        <div className='d-flex shadow-sm bg-white rounded' style={{width: 730 / proporcional, height: 50 / proporcional, marginRight: 15 / proporcional, border: ecorreo ? '1px solid red' : '1px solid #B2DFDB', 
                                                        borderRadius: 4 / proporcional}}>
                            <p style={{fontFamily: 'Mukta, sans-serif', width: 148 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                        lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Correo electrónico:</p>
                            <input type='email'
                                disabled={true}
                                style={{fontFamily: 'Mukta, sans-serif', width: 572 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`, 
                                        fontWeight: 500, color: '#212121'}}
                                className='form-control border-0'
                                value={correo}
                                onChange={(event) => {setCorreo(event.target.value)}}
                                onBlur={() => {(correo !== '' && correo.split('@')[1]) === undefined ? setECorreo(true) : setECorreo(false)}}
                                id='correo'
                                placeholder='E.j. nombres@dominio.com'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='' style={{width: 1000 / proporcional}}>
                <div className='d-flex' style={{width: 1000 / proporcional, height: 50 / proporcional, marginBottom: 12.5 / proporcional}}>
                    <div className='d-flex shadow-sm bg-white rounded' style={{width: 318 / proporcional, height: 50 / proporcional, marginRight: 15.33 / proporcional, border: '1px solid #B2DFDB', 
                                                    borderRadius: 4 / proporcional}}>
                        <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                    lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Marca del carro:</p>
                        <input
                            type='text'
                            disabled={true}
                            style={{fontFamily: 'Mukta, sans-serif', width: 210 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`,
                                    fontWeight: 500, color: '#212121', cursor: 'default'}}
                            className='form-control border-0 mb-0 default'
                            onChange={(event) => setMarcaCarro (event.target.value)}
                            value={marca_carro}
                            placeholder='E.j.: Chevrolet'
                        />
                    </div>
                    <div className='d-flex shadow-sm bg-white rounded' style={{width: 318 / proporcional, height: 50 / proporcional, marginLeft: 7.665 / proporcional, 
                                marginRight: 7.665 / proporcional, border: '1px solid #B2DFDB', borderRadius: 4 / proporcional}}>
                        <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                    lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Modelo del carro:</p>
                        <input
                            type='text'
                            disabled={true}
                            style={{fontFamily: 'Mukta, sans-serif', width: 210 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`,
                                    fontWeight: 500, color: '#212121', cursor: 'default'}}
                            className='form-control border-0 mb-0 default'
                            onChange={(event) => setModeloCarro (event.target.value)}
                            value={modelo_carro}
                            placeholder='E.j.: Cavalier'
                        />
                    </div>
                    <div className='d-flex shadow-sm bg-white rounded' style={{width: 318 / proporcional, height: 50 / proporcional, marginLeft: 15.33 / proporcional, border: enombres ? '1px solid red' : '1px solid #B2DFDB', 
                                                    borderRadius: 4 / proporcional}}>
                        <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                    lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Placa:</p>
                        <input type='text'
                            disabled={true}
                            style={{fontFamily: 'Mukta, sans-serif', width: 210 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`,
                                    fontWeight: 500, color: '#212121'}}
                            className='form-control border-0'
                            value={placa}
                            onChange={(event) => {setNroPlaca(event.target.value)}}
                            id='placa'
                            placeholder='e.j CO43XX'/>
                    </div>
                </div>
                <div className='d-flex' style={{width: 730 / proporcional, height: 50 / proporcional, marginBottom: 12.5 / proporcional}}>
                    <div className='d-flex shadow-sm bg-white rounded' style={{width: 318 / proporcional, height: 50 / proporcional, marginRight: 15.33 / proporcional, border: '1px solid #B2DFDB', 
                                                    borderRadius: 4 / proporcional}}>
                        <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                    lineHeight: `${24 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Licencia <br/>conducir:</p>
                        <input type='text'
                            disabled={true}
                            style={{fontFamily: 'Mukta, sans-serif', width: 210 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`, 
                                    fontWeight: 500, color: '#212121'}}
                            className='form-control border-0'
                            value={licencia_conducir}
                            onChange={(event) => {setLicenciaConducir(event.target.value)}}
                            id='licencia_conducir'
                            placeholder='Licencia de conducir'/>
                    </div>
                    <div className='d-flex shadow-sm bg-white rounded' style={{width: 318 / proporcional, height: 50 / proporcional, marginLeft: 7.665 / proporcional, 
                                marginRight: 7.665 / proporcional, border: '1px solid #B2DFDB',  borderRadius: 4 / proporcional}}>
                        <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                    lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Clase:</p>
                        <input type='text'
                            disabled={true}
                            style={{fontFamily: 'Mukta, sans-serif', width: 210 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`, 
                                    fontWeight: 500, color: '#212121'}}
                            className='form-control border-0'
                            value={clase}
                            onChange={(event) => {setClase(event.target.value)}}
                            id='clase'
                            placeholder='Clase'/>
                    </div>
                    <div className='d-flex shadow-sm bg-white rounded' style={{width: 318 / proporcional, height: 50 / proporcional, marginLeft: 15.33 / proporcional, border:'1px solid #B2DFDB', 
                                                    borderRadius: 4 / proporcional}}>
                        <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                    lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Categoría:</p>
                        <input type='text'
                            disabled={true}
                            style={{fontFamily: 'Mukta, sans-serif', width: 210 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`, 
                                    fontWeight: 500, color: '#212121'}}
                            className='form-control border-0'
                            value={categoria}
                            onChange={(event) => {setCategoria(event.target.value)}}
                            id='categoria'
                            placeholder='Categoría'/>
                    </div>
                </div>
                <div className='d-flex' style={{width: 730 / proporcional, height: 50 / proporcional, marginBottom: 12.5 / proporcional}}>
                    <div className='d-flex shadow-sm bg-white rounded' style={{width: 318 / proporcional, height: 50 / proporcional, marginRight: 15.33 / proporcional, border: '1px solid #B2DFDB', 
                                                    borderRadius: 4 / proporcional}}>
                        <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                    lineHeight: `${24 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Fecha <br/>expedición:</p>
                        <input
                            disabled={true}
                            type='date'
                            id='fecha_expedicion' 
                            className='form-control border-0'
                            value={fecha_expedicion}
                            range
                            placeholder={fecha_expedicion === '' ? 'MM/DD/AAAA' : fecha_expedicion}
                            numberOfMonths={1}
                            onChange={(event) => {
                                setFechaExpedicion (event.target.value)
                            }}
                            style={{fontFamily: 'Mukta, sans-serif', width: 242 / proporcional, height: 47 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`, fontWeight: 500, color: '#212121',
                                    borderWidth: 0}}
                        />
                    </div>
                    <div className='d-flex shadow-sm bg-white rounded' style={{width: 318 / proporcional, height: 50 / proporcional, marginLeft: 7.665 / proporcional, 
                                marginRight: 7.665 / proporcional, border: '1px solid #B2DFDB',  borderRadius: 4 / proporcional}}>
                        <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                    lineHeight: `${24 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Fecha <br/>revalidación:</p>
                        <input
                            disabled={true}
                            type='date'
                            id='fecha_revalidacion' 
                            className='form-control border-0'
                            value={fecha_revalidacion}
                            range
                            placeholder={fecha_revalidacion === '' ? 'MM/DD/AAAA' : fecha_revalidacion}
                            numberOfMonths={1}
                            onChange={(event) => {
                                setFechaRevalidacion (event.target.value)
                            }}
                            style={{fontFamily: 'Mukta, sans-serif', width: 242 / proporcional, height: 47 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`, fontWeight: 500, color: '#212121',
                                    borderWidth: 0}}
                        />
                    </div>
                    <div className='d-flex shadow-sm bg-white rounded' style={{width: 318 / proporcional, height: 50 / proporcional, marginLeft: 15.33 / proporcional, border:'1px solid #B2DFDB', 
                                                    borderRadius: 4 / proporcional}}>
                        <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                    lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Color:</p>
                        <input type='text'
                            style={{fontFamily: 'Mukta, sans-serif', width: 210 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`, 
                                    fontWeight: 500, color: '#212121'}}
                            className='form-control border-0'
                            value={color}
                            onChange={(event) => {setColor(event.target.value)}}
                            id='color'
                            placeholder='Color carro'/>
                    </div>
                </div>
            </div>
            <div className='d-flex' style={{width: 1000 / proporcional, height: 'auto', marginBottom: 12.5 / proporcional}}>
                <div className='' style={{width: 485 / proporcional, marginRight: 15 / proporcional}}>
                    <div className='shadow bg-white rounded'
                        style={{width: 485 / proporcional, height: 250 / proporcional, border: '2px dashed #B2DFDB', padding: 2 / proporcional}}>
                        <img src={foto_documento === '' ? icon_documento : foto_documento} 
                            style={{width: foto_documento === '' ? 128 / proporcional : 242 / proporcional, height: 128 / proporcional, marginLeft: 178.5 / proporcional,
                            marginRight: 178.5 / proporcional, marginTop: 61 / proporcional, marginBottom: 61 / proporcional}} alt=''/>
                    </div>
                </div>
                <div className='' style={{width: 485 / proporcional, marginLeft: 15 / proporcional}}>
                    <div className='shadow bg-white rounded'
                        style={{width: 485 / proporcional, height: 250 / proporcional, border: '2px dashed #B2DFDB', padding: 2 / proporcional}}>
                        <img src={foto_licencia === '' ? icon_licencia : foto_licencia} 
                            style={{width: foto_licencia === '' ? 128 / proporcional : 242 / proporcional, height: 128 / proporcional, marginLeft: 178.5 / proporcional,
                            marginRight: 178.5 / proporcional, marginTop: 61 / proporcional, marginBottom: 61 / proporcional}} alt=''/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-end' style={{width: 1000 / proporcional, height: 50 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: 485 / proporcional}}>
                    <button className='btn text-icons shadow rounded' 
                            onClick={() => {navigate ('/home/conductores'); window.scrollTo(0, 0); setBotonVolver(false)}} 
                            onMouseOver={() => setBotonVolver(true)} onMouseLeave={() => setBotonVolver(false)}
                            style={{fontFamily: 'PT Serif, sans-serif', width: boton_volver ? 475 / proporcional : 485 / proporcional, height: 50 / proporcional, fontWeight: 500,
                                    fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, border: '2px solid #9E9E9E', background: boton_volver ? '#9E9E9E' : 'white', 
                                    color: boton_volver ? 'white' : '#9E9E9E'}}>
                        VOLVER
                    </button>
                 </div>
            </div>
        </div>
    )
}
