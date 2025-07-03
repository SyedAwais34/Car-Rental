import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BestSeller from './components/BestSeller'
import Form from './pages/form'

export const backendUrl = import.meta.env.VITE_BACKEND_URL


const App = () => {
   const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');
  
  
    useEffect(()=>{
      localStorage.setItem('token',token)
    }, [token])
  return (
    <div className=''>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/login' element={<Login />} />
        <Route path='/form' element={<Form />} />
        <Route path='/orders' element={<Orders />} />
        <Route path="/bestseller" element={<BestSeller />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
