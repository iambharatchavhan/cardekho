import React from 'react'
import StatsBanner from './StatsBanner'
import "./statsContainer.css"
import { statsData } from '../utils/constants'
const StatsBannerContainer = () => {
  return (
    <section className='statsBanner'>
      {statsData.map((item,index)=>(
      <StatsBanner key={index} props={item} />)) }
    </section>
  )
}

export default StatsBannerContainer
