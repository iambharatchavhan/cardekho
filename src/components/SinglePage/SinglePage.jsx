import React from 'react'
import Header from '../header/Header'
import Hero from '../hero/hero'
import CustomizePlan from '../customizePlan/CustomizePlan'
import Features from '../topFeatures/Features'
import StatsBannerContainer from '../stats/StatsBannerContainer'
import Faq from '../accordion/Faq'
import NewsLatter from '../newsLetter/NewsLatter'
import Carousel from '../carousel/Caousel'
import Footer from '../footer/Footer'
const SinglePage = () => {
  return (
    <>
 <Header />
   <Hero />
   <CustomizePlan />
   <Features />
   <StatsBannerContainer />
   <Carousel/>
   <Faq />
   <NewsLatter/>
   <Footer />
    </>
  )
}

export default SinglePage
