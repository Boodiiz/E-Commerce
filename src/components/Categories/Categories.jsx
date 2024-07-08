import React, { useEffect, useState } from 'react'
import Style from './Categories.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByValue, getCategories } from '../../Redux/ProductSlice'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { ClimbingBoxLoader } from 'react-spinners'





export default function Categories() {
  // let {counter, categories} = useSelector((state)=> state.productRed)
  
   const [categoryDetails, setCategoryDetails] = useState(null)
 
  
  function getData()
  {
    axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    .then((data)=>{
      setCategoryDetails(data?.data.data)
      console.log(data.data.data.id)
    })
    .catch((error)=>error)
  }

  useEffect(() => {
    getData()
  }, [])
  


  function getRecent()
  {
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
  let {data, isLoading, isError, error, isFetching} =
  useQuery({
    queryKey:['recentProducts'],
    queryFn:getRecent,
    // select: (data)=> data.data.data
  
    })

    if (isLoading){
      return <div className='py-8 w-full flex justify-center'>
        <ClimbingBoxLoader size={30} color='green'/>
      </div>
      };
      // console.log(isLoading);
    if (isError){
      return <div className='py-8 w-full flex justify-center'>
        <h3>{error}</h3>
      </div>
      };
  
  return (
    <>
        <div className="row">

        {categoryDetails?.map((category)=> <div key={category.id} className='w-1/3 my-2 cursor-pointer'>
              <div className='category-div mx-3 border border-green-600'>
              <img className=' w-full h-80' src={category.image} alt={category.name} />
              <h3 className='font-bold text-center text-2xl py-4 mt-2 text-green-600'>{category.name}</h3>
              </div>
            </div>)}
        </div>
    </>
  )
}