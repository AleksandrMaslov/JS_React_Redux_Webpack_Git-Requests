import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Error() {
  const navigate = useNavigate()
  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={() => navigate('/')}>GO TO MAIN</button>
      ERROR
    </div>
  )
}