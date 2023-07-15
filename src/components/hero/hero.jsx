import React from 'react';
import './hero.css';
import { IMG_HERO } from '../utils/constants';

const Hero = () => {
  return (
    <section id='heroSection'>
      <div className='heroText'>
        <div>
          <h1>
            One-Stop solution for 
            everything your online 
            store needs
          </h1>
          <p>
            Discover thousands of easy to customize themes, 
            templates & CMS products, made by world-class 
            developers
          </p>
        </div>
      </div>
      <div className='heroImage'>
        <img
          src={IMG_HERO}
          alt='heroImage'
        />
      </div>
    </section>
  );
};

export default Hero;
