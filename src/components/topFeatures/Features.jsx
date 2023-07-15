import React from 'react'
import './features.css'
import FeatureCard from './FeatureCard'
import BestFeatureCard from './BestFeatureCard'
import { featuresData,textFeatureData } from '../utils/constants'

const Features = () => {
  return (
    <section id='features'>
        <div className='featureTitle'>
          <h3>Top Features</h3>
          <p>Bring your business online</p>
        </div>
        <div className="standCards">
       { featuresData.map((item,index)=>(
           <FeatureCard key={index} props={item}/>
       ))}
        </div>
        <div className='textCardsContainer'>
       { textFeatureData.map((item,index)=>(
              <BestFeatureCard key={index} props={item} />
       )) }
        
        </div>
    </section>
  )
}

export default Features
