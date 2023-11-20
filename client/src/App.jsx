import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import './styles.css'

import PanelBegin from './components/begin/panel.jsx'
import PanelBeginTablet from './components/begin/paneltablet.jsx'
import PanelBeginCell from './components/begin/panelcell.jsx'

import Home from './components/home/panel.jsx'
import HomeTablet from './components/home/paneltablet.jsx'
import HomeCell from './components/home/panelcell.jsx'

import HomeDashboard from './components/home/dashboard.jsx'
import HomeDashboardTablet from './components/home/dashboardtablet.jsx'
import HomeDashboardCell from './components/home/dashboardcell.jsx'

import ConductoresPanel from './components/conductores/panel.jsx'
import ConductoresPanelTablet from './components/conductores/paneltablet.jsx'
import ConductoresPanelCell from './components/conductores/panelcell.jsx'

import ListaConductores from './components/conductores/lista.jsx'
import ListaConductoresTablet from './components/conductores/listatablet.jsx'
import ListaConductoresCell from './components/conductores/listacell.jsx'

import DetallesConductor from './components/conductores/detalles.jsx'
import DetallesConductorTablet from './components/conductores/detallestablet.jsx'
import DetallesConductorCell from './components/conductores/detallescell.jsx'

import ViajerosPanel from './components/viajeros/panel.jsx'
import ViajerosPanelTablet from './components/viajeros/paneltablet.jsx'
import ViajerosPanelCell from './components/viajeros/panelcell.jsx'

import ListaViajeros from './components/viajeros/lista.jsx'
import ListaViajerosTablet from './components/viajeros/listatablet.jsx'
import ListaViajerosCell from './components/viajeros/listacell.jsx'

import DetallesViajero from './components/viajeros/detalles.jsx'
import DetallesViajeroTablet from './components/viajeros/detallestablet.jsx'
import DetallesViajeroCell from './components/viajeros/detallescell.jsx'

import CalificacionesPanel from './components/calificaciones/panel.jsx'
import CalificacionesPanelTablet from './components/calificaciones/paneltablet.jsx'
import CalificacionesPanelCell from './components/calificaciones/panelcell.jsx'

import ListaCalificaciones from './components/calificaciones/lista.jsx'
import ListaCalificacionesTablet from './components/calificaciones/listatablet.jsx'
import ListaCalificacionesCell from './components/calificaciones/listacell.jsx'

import CalificacionesConductor from './components/calificaciones/conductor.jsx'
import CalificacionesConductorTablet from './components/calificaciones/conductortablet.jsx'
import CalificacionesConductorCell from './components/calificaciones/conductorcell.jsx'

import ViajesPanel from './components/viajes/panel.jsx'
import ViajesPanelTablet from './components/viajes/paneltablet.jsx'
import ViajesPanelCell from './components/viajes/panelcell.jsx'

import ListaViajes from './components/viajes/lista.jsx'
import ListaViajesTablet from './components/viajes/listatablet.jsx'
import ListaViajesCell from './components/viajes/listacell.jsx'

import DetallesViaje from './components/viajes/detalles.jsx'
import DetallesViajeTablet from './components/viajes/detallestablet.jsx'
import DetallesViajeCell from './components/viajes/detallescell.jsx'

import EstadisticasPanel from './components/estadisticas/panel.jsx'
import EstadisticasPanelTablet from './components/estadisticas/paneltablet.jsx'
import EstadisticasPanelCell from './components/estadisticas/panelcell.jsx'

import IngresosPanel from './components/ingresos/panel.jsx'
import IngresosPanelTablet from './components/ingresos/paneltablet.jsx'
import IngresosPanelCell from './components/ingresos/panelcell.jsx'

function App() {
  const [width, setWidth] = useState (window.outerWidth)

  useEffect(() => {
    window.addEventListener('resize', handle_resize)

    return () => {
      window.removeEventListener('resize', handle_resize)
    }
  }, [])

  const handle_resize = () => {
    setWidth(window.outerWidth)
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={width < 500 ? <PanelBeginCell proporcional={499 / width}/> : 
                                     width < 991 ? <PanelBeginTablet proporcional={991 / width}/> : 
                                                   <PanelBegin proporcional={1920 / width} />}/>
            <Route path='home' element={width < 500 ? <HomeCell proporcional={499 / width}/> : 
                                        width < 991 ? <HomeTablet proporcional={991 / width}/> : 
                                                      <Home proporcional={1920 / width} />}>
                                                  
              <Route index element={width < 500 ? <HomeDashboardCell proporcional={499 / width}/> : 
                                    width < 991 ? <HomeDashboardTablet proporcional={991 / width}/> : 
                                                  <HomeDashboard proporcional={1920 / width} />}/>

              <Route path='conductores' element={width < 500 ? <ConductoresPanelCell proporcional={499 / width}/> : 
                                                 width < 991 ? <ConductoresPanelTablet proporcional={991 / width}/> : 
                                                               <ConductoresPanel proporcional={1920 / width} />}>
                                                  
                <Route index element={width < 500 ? <ListaConductoresCell proporcional={499 / width}/> : 
                                      width < 991 ? <ListaConductoresTablet proporcional={991 / width}/> : 
                                                    <ListaConductores proporcional={1920 / width} />}/>
                                                  
                <Route path='detalles-conductor' element={width < 500 ? <DetallesConductorCell proporcional={499 / width}/> : 
                                                          width < 991 ? <DetallesConductorTablet proporcional={991 / width}/> : 
                                                                        <DetallesConductor proporcional={1920 / width} />}/>
                                                                  
              </Route>

              <Route path='usuarios' element={width < 500 ? <ViajerosPanelCell proporcional={499 / width}/> : 
                                              width < 991 ? <ViajerosPanelTablet proporcional={991 / width}/> : 
                                                            <ViajerosPanel proporcional={1920 / width} />}>
                                                  
                <Route index element={width < 500 ? <ListaViajerosCell proporcional={499 / width}/> : 
                                      width < 991 ? <ListaViajerosTablet proporcional={991 / width}/> : 
                                                    <ListaViajeros proporcional={1920 / width} />}/>
                                                  
                <Route path='detalles-usuario' element={width < 500 ? <DetallesViajeroCell proporcional={499 / width}/> : 
                                                        width < 991 ? <DetallesViajeroTablet proporcional={991 / width}/> : 
                                                                      <DetallesViajero proporcional={1920 / width} />}/>
                                                                  
              </Route>

              <Route path='calificaciones' element={width < 500 ? <CalificacionesPanelCell proporcional={499 / width}/> : 
                                                    width < 991 ? <CalificacionesPanelTablet proporcional={991 / width}/> : 
                                                                  <CalificacionesPanel proporcional={1920 / width} />}>
                                                  
                <Route index element={width < 500 ? <ListaCalificacionesCell proporcional={499 / width}/> : 
                                      width < 991 ? <ListaCalificacionesTablet proporcional={991 / width}/> : 
                                                    <ListaCalificaciones proporcional={1920 / width} />}/>
                                                  
                <Route path='conductor' element={width < 500 ? <CalificacionesConductorCell proporcional={499 / width}/> : 
                                                 width < 991 ? <CalificacionesConductorTablet proporcional={991 / width}/> : 
                                                               <CalificacionesConductor proporcional={1920 / width} />}/>
                                                                  
              </Route>

              <Route path='viajes' element={width < 500 ? <ViajesPanelCell proporcional={499 / width}/> : 
                                            width < 991 ? <ViajesPanelTablet proporcional={991 / width}/> : 
                                                          <ViajesPanel proporcional={1920 / width} />}>
                                                  
                  <Route index element={width < 500 ? <ListaViajesCell proporcional={499 / width}/> : 
                                        width < 991 ? <ListaViajesTablet proporcional={991 / width}/> : 
                                                      <ListaViajes proporcional={1920 / width} />}/>
                                                    
                  <Route path='detalles-viaje' element={width < 500 ? <DetallesViajeCell proporcional={499 / width}/> : 
                                                        width < 991 ? <DetallesViajeTablet proporcional={991 / width}/> : 
                                                                      <DetallesViaje proporcional={1920 / width} />}/>
                                                                  
              </Route>

              <Route path='estadisticas' element={width < 500 ? <EstadisticasPanelCell proporcional={499 / width}/> : 
                                                  width < 991 ? <EstadisticasPanelTablet proporcional={991 / width}/> : 
                                                                <EstadisticasPanel proporcional={1920 / width} />}>
                                                  
              </Route>

              <Route path='ingresos' element={width < 500 ? <IngresosPanelCell proporcional={499 / width}/> : 
                                              width < 991 ? <IngresosPanelTablet proporcional={991 / width}/> : 
                                                            <IngresosPanel proporcional={1920 / width} />}>
                                                  
              </Route>

            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
