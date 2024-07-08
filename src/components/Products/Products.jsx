import React, { useContext, useEffect, useState } from 'react'
import Style from './Products.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ClimbingBoxLoader } from 'react-spinners'
import { useQuery } from '@tanstack/react-query'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'



export default function Products() {
  const [recentProducts, setRecentProducts] = useState([])

  let {addToCart,numOfCartItems, setNumOfCartItems} = useContext(CartContext);

  async function addProduct(productId)
   {
    let response = await addToCart(productId)
    if(response.data.status == 'success')
      {
        toast.success(response?.data.message,{
          duration:1000,
          position:'top-center',
          style:{
            background:'green',
            color:'white'
          }
        }
        )
      }
      else
      {
        toast.error(response?.data.message)
      }
    console.log(response);
   }

  function getRecentProducts()
  {
    axios.get('https://ecommerce.routemisr.com/api/v1/products')
    .then(({data})=>{
      setRecentProducts(data?.data)
    })
    .catch((error)=>{

    })
  }

  function getRecent()
  {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  let {data, isLoading, isError, error, isFetching} =
  useQuery({
    queryKey:['recentProducts'],
    queryFn:getRecent,
    select: (data)=> data.data.data
  
    })
    
    
    
    const [counter, setCounter] = useState(0)
    useEffect(() => {
      getRecentProducts();
      }, [])
      
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
        
        {data.map((product)=> <div key={product.id} className="w-1/6 px-4">
          <div className="product py-4">
            <Link to={`/productdetails/${product.id}/${product.category.name}`}>
            <img className='w-full mainPage-img' src={product.imageCover} alt={product.title} />
            <span className='block font-light mt-2 text-green-600'>{product.category.name}</span>
            <h3 className='text-lg font-normal text-gray-800 mb-4'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
            <div className="flex justify-between items-center">
              <span>{product.price} EGP</span>
              <span>{product.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>
            </div>
            </Link>
            <button onClick={()=> addProduct(product.id)} className='btn'>Add to Cart</button>
          </div>
        </div>)}
        
      </div>
    </>
  )
}
