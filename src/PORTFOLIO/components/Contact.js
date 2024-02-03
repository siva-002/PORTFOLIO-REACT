import React from 'react'
import "./css/Contact.css"
import {FaInstagram, FaLinkedin, FaWhatsapp} from "react-icons/fa"

const Contact = () => {
  return (
    <div id="contact" className='contact'>
         
         <div className='socialmedia'>
           
              <span>Contact me on</span>
              <div className='apps'>
                <div className='insta'> <a href=""><FaInstagram/></a></div>
                <div className='linkedIn'><a href=""><FaLinkedin/></a></div>
                <div className='whatsapp'><a href=""><FaWhatsapp/></a></div>
                </div>
         </div>

         <div className='email'>
            {/* <span>Email me :</span> */}
            <span> vsivakumar971@gmail.com</span>
         </div>
    </div>
  )
}

export default Contact