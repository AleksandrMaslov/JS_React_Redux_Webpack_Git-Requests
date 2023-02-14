import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

import './app.less'
import { Main } from './main/Main'

export function App() {
  const dispatch = useDispatch()

  return (
    <div className='body'>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </div>
  )
}