import React from 'react'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-2 text-xs sm:text-sm md:text-base text-gray-700 px-4 sm:px-[4vw]'>
      <div>
      <i className="ri-car-line w-12 text-5xl m-auto"></i>
      <p className='font-semibold mt-3'>All Brands</p>
      <p className='text-gray-400'>All Lorem ipsum dolor, sit amet Lorem ipsum</p>
      </div>
      <div>
      <i className="ri-message-2-line w-12 text-5xl m-auto"></i>
      <p className='font-semibold mt-3'>FREE SUPPORT</p>
      <p className='text-gray-400'>All Lorem ipsum dolor, sit amet Lorem ipsum</p>
      </div>
      <div>
      <i className="ri-wallet-line w-12 text-5xl m-auto"></i>
      <p className='font-semibold mt-3'>AFFORDABLE</p>
      <p className='text-gray-400'>All Lorem ipsum dolor, sit amet Lorem ipsum</p>
      </div>
    </div>
  )
}

export default OurPolicy
