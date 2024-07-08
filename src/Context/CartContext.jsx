import axios from "axios";
import { createContext, useState } from "react";

export let CartContext = createContext();

export default function CartContextProvider(props)
{

  const [numOfCartItems, setNumOfCartItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [cartId, setCartId] = useState(null)
  let headers = {
    token:localStorage.getItem('userToken')
  }
  function getCartItems(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
      headers:headers
    })
    .then((response) => {
      setNumOfCartItems(response.data.numOfCartItems)
      setCartId(response?.data.data._id)
      return response
    })
    .catch((error) => error)
  }

  function addToCart(productId)
  {
      return axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
        productId:productId
      }, {
          headers:headers
      })
      .then((response)=> {
        setNumOfCartItems(response.data.numOfCartItems)
        setTotalPrice(response?.data.data.totalCartPrice);
        setCartId(response?.data.data._id)
        console.log(response.data);
        return response
  })
      .catch((error)=> error)

  }

  function removeCartItem(productId)
  {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
      headers:headers
    })
    .then((response)=> {
      console.log(response?.data.numOfCartItems)
      setTotalPrice(response?.data.data.totalCartPrice);
      setNumOfCartItems(response?.data.numOfCartItems)
      setCartId(response?.data.data._id)

    })
    .catch((error)=>error)
  }
  function updateCartItem(productId, count)
  {
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
      count:count
    } ,{
      headers:headers
    })
    .then((response)=> {
      
      setTotalPrice(response?.data.data.totalCartPrice);
      setCartId(response?.data.data._id)
      return response
  })
    .catch((error)=>error)
  }
  
  
  function onlinePayment(shippingAddress)
  {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5174`,{
      shippingAddress
    } ,{
      headers:headers
    })
    .then((response)=> {
      console.log(response?.data.session.url, "Online");
      window.location.href = response?.data.session.url
      // setTotalPrice(response?.data.data.totalCartPrice);
      // return response
  })
    .catch((error)=>{
    console.log(error)
  })
  }


  return <CartContext.Provider value={{addToCart, onlinePayment, totalPrice, getCartItems, removeCartItem, updateCartItem, numOfCartItems, setNumOfCartItems}}>
    {props.children}
  </CartContext.Provider>
}