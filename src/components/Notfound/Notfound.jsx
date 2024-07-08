import React, { useEffect, useState } from 'react'
import Style from './Notfound.module.css'
import Img from '../../assets/Images/Notfound.png'

export default function Notfound() {

  const [counter, setCounter] = useState(0)
  useEffect(() => {}, [])
  
  return (
    <>
      <img className='w-full h-screen' src={Img} alt="not found page" />
    </>
  )
}
