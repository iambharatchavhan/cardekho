import React from 'react';
import './newsLatter.css';

const NewsLatter = () => {
  return (
    <section id="newsLatter">
      <div className="getDemo">
        <h2>Get a call from our experts &amp; get a free demo</h2>
        <button className="btnCallback" aria-label="Request a Call Back">Get A Call Back</button>
      </div>
      <div className="newsLatterDiv">
        <h2>Join Newsletter</h2>
        <h4>Mauris imperdiet massa consectetur, tincidunt justo sed, tincidunt erat.</h4>
        <form className="emailInput">
          <label htmlFor="emailInput" id="emailLabel">
            <input id="emailInput" className="email" type="email" aria-labelledby="emailLabel" placeholder="Enter email id" />
          </label>
          <button className="btnSubscribe" type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default NewsLatter;
