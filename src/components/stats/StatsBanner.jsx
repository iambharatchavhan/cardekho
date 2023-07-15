import React from 'react'
import './statsBanner.css'



const StatsBanner = (items) => {
  let {icon,statNum,statsInfo} = items.props
  return (
   <section id='statsBanner'>
    <div className="box">
       <p className='boxIcon'> {icon}</p>
       <p className='boxValue'>{statNum}</p>
      <p className='boxTagline'>{statsInfo}</p>
    </div>
   </section>
  )
}

export default StatsBanner
