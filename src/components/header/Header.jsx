import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header id="mainHeader">
      <div className="headerContainer">
        <div className="navLinks">
          <nav>
            <ul>
              <li>Browse Templates</li>
              <li>Solutions</li>
              <li>Pricing</li>
              <li>Enterprise</li>
            </ul>
          </nav>
        </div>
        <div className="brandLogo">LOGO</div>
        <div className="userAction">
          <button aria-label="Log in" className="btnLogin">
            Log in
          </button>
          <button aria-label="Get Started" className="btnGetStarted">
            Get Started
          </button>
        </div>
      </div>
      <div className="searchContainer">
        <div className="inputContainer">
     
          <input className="searchBox" type="text"  placeholder="Enter your business name"/><button aria-label="Search" className="btnSearch">
            Get Started
          </button>
        </div>
        <div className="linksContainer">
          <nav>
            <ul>
              <li>Free 30 day trial </li>
              <li>Customize everything</li>
              <li>Unique Design</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
