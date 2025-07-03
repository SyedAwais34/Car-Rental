import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import BannerContainer from '../components/BannerContainer'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div>
      <Hero />
      <BannerContainer />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home
