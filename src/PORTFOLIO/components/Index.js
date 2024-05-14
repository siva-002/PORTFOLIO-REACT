import React, { useEffect, useState } from 'react'
import "./css/index.css"
import person from "./image/person.jpeg"
import resume from "./documents/resume.pdf"
import { motion } from 'framer-motion'
const Index = () => {
    const [name,setname]=useState('')
    const [profession,setprofession]=useState('')
    const [nametype,setnametype]=useState(true)
    const [professiontype,setprofessiontype]=useState(false)
    useEffect(()=>{
 
        const namevalue="I'm Sivakumar V"
        const professionvalue="Aspiring MERN Stack Developer"
      const typing=()=>{
        if(name.length<namevalue.length){
            setname(namevalue.substring(0,name.length+1))
        }else{
            setnametype(false)
        }
        if(profession.length<professionvalue.length && name.length==namevalue.length)
        {
            setprofessiontype(true)
            setprofession(professionvalue.substring(0,profession.length+1))
        }else{
            setprofessiontype(false)
        }
      }
       const anim=setInterval(typing,100)
       return (()=>clearInterval(anim))
           
     
    },[name,profession])
  return (
    <div className='homepage' id="home"

    >
        <div className="container-fluid "
           
        >
        <motion.div className="col-container"
         initial={{x:"100vw",opacity:0}}
         animate={{x:0,opacity:1,paddingTop:"25vh"}}
        >
            <div className="col-first mt-lg-5">
                    <span className='name'><span className='hi'>Hi </span> 
                       {name} {nametype?(<span className='blink'></span>):""}
                    </span>
                    <span className='profession'>
                     {profession}{professiontype?(<span className='blink'></span>):""}
                    </span> 

                    <span className='resume-btn'> 
                        <a href={resume} download="myresume.pdf" ><motion.button className='' 
                      
                        whileTap={{scale:"0.9"}}
                        whileHover={{scale:"1.1"}}
                        
                        >Resume</motion.button></a> 
                    </span>
            </div>
           
            <div className="col-second">
                
             <img className='d-none d-lg-block' src={person} />
         
            </div>
        </motion.div>
        </div>
        </div>
  )
}

export default Index
