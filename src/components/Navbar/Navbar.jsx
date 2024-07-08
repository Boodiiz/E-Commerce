import React, { useContext, useEffect, useState } from 'react'
import Style from './Navbar.module.css'
import logo from '../../assets/Images/logo.jpg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CounterContext } from '../../Context/CounterContext'
import { UserContext } from '../../Context/UserContext'
import { useSelector } from 'react-redux'
import { CartContext } from '../../Context/CartContext'


export default function Navbar() {
  // const [counter, setCounter] = useState(0)
  	let {numOfCartItems, setNumOfCartItems} = useContext(CartContext)
    let {userLogin, setUserLogin} = useContext(UserContext);
    let navigate = useNavigate();
    let {counter} = useSelector((state)=> state.productRed)
    
    function logOut()
    {
      localStorage.removeItem('userToken');
      setUserLogin(null)
      navigate('/login')
    }


    // let {counter, userName} = useContext(CounterContext);
  useEffect(() => {}, [])
  
  return (
    <>
      <nav className='bg-gray-100 text-center z-50 lg:fixed top-0 left-0 right-0 p-2'>
       <div className="container justify-between py-2 mx-auto flex flex-col lg:flex-row items-center">
          <div className='flex flex-col lg:flex-row items-center'>
              <img width={110} src={logo} alt="fresh mart logo" />
              {/* // hanshelha kda kda ISA */}
              {/* <h2>Counter {counter}</h2> */}
              
              <ul className='flex flex-col lg:flex-row items-center'>
                {userLogin !== null? <>
                  <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='home'>Home</NavLink></li>
                  <li className='py-2'><NavLink className='relative mx-2 text-lg text-slate-900 font-light' to='cart'>
                    Cart
                  <span className="absolute -top-1 -right-3 inline-flex items-center justify-center w-3 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"> 
                    {numOfCartItems} 
                  </span>
                    </NavLink></li>
                  <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='products'>Products</NavLink></li>
                  <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='categories'>Categories</NavLink></li>
                 </> : null }
        </ul>
            </div>
            <div>
            <ul className='flex flex-col lg:flex-row items-center'>
              {userLogin === null? <>
                <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='login'>Login</NavLink></li>
                <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='register'>Register</NavLink></li>
              </> : <li onClick={logOut} className='py-2'><span className='mx-2 text-lg text-slate-900 font-light cursor-pointer' >Logout</span></li>}
                  <li className='py-2 flex items-center'>
                    <i className='fab mx-2 fa-facebook'></i>
                    <i className='fab mx-2 fa-twitter'></i>
                    <i className='fab mx-2 fa-instagram'></i>
                    <i className='fab mx-2 fa-youtube'></i>
                    <i className='fab mx-2 fa-tiktok'></i>
                  </li>
              </ul>
            </div>
       </div>
      </nav>
    </>
  )
}
