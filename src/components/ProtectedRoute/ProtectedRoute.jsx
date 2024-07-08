import React, { useEffect, useState } from 'react'
import Style from './ProtectedRoute.module.css'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
  console.log(props)

  if(localStorage.getItem('userToken') != null)
    {
      // Navigate to component
      return props.children
    }
  else
  {
    // Navigate Login
    return <Navigate to={'/login'}/>
  }

  const [counter, setCounter] = useState(0)
  useEffect(() => {}, [])
  
  return (
    <>
      <h2>ProtectedRoute</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, accusantium.</p>
    </>
  )
}
