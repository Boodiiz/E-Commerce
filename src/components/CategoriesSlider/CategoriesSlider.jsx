import React, { useEffect, useState } from 'react'
import Style from './CategoriesSlider.module.css'
import Slider from "react-slick";
import axios from 'axios';


export default function CategoriesSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay:true,
  };

  const [catgories, setCatgories] = useState([])

  function getCategories()
  {
    axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    .then(({data})=>{
      setCatgories(data.data)
    })
    .catch((error)=>error)
  }
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    getCategories();
  }, [])
  
  return (
    <>
         <div className="py-5">
          <h2 className='py-4 text-gray-800 font-medium text-xl'>Shop Popular Categories</h2>
          <Slider {...settings}>
            {catgories.map((category)=> <div key={category._id} className=''>
              <img className='category-img w-full' src={category.image} alt={category.name} />
              <h3 className='font-light mt-2'>{category.name}</h3>
            </div>)}
            </Slider> 
         </div>
     </>
  )
}
