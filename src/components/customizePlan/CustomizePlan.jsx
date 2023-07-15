import React, { useState } from "react";
import "./customizePlan.css";
import { AiOutlinePlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { accordion,SUB_IMG_HERO } from "../utils/constants";

const CustomizePlan = () => {
  const [isOpen, setIsOpen] = useState(null);

  function handleIsOpen(index) {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  }
  return (
    <section id="customPlan">
      <div className="accordionPlan">
        <div className="headline">
          <h2>How It Works</h2>
          <p>Your dream business just four steps away!</p>
        </div>
        {accordion.map((item, index) => (
          <div className="accordion" key={index}>
            <div   role="button" className="dropIcons" onClick={() => handleIsOpen(index)}>
              {isOpen === index ? (
                <AiFillMinusCircle className="icon" />
              ) : (
                <AiOutlinePlusCircle className="icon" />
              )}
              <p>{item.question}</p>
            </div>
            <div className="detailsPara">
              {isOpen === index ? (
                <p className="dropDetails">{item.answer}</p>
              ) : null}
            </div>
          </div>
        ))}
        <div>
          <button className="btnStarted">Get Started</button>
        </div>
      </div>
      <div className="imagePlan">
        <img
          src={SUB_IMG_HERO}
          alt="imagePlan"
        />
      </div>
    </section>
  );
};



export default CustomizePlan;
