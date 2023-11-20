import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import {Provider} from 'react-redux'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import menureducer from './redux/reducers/menureducer'
import begindata from './redux/slice/begindata'
import conductoresdata from './redux/slice/conductoresdata'
import viajerosdata from './redux/slice/viajerosdata'
import calificacionesdata from './redux/slice/calificacionesdata'
import viajesdata from './redux/slice/viajesdata'
import conductoresreducer from './redux/reducers/conductoresreducer'
import viajerosreducer from './redux/reducers/viajerosreducer'
import calificacionesreducer from './redux/reducers/calificacionesreducer'
import viajesreducer from './redux/reducers/viajesreducer'
import filtrosreducer from './redux/reducers/filtrosreducer'

const store = configureStore({
    reducer: ({
        menu: menureducer,
        begin: begindata,
        conductores: conductoresdata,
        viajeros: viajerosdata,
        calificaciones: calificacionesdata,
        viajes: viajesdata,
        conductoresreducer,
        viajerosreducer,
        calificacionesreducer,
        viajesreducer,
        filtrosreducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
         immutableCheck: false,
         serializableCheck: false,
    })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
