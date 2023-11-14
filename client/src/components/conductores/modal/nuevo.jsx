import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set_conductor_new } from '../../../redux/actions/conductoresactions'
import { conductoresdata } from '../../../redux/slice/conductoresdata'
import { conductoresConstants } from '../../../uri/conductores-constants'

import icon_conductor from '../../../iconos/icon_conductor.png'

export default function ModalNuevo({tosave, proporcional}) {

    const dispatch = useDispatch()

    const [boton_salir, setBotonSalir] = useState (false)
    const [boton_guardar_otro, setBotonGuardaryOtro] = useState (false)
    const [boton_guardar, setBotonGuardar] = useState (false)

    useEffect(() => {
        return () => {}
    })
    
    return (
        <div className='position-absolute h-100 top-0 start-0' 
            style={{width: 1920 / proporcional, background: 'rgba(189, 189, 189, 0.6)',
                    height: 'auto', top: 0 / proporcional, right: 0 / proporcional}}>
            <div id='nuevo-conductor' className='shadow-lg rounded position-fixed' 
                    style={{width: 697 / proporcional, background: 'white', zIndex: 99999, padding: 10 / proporcional, top: 100 / proporcional, right: 0 / proporcional, height: 'auto'}}>
                <p style={{fontFamily: 'Lora, serif', fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 12.5 / proporcional, color: '#212121', fontWeight: 500, textAlign: 'center'}}>
                    ESTA A PUNTO DE GUARDAR UN NUEVO <br/>CONDUCTOR
                </p>
                <div className='d-flex' style={{width: 677 / proporcional, height: 180 / proporcional, marginBottom: 12.5 / proporcional}}>
                    <div style={{width: 180 / proporcional, height: 180 / proporcional, border: '1px solid #9E9E9E', borderRadius: 4 / proporcional, 
                                    padding: 2 / proporcional}}>
                        <img src={tosave.foto_perfil === '' ? icon_conductor : tosave.foto_perfil} alt='' 
                             style={{width: 174 / proporcional, height: 174 / proporcional, border: 4 / proporcional}}/>
                    </div>
                    <div style={{width: 487 / proporcional, height: 180 / proporcional, marginLeft: 10 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
                        <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                            <span style={{color: '#757575', fontSize: 14 / proporcional, fontWeight: 500, lineHeight: `${20 / proporcional}px`}}>Nombres y apellidos:</span> {tosave.nombres} {tosave.apellidos}
                        </p>
                        <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                            <span style={{color: '#757575', fontSize: 14 / proporcional, fontWeight: 500, lineHeight: `${20 / proporcional}px`}}>
                                {tosave.tipo_documento === '' ? 'Documento': tosave.tipo_documento}:</span> {tosave.nro_documento}
                        </p>
                        <p className='mb-0' style={{fontFamily: 'Mukta, sans-serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                            <span style={{color: '#757575', fontSize: 14 / proporcional, fontWeight: 500, lineHeight: `${20 / proporcional}px`}}>
                                Número de teléfono:</span> {tosave.nro_telefono}
                        </p>
                        <p className='mb-0' style={{fontFamily: 'Mukta, sans-serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                            <span style={{color: '#757575', fontSize: 14 / proporcional, fontWeight: 500, lineHeight: `${20 / proporcional}px`}}>Fecha nacimiento:</span> {tosave.fecha_nacimiento}
                        </p>
                        <p className='mb-0' style={{fontFamily: 'Mukta, sans-serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                            <span style={{color: '#757575', fontSize: 14 / proporcional, fontWeight: 500, lineHeight: `${20 / proporcional}px`}}>E-mail:</span> {tosave.correo}
                        </p>
                        <div className='d-flex justify-content-between' style={{width: 477 / proporcional}}>
                            <p className='mb-0' style={{width: 159 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                                <span style={{color: '#757575', fontSize: 14 / proporcional, fontWeight: 500, lineHeight: `${20 / proporcional}px`}}>Marca:</span> {tosave.marca_carro}
                            </p>
                            <p className='mb-0' style={{width: 159 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                                <span style={{color: '#757575', fontSize: 14 / proporcional, fontWeight: 500, lineHeight: `${20 / proporcional}px`}}>Modelo:</span> {tosave.modelo_carro}
                            </p>
                            <p className='mb-0' style={{width: 159 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                                <span style={{color: '#757575', fontSize: 14 / proporcional, fontWeight: 500, lineHeight: `${20 / proporcional}px`}}>Color:</span> {tosave.color_carro}
                            </p>
                        </div>
                        <div className='d-flex justify-content-between' style={{width: 477 / proporcional}}>
                            <p className='mb-0' style={{width: 159 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                                <span style={{color: '#757575', fontSize: 14 / proporcional, fontWeight: 500, lineHeight: `${20 / proporcional}px`}}>Licencia:</span> {tosave.licencia_conducir}
                            </p>
                            <p className='mb-0' style={{width: 159 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                                <span style={{color: '#757575', fontSize: 14 / proporcional, fontWeight: 500, lineHeight: `${20 / proporcional}px`}}>Categoría:</span> {tosave.categoria}
                            </p>
                            <p className='mb-0' style={{width: 159 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                                <span style={{color: '#757575', fontSize: 14 / proporcional, fontWeight: 500, lineHeight: `${20 / proporcional}px`}}>Clase:</span> {tosave.clase}
                            </p>
                        </div>
                        <div className='d-flex justify-content-between' style={{width: 477 / proporcional}}>
                            <p className='mb-0' style={{width: 238.5 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                                <span style={{color: '#757575', fontSize: 14 / proporcional, fontWeight: 500, lineHeight: `${20 / proporcional}px`}}>Fecha expedición:</span> {tosave.fecha_expedicion}
                            </p>
                            <p className='mb-0' style={{width: 238.5 / proporcional, fontFamily: 'Mukta, sans-serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                                <span style={{color: '#757575', fontSize: 14 / proporcional, fontWeight: 500, lineHeight: `${20 / proporcional}px`}}>Fecha revalidación:</span> {tosave.fecha_revalidacion}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex' style={{width: 677 / proporcional}}>
                    <button className='btn dark-primary text-icons' onClick={() => {dispatch(set_conductor_new({success: '0'})); window.scrollTo(0, 0); setBotonSalir(false)}} 
                            onMouseOver={() => setBotonSalir(true)} onMouseLeave={() => setBotonSalir(false)}
                            style={{fontFamily: 'PT Serif, serif', width: 215.33 / proporcional, marginRight: 10 / proporcional, height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`,
                            border: '2px solid #9E9E9E', color: boton_salir ? 'white' : '#9E9E9E', background: boton_salir ? '#9E9E9E' : 'white'}}>
                        CANCELAR
                    </button>
                    <button className='btn dark-primary text-icons' onClick={() => {{dispatch(set_conductor_new({success: '1'})); window.scrollTo(0, 0)}; setBotonGuardar(false);
                                                                                    dispatch (conductoresdata(conductoresConstants(0, 0, 0, 0, 0, 0, 0, 0, tosave, false).new_conductor))}} 
                            onMouseOver={() => setBotonGuardaryOtro(true)} onMouseLeave={() => setBotonGuardaryOtro(false)}
                            style={{fontFamily: 'PT Serif, serif', width: 215.33 / proporcional, marginRight: 5 / proporcional, marginLeft: 5 / proporcional, height: 50 / proporcional, 
                                    fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`,
                            border: '2px solid #9E9E9E', color: boton_guardar_otro ? '#9E9E9E' : 'white', background: boton_guardar_otro ? 'white' : '#9E9E9E'}}>
                        GUARDAR Y AGREGAR OTRO
                    </button>
                    <button className='btn dark-primary text-icons' onClick={() => {{dispatch(set_conductor_new({success: '2'})); window.scrollTo(0, 0)}; setBotonGuardar(false);
                                                                                    dispatch (conductoresdata(conductoresConstants(0, 0, 0, 0, 0, 0, 0, 0, tosave, false).new_conductor))}} 
                            onMouseOver={() => setBotonGuardar(true)} onMouseLeave={() => setBotonGuardar(false)}
                            style={{fontFamily: 'PT Serif, serif', width: 215.33 / proporcional, marginLeft: 10 / proporcional, height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`,
                            border: '2px solid #9E9E9E', background: boton_guardar ? '#9E9E9E' : 'white',  color: boton_guardar ? 'white' : '#9E9E9E'
                            }}>
                        GUARDAR
                    </button>
                </div>
            </div>
        </div>
    )
}