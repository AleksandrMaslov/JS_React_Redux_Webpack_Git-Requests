import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import './app.less'
import { Card } from './card/card'
import { Main } from './main/Main'

export function App() {
  const dispatch = useDispatch()

  return (
    <div className='body'>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/card' element={<Card />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}