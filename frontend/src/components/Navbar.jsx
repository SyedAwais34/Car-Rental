import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const {setShowSearch, getCartCount, navigate, token ,setToken, setCartItems} = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

  return (
    <div className='flex items-center justify-between py-5 font-medium px-4 sm:px-[4vw] '>

        <Link to='/'>
            <img src={assets.logo} className='w-24' alt="" />
        </Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <i onClick={()=>setShowSearch(true)} className="ri-search-line w-5 cursor-pointer text-2xl"></i>

            <div className='group relative'>
               <i onClick={()=> token ? null : navigate('/login')}  className="ri-user-line w-5 cursor-pointer text-2xl"></i>
               {/* ---------- DropDown Menu  ------------*/}
                {token && 
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>}
            </div>
            <Link to='/cart' className='relative'>
                <i className="ri-shopping-bag-line w-5 min-w-5 cursor-pointer text-2xl"></i>
                <p className='absolute right-[-3px] bottom-[-2px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>{getCartCount()}</p>
            </Link>
            <i className="ri-menu-line w-5 cursor-pointer text-2xl sm:hidden" onClick={()=>{setVisible(true)}}></i>
        </div>
        {/* Sidebar Menu For Small Screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>{setVisible(false)}} className='flex items-center gap-4 p-4'>
                    <i className="ri-arrow-drop-left-line text-2xl cursor-pointer"></i>
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                <NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border' to='/collection'>COLLECTIION</NavLink>
                <NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar
