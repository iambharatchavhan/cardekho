import React from 'react'


const FeatureCard = (item) => {
  console.log(item.props)
  let {title,subtitle,thumbnail} = item.props;
  return (
    <div>
      <div className='card'>
          <div className='cardTitle'>
              <h3>{title}</h3>
              <p>{subtitle}</p>
          </div>
        <div className='featureImage'>
          <img src={thumbnail} alt="standCardsImage" />

        </div>
      </div>
    </div>
  )
}

export default FeatureCard
