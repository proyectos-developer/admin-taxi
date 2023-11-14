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
            <Route path='/home' element={width < 500 ? <HomeCell proporcional={499 / width}/> : 
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

            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
