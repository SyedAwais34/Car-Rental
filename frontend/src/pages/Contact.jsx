import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div className='px-4 sm:px-[4vw]'>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] h-[600px]' src={assets.contact} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Reach Out to Us</p>
          <p className='text-gray-500'>Phone: <br /> +1 (800) 123-4567</p>
          <p className='text-gray-500'>Email: <br /> support@favouritecarrental.com</p>
          <p className='text-gray-500'>Address: <br /> 123 Main Street, Cityville, USA</p>
          <p className='text-gray-500'>Business Hours: <br /> Mon-Fri: 9 AM - 6 PM | Sat-Sun: 10 AM - 4 PM</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Favourite Car Rental</p>
          <p className='text-gray-500'>Learn more about our teams and jobs openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-[#db2d2e] hover:text-white transition-all duration-500 '>Explore Jobs</button>
        </div>
      </div>
        <NewsLetterBox/>
    </div>
  )
}

export default Contact
