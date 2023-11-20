import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { set_data_viaje } from '../../../redux/actions/viajesactions'

import view from '../../../iconos/view_white.png'
import hide from '../../../iconos/hide_white.png'
import details from '../../../iconos/details_white.png'
import icon_conductor from '../../../iconos/icon_conductor.png'

import { useNavigate } from 'react-router-dom'

export default function CardViaje({viaje, index, proporcional}) {

    const dispatch = useDispatch ()
    const navigate = useNavigate  ()

    const [ver, setVer] = useState (false)
    const [ver_icons, setVerIcons] = useState (false)
    const [boton_ver, setBotonVer] = useState (false)
    const [boton_details, setBotonDetails] = useState (false)
    const [boton_hide, setBotonHide] = useState (false)

    const mas_informacion = () => {
        dispatch(set_data_viaje({viaje, index}))
        navigate ('detalles-viaje')
    }

    useEffect (() => {
        return () => {
 
        }
    }, [])

    return (
        <div key={index} className='position-relative shadow-lg bg-body rounded default' 
            style={{width: 418 / proporcional, height: 'auto', marginLeft: 10 / proporcional, marginRight: 10 / proporcional, 
                    borderRadius: 4 / proporcional, border: '1px solid #757575'}}
                    onMouseOver={() => setVer(true)} onMouseLeave={() => setVer(false)}>
            <div key={index} className='position-relative' 
                style={{width: 418 / proporcional, height: 'auto', borderRadius: 4 / proporcional, padding: 10 / proporcional}}>
                <div className='' style={{width: 398 / proporcional, height: 'auto'}}>
                    <div className='d-flex justify-content-between' style={{width: 398 / proporcional, height: 20 / proporcional}}>
                        <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, textAlign: 'start', height: 20 / proporcional}}>
                            <span style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#757575'}}>Fecha: </span>{viaje.created_at.split('T')[0]}
                        </p>
                        <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, textAlign: 'end', height: 20 / proporcional}}>
                            <span style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#757575'}}>Hora: </span>{viaje.created_at.split('T')[1].split('.')[0]}
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 398 / proporcional, height: 25 / proporcional, marginBottom: 5 / proporcional}}>
                        <img src={viaje.foto_conductor === '' ? icon_conductor : viaje.foto_conductor} style={{width: 25 / proporcional, height: 25 / proporcional, marginRight: 10 / proporcional}}/>
                        <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, textAlign: 'end', height: 20 / proporcional}}>
                            <span style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#757575'}}>Conductor: </span>{viaje.nombres_conductor}
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: 398 / proporcional, height: 25 / proporcional, marginBottom: 5 / proporcional}}>
                        <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, textAlign: 'end', height: 20 / proporcional}}>
                            <span style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#757575'}}>Viajero: </span>{viaje.nombres_viajero}
                        </p>
                        <img src={viaje.foto_viajero === '' ? icon_conductor : viaje.foto_viajero} style={{width: 25 / proporcional, height: 25 / proporcional, marginLeft: 10 / proporcional}}/>
                    </div>
                    <p className='mb-0' style={{fontFamily: 'Mukta, sans-serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                        <span style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#757575'}}>Partida: </span>{viaje.direccion_origen.split (',')[0]}
                    </p>
                    <p className='mb-0' style={{fontFamily: 'Mukta, sans-serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                        <span style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#757575'}}>Destino: </span>{viaje.direccion_destino.split (',')[0]}
                    </p>
                        {/**<p className='mb-0' style={{fontFamily: 'Mukta, sans-serif', fontWeight: 500, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                            <span style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#757575'}}>Carro: </span>{conductor.marca_carro}, {conductor.modelo_carro}
                        </p>
                        <p className='mb-0' style={{fontFamily: 'Mukta, sans-serif', fontWeight: 500, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                            <span style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#757575'}}>Color carro: </span>{conductor.color}
    </p>**/}
                </div>
                {
                    ver && !ver_icons ? (
                        <div className='d-flex position-absolute bottom-0 end-0' 
                            style={{cursor: 'pointer', width: 40 / proporcional, height: 40 / proporcional}}>
                            <div onClick={() => setVerIcons(true)}
                                onMouseOver={() => setBotonVer(true)} onMouseLeave={() => setBotonVer(false)}
                                className='shadow-sm rounded' style={{cursor: 'pointer', width: 40 / proporcional, height: 40 / proporcional, 
                                background: '#9E9E9E'}}  data-bs-toggle="tooltip" data-bs-placement="top" title="Ver opciones">
                                <img className='rounded' src={view} style={{width: boton_ver ? 30 / proporcional : 35 / proporcional, 
                                  height: boton_ver ? 30 / proporcional : 35 / proporcional,
                                  margin: boton_ver ? 5 / proporcional : 2.5 / proporcional}} alt =''/>
                            </div>
                        </div>
                    ) : null
                }
                {
                    ver_icons ? (
                        <div className='position-absolute d-flex justify-content-between bottom-0 start-0' style={{width: 418 / proporcional}}>
                            <div
                                onClick={() => mas_informacion()}
                                onMouseOver={() => setBotonDetails(true)} onMouseLeave={() => setBotonDetails(false)}
                                className='shadow-sm rounded' style={{cursor: 'pointer', width: 40 / proporcional, height: 40 / proporcional, 
                                background: '#9E9E9E'}}  data-bs-toggle="tooltip" data-bs-placement="top" title="Detalles conductor">
                                <img className='rounded' src={details} style={{width: boton_details ? 30 / proporcional : 35 / proporcional, 
                                  height: boton_details ? 30 / proporcional : 35 / proporcional,
                                  margin: boton_details ? 5 / proporcional : 2.5 / proporcional}} alt =''/>
                            </div>
                            
                            <div onClick={() => setVerIcons(false)}
                                onMouseOver={() => setBotonHide(true)} onMouseLeave={() => setBotonHide(false)}
                                className='shadow-sm rounded' style={{cursor: 'pointer', width: 40 / proporcional, height: 40 / proporcional, 
                                background: '#9E9E9E'}}  data-bs-toggle="tooltip" data-bs-placement="top" title="Ocultar menú">
                                <img className='rounded' src={hide} style={{width: boton_hide ? 30 / proporcional : 35 / proporcional, 
                                  height: boton_hide ? 30 / proporcional : 35 / proporcional,
                                  margin: boton_hide ? 5 / proporcional : 2.5 / proporcional}} alt =''/>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>            
    )
}