import React from 'react'
import "./css/Contact.css"
import {FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp} from "react-icons/fa"
import contact from "./image/contact.png"
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <motion.div id="contact" className='contact'
    initial={{x:"100vw"}}
    animate={{x:0 }}
    transition={{type:"spring",stiffness:"200"}}
    
    >
         <div className='contact-con'>
         <div className='socialmedia'>

              <span className='title'>Contact me </span>
              <div className='apps-image-con'>
              <div className='apps'>
                <div className='insta'> <a href="https://www.instagram.com/_evil_crown_holder_/" target="_blank"><FaInstagram/> Instagram</a></div>
                <div className='linkedIn'><a href="https://www.linkedin.com/in/sivakumar-v-31b154273/" target="_blank"><FaLinkedin/> LinkedIn</a></div>
                <div className='whatsapp'><a href="https://wa.link/46tym5" target="_blank"><FaWhatsapp/> Whatsapp</a></div>
                <div className='gmail'><a href="mailto:vsivakumar971@gmail.com" target="_blank"><FaEnvelope/> Email</a></div>
                <br/> 
                </div>
              <div className='image'>
                  <img src={contact}/>
              </div>
                </div>
             
         </div>
       
         <div className='contact-name'>
            {/* <span>Email me :</span> */}
            <span> Developed By Sivakumar V</span> <br/>
           
         </div>
         </div>
    </motion.div>
  )
}

export default Contact