import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import './app.less'
import { RepoCard } from './card/Card'
import { Main } from './main/Main'
import { Error } from './main/Error'


export function App() {
  const dispatch = useDispatch()

  return (
    <div className='body'>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/card/:userName/:repoName' element={<RepoCard />} />
            <Route path='/error' element={<Error />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}