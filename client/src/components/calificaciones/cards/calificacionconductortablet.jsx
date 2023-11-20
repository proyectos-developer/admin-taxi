import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'

import icon_viajero from '../../../iconos/icon_conductor.png'
import icono_star from '../../../iconos/icono_star.png'
import icono_half_star from '../../../iconos/icono_half_star.png'
import icono_empty_star from '../../../iconos/icono_empty_star.png'

import { useNavigate } from 'react-router-dom'

export default function CardCalificacionConductorTablet({calificacion, index, proporcional}) {

    const navigate = useNavigate  ()

    const valor_calificacion = parseFloat(calificacion.calificacion)

    useEffect (() => {
        return () => {
 
        }
    }, [])

    return (
        <div key={index} className='position-relative shadow-lg bg-body rounded default' 
            style={{width: 836 / proporcional, height: 120 / proporcional, marginLeft: 20 / proporcional, marginRight: 20 / proporcional, 
                    borderRadius: 4 / proporcional, border: '1px solid #757575'}}>
            <div key={index} className='position-relative' 
                style={{width: 836 / proporcional, height: 'auto', borderRadius: 4 / proporcional, padding: 10 / proporcional}}>
                <div className='d-flex' style={{width: 816 / proporcional, height: 100 / proporcional}}>
                    <div className='rounded-circle' style={{width: 100 / proporcional, height: 100 / proporcional, border: '1px solid #B2DFDB', marginRight: 10 / proporcional, padding: 2 / proporcional, borderRadius: 4 / proporcional}}>
                        <img className='rounded-circle' src={calificacion.foto === '' ? icon_viajero : calificacion.foto} alt='' style={{width: 94 / proporcional, height: 94 / proporcional, borderRadius: 4 / proporcional}}/>
                    </div>
                    <div style={{width: 706 / proporcional, height: 100 / proporcional}}>
                        <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, textAlign: 'end', height: 20 / proporcional}}>
                            <span style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#757575'}}>Documento: </span>{calificacion.nro_documento}
                        </p>
                        <p className='mb-0' style={{fontFamily: 'Mukta, sans-serif', fontWeight: 500, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                            <span style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#757575'}}>Nombres: </span>{calificacion.nombres} {calificacion.apellidos}
                        </p>
                        <div className='d-flex' style={{width: 706 / proporcional, height: 20 / proporcional}}>
                            <img src={valor_calificacion === 0 ? icono_empty_star : valor_calificacion < 1 ? icono_half_star : icono_star} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional}}/>
                            <img src={valor_calificacion >= 2 ? icono_star : valor_calificacion <= 1 ? icono_empty_star : icono_half_star} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional}}/>
                            <img src={valor_calificacion >= 3 ? icono_star : valor_calificacion <= 2 ? icono_empty_star : icono_half_star} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional}}/>
                            <img src={valor_calificacion >= 4 ? icono_star : valor_calificacion <= 3 ? icono_empty_star : icono_half_star} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional}}/>
                            <img src={valor_calificacion >= 5 ? icono_star : valor_calificacion <= 4 ? icono_empty_star : icono_half_star} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, textAlign: 'start', height: 20 / proporcional}}>
                                <span style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#757575'}}></span>({parseFloat(calificacion.calificacion)})
                            </p>
                        </div>
                        <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, height: 20 / proporcional}}>
                            <span style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#757575'}}>Comentarios: </span>{calificacion.comentarios}
                        </p>
                    </div>
                </div>
            </div>
        </div>            
    )
}