import React,{useState} from 'react'
import './faq.css'
import {BsChevronDown,BsChevronUp} from 'react-icons/bs'
import { data } from '../utils/constants'


const Faq = () => {
    let [isActive,setISActive] = useState(null)

    function checkActive(i){
        if(isActive === i){
            setISActive(null)  
        }else{
            setISActive(i)
        }
       
    }
  return (
   <section id='faqAccordion'>
      <div className='faqHeading'>
        <h3>FAQ's</h3>
        <h4>Frequently asked questions</h4>
      </div>
     
      {data.map((item,index)=>(
           <div className='faqCenterAccordion' key={index}> 
           <div className='question' onClick={()=>checkActive(index)}>
           <h4>{item.question}</h4>
          {isActive === index ? <BsChevronUp/> : <BsChevronDown/> }
           </div>
             <p  className={isActive === index ? 'active answer' : "unActive"}>{item.answer}</p>
        </div>
      ))}
      


   </section>
  )
}

export default Faq


