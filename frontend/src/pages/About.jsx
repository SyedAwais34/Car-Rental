import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div className='px-4 sm:px-[4vw]'>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about} alt="" />
        <div className='flex flex-col justify-start gap-4 md:w-2/4 text-gray-600'>
          <p>Welcome to Favourite Car Rental – Your Premier Car Rental Service!</p>
          <p>At Favourite Car Rental, we are committed to providing top-quality vehicles and exceptional customer service to make your journey smooth, safe, and enjoyable. Whether you're planning a weekend getaway, need a car for business travel, or simply want to experience luxury on the road, we have a wide selection of vehicles to suit every need and budget.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to offer seamless car rental experiences by combining convenience, affordability, and reliability. With a diverse fleet ranging from economy cars to luxury vehicles, we ensure that you drive away with the perfect car for any occasion.</p>
        <div className='text-2xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>
        <b className='text-gray-800'>Diverse Fleet:</b>
        <p>Use from a variety of cars, including sedans, SUVs, sports cars, and more.</p>
        <b className='text-gray-800'>Affordable Pricing</b>
        <p>Competitive rates with no hidden fees.</p>
        <b className='text-gray-800'>Easy Booking Process</b>
        <p>Rent a car in just a few clicks.</p>
        <b className='text-gray-800'>Exceptional Service</b>
        <p>Our team is dedicated to assisting you at every step.</p>
        </div>
        </div>

        <h3 className='text-center'>Let Favourite Car Rental be your go-to solution for all your transportation needs. Drive your dreams today!</h3>

        <NewsLetterBox/>

    </div>
  )
}

export default About
