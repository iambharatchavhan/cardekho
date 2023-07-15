import React from "react";
import "./footer.css";
import {AiFillFacebook,AiFillTwitterSquare,AiFillLinkedin,AiFillGooglePlusSquare} from 'react-icons/ai'

const Footer = () => {
  return (
    <section id="footer">
      <div className="footNavLinks">
        <h4>PRODUCT</h4>
        <ul>
          <li>Nullam Aliquam</li>
          <li>Facilisis Bibendum</li>
          <li>Interdum</li>
        </ul>
      </div>
      <div className="footNavLinks">
        <h4>COMPANY</h4>
        <ul>
          <li>Nullam Aliquam</li>
          <li>Facilisis Bibendum</li>
          <li>Interdum</li>
        </ul>
      </div>
      <div className="footNavLinks">
        <h4>RESOURCES</h4>
        <ul>
          <li>Nullam Aliquam</li>
          <li>Facilisis Bibendum</li>
          <li>Interdum</li>
        </ul>
      </div>
      <div className="footNavLinks">
        <h4>OTHER</h4>
        <ul>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="copyWrite">
       <div className="footLogo">LOGO</div> 
       <p>© 2021-2022 girnarsoft</p>
       <div className="socials"><AiFillFacebook/><AiFillTwitterSquare/><AiFillLinkedin/><AiFillGooglePlusSquare/></div>
       
      </div>

    </section>
  );
};

export default Footer;
