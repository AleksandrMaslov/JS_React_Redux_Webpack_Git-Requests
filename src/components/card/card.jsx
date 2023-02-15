import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Card(props) {
  const navigate = useNavigate()
  return (
    <div>
      <button
        onClick={() => navigate('/')}
        className='back-btn'
      >
        BACK
      </button>
      repo
    </div>
  )
}