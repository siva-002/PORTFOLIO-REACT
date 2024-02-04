import React from 'react'
import "./css/Contact.css"
import {FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp} from "react-icons/fa"

const Contact = () => {
  return (
    <div id="contact" className='contact'>
         
         <div className='socialmedia'>
           
              <span>Contact me on</span>
              <div className='apps'>
                <div className='insta'> <a href="https://www.instagram.com/_evil_crown_holder_/" target="_blank"><FaInstagram/></a></div>
                <div className='linkedIn'><a href="https://www.linkedin.com/in/sivakumar-v-31b154273/" target="_blank"><FaLinkedin/></a></div>
                <div className='whatsapp'><a href="https://wa.link/46tym5" target="_blank"><FaWhatsapp/></a></div>
                <div className='gmail'><a href="mailto:vsivakumar971@gmail.com" target="_blank"><FaEnvelope/></a></div>
                <br/> 
                </div>
                {/* <span className='contact-email'>vsivakumar971@gmail.com</span> */}
         </div>
       
         <div className='email'>
            {/* <span>Email me :</span> */}
            <span> Developed By Sivakumar V</span> <br/>
           
         </div>
    </div>
  )
}

export default Contact