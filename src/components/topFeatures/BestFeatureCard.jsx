import React from "react";
import './bestFeatureCard.css'

const BestFeatureCard = (item) => {
 let {title,subtitle} = item.props
  return (
    <section id="textCard">
      <div className="textContent">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default BestFeatureCard;
