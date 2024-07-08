import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Categories from './components/Categories/Categories'
import Login from './components/Login/Login'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Register from './components/Register/Register'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Notfound from './components/Notfound/Notfound'
import CounterContextProvider from './Context/CounterContext'
import UserContextProvider from './Context/UserContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartContextProvider from './Context/CartContext'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import Allorders from './components/Allorders/Allorders'
import Checkout from './components/Checkout/Checkout'



function App() {
  const [count, setCount] = useState(0)

  let query = new QueryClient();

  let ghada = createBrowserRouter([
  {path:'', element:<Layout/>, children:[
    {index:true, element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'home', element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'categories', element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'products', element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'productdetails/:id/:category', element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:'cart', element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'navbar', element:<ProtectedRoute><Navbar/></ProtectedRoute>},
    {path:'footer', element:<ProtectedRoute><Footer/></ProtectedRoute>},
    {path:'allorders', element:<ProtectedRoute><Allorders/></ProtectedRoute>},
    {path:'cart/checkout', element:<ProtectedRoute><Checkout/></ProtectedRoute>},
    {path:'login', element:<Login/>},
    {path:'register', element:<Register/>},
    {path:'*', element:<Notfound/>}
  ]
}])


  return  <Provider store={store}>

            <CartContextProvider>
              <QueryClientProvider client={query}>
                <UserContextProvider>
                  <CounterContextProvider>
                    <RouterProvider router={ghada}></RouterProvider>
                    <Toaster/>
                    <ReactQueryDevtools/>
                  </CounterContextProvider>
                </UserContextProvider>
              </QueryClientProvider>
           </CartContextProvider>
          </Provider>
  
}

export default App
