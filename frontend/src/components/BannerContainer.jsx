import React from 'react'

const BannerContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 text-center text-xs sm:text-sm md:text-base text-white py-6 px-4 sm:px-[4vw] '>
        <div className="bg-red-700 py-32 px-8 text-lg">
            <h4>Satisfaction Guaranteed or Your Dent Back.</h4>
        </div>
        <div className="bg-[#0a0b0f] py-32 px-8 text-lg">
            <h4>Caring For Your Car The Way You Would.</h4>
        </div>
    </div>
  )
}

export default BannerContainer
