import React, {useState, useEffect} from 'react'
import GoogleMapReact from 'google-map-react';

import icono_location from '../../iconos/icono_location_map.png'
import icono_conductor from '../../iconos/icon_conductor.png'

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function  DetallesViajeCell({proporcional}) {

  const navigate = useNavigate()
  
  const [boton_volver, setBotonVolver] = useState(false)
  const {data_viaje} = useSelector(({viajesreducer}) => viajesreducer)
  
  const AnyReactComponent = ({ text }) => <img src={icono_location} style={{width: 32 / proporcional, height: 32 / proporcional}}/>;

  const [latitude_origen, setLatitudeOrigen] = useState(0) 
  const [longitude_origen, setLongitudeOrigen] = useState(0) 
  const [latitude_destino, setLatitudeDestino] = useState(0) 
  const [longitude_destino, setLongitudeDestino] = useState(0) 
  const [direccion_origen, setDireccionOrigen] = useState(0) 
  const [direccion_destino, setDdireccionDestino] = useState(0)  

  useEffect(() => {
    if (data_viaje && data_viaje.viaje){
      setLatitudeOrigen(data_viaje.viaje.latitude_origen)
      setLongitudeOrigen(data_viaje.viaje.longitude_origen)
      setLatitudeDestino(data_viaje.viaje.latitudde_destino)
      setLongitudeDestino(data_viaje.viaje.longitude_destino)
      setDireccionOrigen(data_viaje.viaje.direccion_origen)
      setDdireccionDestino(data_viaje.viaje.direccion_destino)
      //setDefaultProps({center: {lat: parseFloat(data_viaje.viaje.latitude_origen), lng: parseFloat(data_viaje.viaje.longitude_origen)}, zoom: 16})
    }  
  }, [data_viaje])

  return (
    <div className='' style={{width: 499 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 50 / proporcional,
                              paddingBottom: 10 / proporcional}}>
          <div className='' style={{width: 459 / proporcional, height: 'auto', marginBottom: 12.5 / proporcional}}>
              <div style={{width: 459 / proporcional, height: 480 / proporcional}}>
                  <p className='' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 24 / proporcional, 
                                              lineHeight: `${24 / proporcional}px`, textAlign: 'center', height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                        VIAJE DEL DÍA
                  </p>
                  <div className='d-flex justify-content-between' style={{width: 459 / proporcional, height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                      <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 20 / proporcional, 
                                                  lineHeight: `${24 / proporcional}px`, textAlign: 'start', height: 24 / proporcional}}>
                          <span style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#757575'}}>Fecha: </span>
                            {data_viaje.viaje.created_at.split('T')[0]}
                      </p>
                      <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 20 / proporcional, 
                                                  lineHeight: `${24 / proporcional}px`, textAlign: 'end', height: 24 / proporcional}}>
                          <span style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#757575'}}>Hora: </span>
                            {data_viaje.viaje.created_at.split('T')[1].split('.')[0]}
                      </p>
                  </div>
                  <div className='' style={{width: 459 / proporcional, height: 2 / proporcional, marginBottom: 10 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}/>
                  <p className='' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                              lineHeight: `${24 / proporcional}px`, textAlign: 'start', height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                      <span style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#757575'}}>Origen: </span>
                        {data_viaje.viaje.direccion_origen}
                  </p>
                  <div className='d-flex justify-content-end' style={{width: 459 / proporcional, height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                    <p className='' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                                lineHeight: `${24 / proporcional}px`, textAlign: 'start', height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                        <span style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#757575'}}>Destino: </span>
                          {data_viaje.viaje.direccion_destino}
                    </p>
                  </div>
                  <div className='' style={{width: 459 / proporcional, height: 2 / proporcional, marginBottom: 10 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}/>
                  <div className='d-flex' style={{width: 459 / proporcional, height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                      <img src={data_viaje.viaje.foto_viajero === '' ? icono_conductor : data_viaje.viaje.foto_viajero} 
                            style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                      <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                                  lineHeight: `${24 / proporcional}px`, textAlign: 'start', height: 24 / proporcional}}>
                          <span style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#757575'}}>Usuario: </span>
                            {data_viaje.viaje.nombres_viajero}
                      </p>
                  </div>
                  <div className='d-flex justify-content-between' style={{width: 438 / proporcional, height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                    <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                                lineHeight: `${24 / proporcional}px`, textAlign: 'start', height: 24 / proporcional}}>
                        <span style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#757575'}}>Nro teléfono: </span>
                    </p>
                    <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                                lineHeight: `${24 / proporcional}px`, textAlign: 'end', height: 24 / proporcional}}>
                          {data_viaje.viaje.telefono_viajero}
                    </p>
                  </div>
                  <div className='d-flex justify-content-between' style={{width: 438 / proporcional, height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                    <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                                lineHeight: `${24 / proporcional}px`, textAlign: 'start', height: 24 / proporcional}}>
                        <span style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#757575'}}>
                          {data_viaje.viaje.tipo_documento_viajero}: </span>
                    </p>
                    <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                                lineHeight: `${24 / proporcional}px`, textAlign: 'start', height: 24 / proporcional}}>
                          {data_viaje.viaje.nro_documento_viajero}
                    </p>
                  </div>
                  <div className='' style={{width: 459 / proporcional, height: 2 / proporcional, marginBottom: 10 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}/>
                  <div className='d-flex justify-content-end' style={{width: 459 / proporcional, height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                      <img src={data_viaje.viaje.foto_conductor === '' ? icono_conductor : data_viaje.viaje.foto_conductor} 
                            style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                      <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                                  lineHeight: `${24 / proporcional}px`, textAlign: 'start', height: 24 / proporcional}}>
                          <span style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#757575'}}>Conductor: </span>
                            {data_viaje.viaje.nombres_conductor}
                      </p>
                  </div>
                  <div className='d-flex justify-content-end' style={{width: 459 / proporcional, height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: 438 / proporcional, height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                      <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                                  lineHeight: `${24 / proporcional}px`, textAlign: 'start', height: 24 / proporcional}}>
                          <span style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#757575'}}>Nro teléfono: </span>
                      </p>
                      <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                                  lineHeight: `${24 / proporcional}px`, textAlign: 'end', height: 24 / proporcional}}>
                            {data_viaje.viaje.telefono_conductor}
                      </p>
                    </div>
                  </div>
                  <div className='d-flex justify-content-end' style={{width: 459 / proporcional, height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: 438 / proporcional, height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                      <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                                  lineHeight: `${24 / proporcional}px`, textAlign: 'start', height: 24 / proporcional}}>
                          <span style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#757575'}}>
                            {data_viaje.viaje.tipo_documento_conductor}: </span>
                      </p>
                      <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                                  lineHeight: `${24 / proporcional}px`, textAlign: 'start', height: 24 / proporcional}}>
                            {data_viaje.viaje.nro_documento_conductor}
                      </p>
                    </div>
                  </div>
                  <div className='' style={{width: 459 / proporcional, height: 2 / proporcional, marginBottom: 10 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}/>
                  <div className='d-flex justify-content-between' style={{width: 438 / proporcional, height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                    <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                                lineHeight: `${24 / proporcional}px`, textAlign: 'start', height: 24 / proporcional}}>
                        <span style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#757575'}}>
                          Medio de pago: </span>
                    </p>
                    <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                                lineHeight: `${24 / proporcional}px`, textAlign: 'start', height: 24 / proporcional}}>
                        {data_viaje.viaje.medio_pago === 0 ? 'Pago en efectivo' : data_viaje.viaje.medio_pago === 1 ? 'Pago con yape' : data_viaje.viaje.medio_pago === 2 ? 'Pago con Plin' :
                      'Pago con tarjeta de crédio o débito'}
                    </p>
                  </div>
                  <div className='d-flex justify-content-end' style={{width: 459 / proporcional, height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: 438 / proporcional, height: 24 / proporcional, marginBottom: 10 / proporcional}}>
                      <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                                  lineHeight: `${24 / proporcional}px`, textAlign: 'start', height: 24 / proporcional}}>
                          <span style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#757575'}}>Cobró: </span>
                      </p>
                      <p className='mb-0' style={{fontFamily: 'Lora, serif', fontWeight: 700, color: '#212121', fontSize: 18 / proporcional, 
                                                  lineHeight: `${24 / proporcional}px`, textAlign: 'end', height: 24 / proporcional}}>
                            S/. {data_viaje.viaje.cobraron}
                      </p>
                    </div>
                  </div>
              </div>
              <div style={{width: 459 / proporcional, height: 459 / proporcional}}>
                  <GoogleMapReact
                      bootstrapURLKeys={{ key: "AIzaSyBKcqtKVsRJBGaH9oJ2z8yhSnjjwR2kBkA" }}
                      defaultCenter={{
                        lat: ((data_viaje.viaje.latitude_origen + data_viaje.viaje.latitude_destino) / 2) + 0.35, 
                        lng: ((data_viaje.viaje.longitude_origen + data_viaje.viaje.longitude_destino) / 2) + 0.35}}
                        defaultZoom={8}
                  >
                    <AnyReactComponent
                        lat={data_viaje.viaje.latitude_origen}
                        lng={data_viaje.viaje.longitude_origen}
                        text={data_viaje.viaje.direccion_origen}
                    />
                    <AnyReactComponent
                        lat={data_viaje.viaje.latitude_destino}
                        lng={data_viaje.viaje.longitude_destino}
                        text={data_viaje.viaje.direccion_destino}
                    />
                  </GoogleMapReact>
              </div>
          </div>
          <div className='d-flex' style={{width: 459 / proporcional, height: 50 / proporcional}}>
              <button className='btn' 
                  onMouseOver={() => setBotonVolver(true)} onMouseLeave={() => setBotonVolver(false)}
                  onClick={() => navigate('/home/viajes')}
                  style={{width: boton_volver ? 459 / proporcional : 457 / proporcional, height: 50 / proporcional, background: '#212121', color: 'white', 
                          fontWeight: boton_volver ? 500 : 700, fontSize: boton_volver ? 16 / proporcional : 18 / proporcional}}>
                VOLVER</button>
          </div>
    </div>
  )
}
