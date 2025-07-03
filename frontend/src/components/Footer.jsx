import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-4 sm:px-[4vw] '>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-[120px] text-sm border-t border-gray-400 py-5'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ut repudiandae voluptatum libero architecto expedita nam itaque neque ad quaerat aut recusandae porro numquam illum, pariatur animi totam veniam deleniti.
            </p>
        </div>
        
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Collection</li>
            <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>contact@favouritecarrental.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ Favourite.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
