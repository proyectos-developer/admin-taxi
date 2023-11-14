import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {PatternFormat} from 'react-number-format';
import PhoneInput from 'react-phone-number-input'
import AvatarEditor from 'react-avatar-editor'
import 'react-phone-number-input/style.css'

import {constantes} from '../../uri/constantes.js'
import {set_conductor_new, set_data_conductor} from '../../redux/actions/conductoresactions.js'

import saved from '../../iconos/icon_save_white.png'

import icon_conductor from '../../iconos/icon_conductor.png'
import icon_licencia from '../../iconos/icon_licencia.png'
import icon_documento from '../../iconos/icon_documento.png'

import ModalNuevo from './modal/nuevo.jsx'
import {conductoresdata} from '../../redux/slice/conductoresdata.js';
import { conductoresConstants } from '../../uri/conductores-constants.js';
import ModalCargando from '../modal/cargando.jsx';

export default function NuevoProveedor({proporcional}) {
    
    const dispatch = useDispatch()
    const navigate = useNavigate ()
    
    const [nombres, setNombres] = useState ('')
    const [apellidos, setApellidos] = useState ('')
    const [fecha_nacimiento, setFechaNacimiento] = useState ('')
    const [tipo_documento, setTipoDocumento] = useState ('Documento')
    const [nro_documento, setNroDocumento] = useState ('')
    const [show_tipo_documento, setShowTipoDocumento] = useState(false)
    const [seleccion_tipo_documento, setSeleccionTipoDocumento] = useState(false)
    const [nro_telefono, setNroTelefono] = useState ('')
    const [correo, setCorreo] = useState ('')
    const [licencia_conducir, setLicenciaConducir] = useState ('')
    const [placa, setPlaca] = useState ('')
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

    const [show_message_conductor, setShowMessageConductor] = useState (false)
    const [message_conductor, setMessageConductor] = useState (false)

    const [boton_continuar_conductor, setBotonContinuarConductor] = useState(false)

    const [loading_nuevo, setLoadingNuevo] = useState (false)
    const [nuevo_conductor, setNuevoProveedor] = useState (false)

    const conductores = useSelector(({conductores}) => conductores)
    const {new_conductor} = useSelector(({conductores}) => conductores)
    const {conductor_new} = useSelector(({conductoresreducer}) => conductoresreducer)

    let dataeditorperfil = null
    let dataeditordocumento = null
    let dataeditorlicencia = null
    
    useEffect(() => {
        if (new_conductor && new_conductor.success === true && (conductor_new.success === '2' || conductor_new.success === '1')){
            setLoadingNuevo(false)
            resetear_datos()
            setShowMessageConductor (true)
            window.scrollTo(0,0)
            setMessageConductor(`¡Se guardo el conductor ${new_conductor.conductor.nombres} con éxito!`)
            if (conductor_new.success === '2'){
                dispatch (set_data_conductor({conductor: new_conductor.conductor}));
            }
        }
        window.scrollTo(0, 0)
    }, [new_conductor])

    useEffect (() => {
        if (conductor_new && conductor_new.success === '0'){
            setLoadingNuevo (false)
            window.scrollTo(0, 0)
        }
    }, [conductor_new])

    const set_editor_perfil = editor => {
        dataeditorperfil = editor
    }

    const handle_image_perfil = (e) => {
        const image = e.target.files[0]
        setFotoPerfil (image)
    }

    const handle_editar_perfil = (e) => {
        const fileInput = document.getElementById('foto-conductor')
        fileInput.click() 
    }
    
    const set_editor_documento = editor => {
        dataeditordocumento = editor
    }

    const handle_image_documento = (e) => {
        const image = e.target.files[0]
        setFotoDocumento (image)
    }

    const handle_editar_documento = (e) => {
        const fileInput = document.getElementById('foto-documento')
        fileInput.click() 
    }
    
    const set_editor_licencia = editor => {
        dataeditorlicencia = editor
    }

    const handle_image_licencia = (e) => {
        const image = e.target.files[0]
        setFotoLicencia (image)
    }

    const handle_editar_licencia = (e) => {
        const fileInput = document.getElementById('foto-licencia')
        fileInput.click() 
    }

    const save_data_conductor = () => {
        if (nombres === '' || nro_documento === '' || nro_telefono === ''){
            setENombres(nombres === '' ? true : false)
            setENroDocumento(nro_documento === '' ? true : false)
            setENroTelefono(nro_telefono === '' ? true : false)
        }else{
            setNuevoProveedor({
                nombres: nombres,
                apellidos: apellidos,
                fecha_nacimiento: fecha_nacimiento,
                tipo_documento: tipo_documento,
                nro_documento: nro_documento,
                nro_telefono: nro_telefono,
                correo: correo,
                habilitado: true,
                licencia_conducir: licencia_conducir,
                nro_placa: placa,
                clase: clase,
                categoria: categoria,
                fecha_expedicion: fecha_expedicion,
                fecha_revalidacion: fecha_revalidacion,
                marca_carro: marca_carro,
                modelo_carro: modelo_carro, 
                color_carro: color,
                foto_perfil: dataeditorperfil === null ? '' : dataeditorperfil.getImageScaledToCanvas().toDataURL(),
                foto_licencia: dataeditorlicencia === null ? '' : dataeditorlicencia.getImageScaledToCanvas().toDataURL(),
                foto_documento: dataeditordocumento === null ? '' : dataeditordocumento.getImageScaledToCanvas().toDataURL(),
            })
            setLoadingNuevo(true)
        }
    }

    const cerrar_message_conductor = () => {
        if (conductor_new.success === '1' || conductor_new.success === '2'){
            dispatch (conductoresdata(conductoresConstants(0, 0, 0, 0, 0, 0, 0, 0, {}, true).new_conductor))
            dispatch (set_conductor_new({success: false}))
            setShowMessageConductor(false)
            setMessageConductor('') 
            if (conductor_new.success === '2'){
                navigate('/home/conductores')
            }
            window.scrollTo(0, 0)
        }
    }

    const resetear_datos = () => {
        setNombres ('')
        setApellidos('')
        setTipoDocumento('Documento')
        setNroDocumento('')
        setNroTelefono('')
        setCorreo('')
        setFechaNacimiento('')
        setMarcaCarro('')
        setModeloCarro('')
        setPlaca('')
        setLicenciaConducir('')
        setClase('')
        setCategoria('')
        setFechaExpedicion('')
        setFechaRevalidacion('')
        setColor('')
        setFotoPerfil('')
        setFotoLicencia('')
        setFotoDocumento('')
    }

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
                        <div id='imagen rounded-circle' className='as-center rounded-circle' type='button' onClick={() => handle_editar_perfil()}>
                            {
                                foto_perfil === '' ? (
                                    <img src={icon_conductor} style={{width: 248 / proporcional, height: 248 / proporcional}} alt='' className='rounded-circle'/>
                                ) : (
                                    <AvatarEditor
                                        className='rounded-circle'
                                        width={196 / proporcional}
                                        height={196 / proporcional}
                                        image={foto_perfil === '' ? icon_conductor : foto_perfil} 
                                        color={[255, 255, 255, 0]}
                                        borderRadius={parseFloat(4)}
                                        scale={1.2 / proporcional}
                                        ref={(editor) => set_editor_perfil (editor)}
                                    />  
                                )
                            }
                            < input href='#' hidden='hidden' className='btn' type='file' accept='.gif, .jpg, .jpeg, .png'
                                id='foto-conductor' onChange={(event) => handle_image_perfil(event)} />
                        </div>
                    </div>
                </div>
                <div className='' style={{width: 730 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: 730 / proporcional, height: 50 / proporcional, marginBottom: 16.66 / proporcional}}>
                        <div className='d-flex shadow-sm bg-white rounded' style={{width: 350 / proporcional, height: 50 / proporcional, marginRight: 15 / proporcional, border: enombres ? '1px solid red' : '1px solid #B2DFDB', 
                                                        borderRadius: 4 / proporcional}}>
                            <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                        lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Nombres (*):</p>
                            <input type='text'
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
                                style={{fontFamily: 'Mukta, sans-serif', width: 242 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`,
                                        fontWeight: 500, color: '#212121', cursor: 'default'}}
                                className='form-select border-0 mb-0 default'
                                defaultValue={tipo_documento === '' ? 'Documento' : tipo_documento}
                                onClick={() => setShowTipoDocumento (true)}
                                onFocus={() => setShowTipoDocumento (true)}
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
                                disabled={tipo_documento === 'Documento' ? true : false}
                                style={{fontFamily: 'Mukta, sans-serif', width: 242 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`, 
                                        fontWeight: 500, color: '#212121'}}
                                className='form-control border-0 '
                                value={tipo_documento === 'D.N.I' ? nro_documento.slice(0, 8) : tipo_documento === 'Pasaporte' ? nro_documento.slice(0, 9) : nro_documento}
                                onChange={(event) => {setNroDocumento(event.target.value)}}
                                onBlur={() => {}}
                                placeholder='e.j 4060xxxx'
                                format={tipo_documento === 'D.N.I' ? '########' : tipo_documento === 'Pasaporte' ? '########' : '############'} />
                        </div>
                        {
                            show_tipo_documento ? (
                                <div className='position-absolute start-0 h-100' style={{background: 'rgba(189, 189, 189, 0.6)', zIndex: 99999, width: 1920 / proporcional, top: 0 / proporcional,
                                    height: 'auto'}} onClick={() => setShowTipoDocumento(false)}>
                                    <div className='position-absolute shadow bg-body rounded' 
                                        style={{zIndex: 999999, width: 350 / proporcional, padding: 10 / proporcional, background: 'white', borderRadius: 4 / proporcional, top: 316.65 / proporcional, left: 730 / proporcional}}>
                                        <p className='mb-0'
                                            style={{fontFamily: 'Mukta, sans-serif', fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', fontWeight: 600, cursor: 'default', textAlign: 'center',
                                                    marginBottom: 7.5 / proporcional}}>
                                                Tipo documento
                                        </p>
                                        <div style={{width: 310 / proporcional, height: 2 / proporcional, border: '1px dashed #BDBDBD', marginTop: 5 / proporcional, marginBottom: 5 / proporcional}}/>
                                        <div style={{width: 310 / proporcional, minHeight: 40 / proporcional, maxHeight: 100 / proporcional, height: 'auto', padding: 2 / proporcional}} className='overflow-auto'>
                                            {
                                                constantes().lista_tipo_documento.map((documento, index) => {
                                                    return (
                                                        <p key={index} className='mb-0 cursor-pointer' onClick={() => {setTipoDocumento(documento.documento); setShowTipoDocumento(false)}}
                                                            onMouseOver={() => setSeleccionTipoDocumento (documento.documento)} onMouseLeave={() => setSeleccionTipoDocumento('')}
                                                            style={{fontFamily: 'Mukta, sans-serif', fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, color: seleccion_tipo_documento === documento.documento ? 'white' : '#212121', fontWeight: 500, 
                                                                    background: seleccion_tipo_documento === documento.documento ? '#9E9E9E' : 'white', marginTop: 5 / proporcional, marginBottom: 7.5 / proporcional, borderRadius: 4 / proporcional, cursor: 'pointer'}}>
                                                            {documento.documento}
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div style={{width: 310 / proporcional, height: 2 / proporcional, border: '1px dashed #BDBDBD', marginTop: 5 / proporcional, marginBottom: 5 / proporcional}}/>
                                        <p className='mb-0 cursor-pointer' onClick={() => setShowTipoDocumento(false)}
                                                onMouseOver={() => setSeleccionTipoDocumento ('Cerrar')} onMouseLeave={() => setSeleccionTipoDocumento('')}
                                                style={{fontFamily: 'Mukta, sans-serif', fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, color: seleccion_tipo_documento === 'Cerrar' ? 'white' : '#212121', fontWeight: 500, 
                                                        background: seleccion_tipo_documento === 'Cerrar' ? '#9E9E9E' : 'white', marginTop: 5 / proporcional, marginBottom: 7.5 / proporcional, borderRadius: 4 / proporcional, cursor: 'pointer'}}>
                                                Cerrar
                                        </p>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                    <div className='d-flex' style={{width: 730 / proporcional, height: 50 / proporcional, marginBottom: 16.66 / proporcional}}>
                        <div className='d-flex shadow-sm bg-white rounded' style={{width: 350 / proporcional, height: 50 / proporcional, marginRight: 15 / proporcional, border: '1px solid #B2DFDB', 
                                                        borderRadius: 4 / proporcional}}>
                            <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                        lineHeight: `${24 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Fecha <br/>nacimiento:</p>
                            <input
                                type='date'
                                id='fecha_nacimiento' 
                                className='form-control border-0'
                                value={fecha_nacimiento}
                                range
                                placeholder={fecha_nacimiento === '' ? 'MM/DD/AAAA' : fecha_nacimiento}
                                numberOfMonths={1}
                                onChange={(event) => {
                                    setFechaNacimiento (event.target.value)
                                }}
                                style={{fontFamily: 'Mukta, sans-serif', width: 242 / proporcional, height: 47 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`, fontWeight: 500, color: '#212121',
                                        borderWidth: 0}}
                            />
                        </div>
                        <div className='d-flex shadow-sm bg-white rounded' style={{width: 350 / proporcional, height: 50 / proporcional, marginLeft: 15 / proporcional, border: enro_telefono ? '1px solid red' : '1px solid #B2DFDB', 
                                                        borderRadius: 4 / proporcional}}>
                            <p style={{fontFamily: 'Mukta, sans-serif', width: 98 / proporcional, height: 48 / proporcional, fontSize: 16 / proporcional, 
                                        lineHeight: `${48 / proporcional}px`, color: '#757575', marginLeft: 10 / proporcional, fontWeight: 600, cursor: 'default'}} className='mb-0'>Teléfono:</p>
                            <PhoneInput
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
                            style={{fontFamily: 'Mukta, sans-serif', width: 210 / proporcional, height: 46 / proporcional, fontSize: 18 / proporcional, lineHeight: `${46 / proporcional}px`,
                                    fontWeight: 500, color: '#212121'}}
                            className='form-control border-0'
                            value={placa}
                            onChange={(event) => {setPlaca(event.target.value)}}
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
                        <div id='imagen default' className='as-center rounded' type='button' onClick={() => handle_editar_documento()}>
                            {
                                foto_documento === '' ? (
                                    <img src={icon_documento} style={{width: 128 / proporcional, height: 128 / proporcional, marginLeft: 178.5 / proporcional,
                                        marginRight: 178.5 / proporcional, marginTop: 61 / proporcional, marginBottom: 61 / proporcional}} alt=''/>
                                ) : (
                                    <AvatarEditor
                                        width={429 / proporcional}
                                        height={194 / proporcional}
                                        image={foto_documento} 
                                        color={[255, 255, 255, 0]}
                                        borderRadius={parseFloat(4)}
                                        scale={1.2 / proporcional}
                                        ref={(editor) => set_editor_documento (editor)}
                                    />  
                                )
                            }
                            < input href='#' hidden='hidden' className='btn' type='file' accept='.gif, .jpg, .jpeg, .png'
                                id='foto-documento' onChange={(event) => handle_image_documento(event)} />
                        </div>
                    </div>
                </div>
                <div className='' style={{width: 485 / proporcional, marginLeft: 15 / proporcional}}>
                    <div className='shadow bg-white rounded'
                        style={{width: 485 / proporcional, height: 250 / proporcional, border: '2px dashed #B2DFDB', padding: 2 / proporcional}}>
                        <div id='imagen default' className='as-center rounded' type='button' onClick={() => handle_editar_licencia()}>
                            {
                                foto_licencia === '' ? (
                                    <img src={icon_licencia} style={{width: 128 / proporcional, height: 128 / proporcional, marginLeft: 178.5 / proporcional,
                                        marginRight: 178.5 / proporcional, marginTop: 61 / proporcional, marginBottom: 61 / proporcional}} alt=''/>
                                ) : (
                                    <AvatarEditor
                                        width={429 / proporcional}
                                        height={194 / proporcional}
                                        image={foto_licencia} 
                                        color={[255, 255, 255, 0]}
                                        borderRadius={parseFloat(4)}
                                        scale={1.2 / proporcional}
                                        ref={(editor) => set_editor_licencia (editor)}
                                    />  
                                )
                            }
                            < input href='#' hidden='hidden' className='btn' type='file' accept='.gif, .jpg, .jpeg, .png'
                                id='foto-licencia' onChange={(event) => handle_image_licencia(event)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: 1000 / proporcional, height: 50 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: 485 / proporcional, marginRight: 15 / proporcional}}>
                    <button className='btn text-icons shadow rounded' 
                            onClick={() => {navigate ('/home/conductores'); window.scrollTo(0, 0); setBotonVolver(false); resetear_datos ()}} 
                            onMouseOver={() => setBotonVolver(true)} onMouseLeave={() => setBotonVolver(false)}
                            style={{fontFamily: 'PT Serif, sans-serif', width: boton_volver ? 475 / proporcional : 485 / proporcional, height: 50 / proporcional, fontWeight: 500,
                                    fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, border: '2px solid #9E9E9E', background: boton_volver ? '#9E9E9E' : 'white', 
                                    color: boton_volver ? 'white' : '#9E9E9E'}}>
                        VOLVER SIN GUARDAR
                    </button>
                 </div>
                <div className='d-flex justify-content-center' style={{width: 485 / proporcional, marginLeft: 15 / proporcional}}>
                    <button className='btn text-icons shadow rounded' 
                            onClick={() => {save_data_conductor(); window.scrollTo(0, 0); setBotonGuardar(false)}} 
                            onMouseOver={() => setBotonGuardar(true)} onMouseLeave={() => setBotonGuardar(false)}
                            style={{fontFamily: 'PT Serif, sans-serif', width: boton_guardar ? 475 / proporcional : 485 / proporcional, height: 50 / proporcional, fontWeight: 500,
                                    fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, border: '2px solid #9E9E9E', background: boton_guardar ? 'white' : '#9E9E9E', 
                                    color: boton_guardar ? '#9E9E9E' : 'white'}}>
                        GUARDAR CONDUCTOR
                    </button>
                </div>
            </div>
            {
                loading_nuevo ? (
                    <ModalNuevo tosave={nuevo_conductor} proporcional={proporcional}/>
                ) : null
            }
            {
                show_message_conductor ? (
                    <div className='position-absolute top-0 start-0 h-100' style={{background: 'rgba(189, 189, 189, 0.6)', zIndex: 99999, width: 1920 / proporcional, 
                        height: 'auto'}}>
                        <div id='nuevo-conductor' className={`position-fixed top-50 start-50 translate-middle shadow-lg rounded`}
                            style={{borderRadius: 8, width: 500 / proporcional, padding: 10 / proporcional, background: '#212121', height: 'auto'}}>
                            <div style={{width: 480 / proporcional, height: 'auto'}}>
                                <div className='d-flex justify-content-start' style={{width: 480 / proporcional, height: 'auto'}}>
                                    <img src={saved} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 7.5 / proporcional}}/>
                                    <p style={{fontFamily: 'Lora, serif', height: 20 / proporcional, fontSize: 16 / proporcional, marginBottom: 7.5 / proporcional,
                                                lineHeight: `${20 / proporcional}px`, color: '#ffffff', fontWeight: 500, cursor: 'default', textAlign: 'center'}} className=''>
                                        Nuevo conductor
                                    </p>
                                    </div>
                                <div style={{width: 480 / proporcional, height: 'auto', background: 'white', padding: 5 / proporcional}} className='rounded'>
                                    <p style={{fontFamily: 'Mukta, sans-serif', height: 40 / proporcional, fontSize: 16 / proporcional, marginBottom: 7.5 / proporcional,
                                                lineHeight: `${20 / proporcional}px`, color: '#212121', fontWeight: 500, cursor: 'default', textAlign: 'center'}} className=''>
                                        {message_conductor}
                                    </p>
                                    <div className='d-flex justify-content-center' style={{width: 480 / proporcional, height: 40 / proporcional}}>
                                        <button className='btn text-icons' onClick={() =>  {cerrar_message_conductor(); window.scrollTo(0, 0); setBotonContinuarConductor(false)}} 
                                                onMouseOver={() => setBotonContinuarConductor(true)} onMouseLeave={() => setBotonContinuarConductor(false)}
                                                    style={{fontFamily: 'PT Serif, serif', width: boton_continuar_conductor ? 240 / proporcional : 250 / proporcional, height: 40 / proporcional, 
                                                            fontWeight: boton_continuar_conductor ? 700 : 500,
                                                            fontSize: boton_continuar_conductor ? 14 / proporcional : 16 / proporcional, lineHeight: `${20 / proporcional}px`, border: '2px solid #212121', 
                                                            background: boton_continuar_conductor ? '#212121' : 'white', 
                                                            color: boton_continuar_conductor ? 'white' : '#212121'}}>
                                                CONTINUAR
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
            <ModalCargando loading={conductores.loading}/>
        </div>
    )
}
