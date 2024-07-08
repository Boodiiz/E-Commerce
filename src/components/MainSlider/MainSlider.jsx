import React, { useEffect, useState } from 'react'
import Style from './MainSlider.module.css'
import Img1 from '../../assets/Images/product1.jpg'
import Img2 from '../../assets/Images/product4.jpg'
import Img3 from '../../assets/Images/product5.jpg'
import Img4 from '../../assets/Images/product9.jpg'
import Img5 from '../../assets/Images/product8.jpg'
import Slider from "react-slick";

export default function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false
  };
  const [counter, setCounter] = useState(0)
  useEffect(() => {}, [])
  
  return (
    <>
    <div className="row">
      <div className="w-3/4">
          <Slider {...settings}>
              
             <img height={400} src={Img1} className='w-full h-[400px]' />
             <img height={400} src={Img4} className='w-full h-[400px]' />
             <img height={400} src={Img5} className='w-full h-[400px]' />
          </Slider> 
      </div>
      <div className="w-1/4">
      <img height={200} src={Img2} className='w-full h-[200px]' />
      <img height={200} src={Img3} className='w-full h-[200px]' />
      </div>
    </div>
   </>
  )
}
