import React, { useContext, useEffect, useState } from 'react'
import Style from './Home.module.css'
import { CounterContext } from '../../Context/CounterContext'
import RecentProducts from '../RecentProducts/RecentProducts'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import MainSlider from '../MainSlider/MainSlider'
export default function Home() {
  // const [counter, setCounter] = useState(0)
  
  
  let {counter, setCounter} = useContext(CounterContext)
  useEffect(() => {}, [])
  
  return (
    <>
      <MainSlider/>
      <CategoriesSlider/>
      <RecentProducts/>
    </>
  )
}
