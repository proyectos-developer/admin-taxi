import React from 'react'

import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function HomePanelTablet({proporcional}) {

  const navigate = useNavigate()
  
  return (
    <div style={{width: 991 / proporcional}}>
        <div className='d-flex justify-content-center' style={{width: 991 / proporcional, height: 100 / proporcional, background: '#212121', padding: 25 / proporcional}}>
            <p  onClick={() => navigate ('/home')} 
              style={{fontSize: 50 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', fontWeight: 700 / proporcional, cursor: 'pointer'}}>
                TAXI UBER 24/7 hr
            </p>
        </div>
        <Outlet/>
    </div>
  )
}