import React, { useState } from 'react'
import "./css/Skills.css"
// import java from "./image/java.png"
import html from "./image/html.png"
import css from "./image/css.png"
import js from "./image/js.png"
import react from "./image/react.png"
import php from "./image/php.png"
import mysql from "./image/mysql.png"
import express from "./image/express.png"
import bootstrap from "./image/bootstrap.png"
import mongo from "./image/mongodb.png"
import node from "./image/node-js.png"
import { motion } from 'framer-motion'

const Skills = () => {
    const [skills,setskills]=useState([
        {skill:"HTML 5",image:html,status:"Advanced"},
        {skill:"CSS 3",image:css,status:"Advanced"},
        {skill:"BOOTSTRAP",image:bootstrap,status:"Advanced"},
        {skill:"JAVASCRIPT",image:js,status:"Intermediate"},
        {skill:"REACT JS",image:react,status:"Intermediate"},
        {skill:"PHP",image:php,status:"Intermediate"},
        {skill:"MYSQL",image:mysql,status:"Intermediate"},
        {skill:"NODE JS",image:node,status:"Intermediate"},
        {skill:"EXPRESS JS",image:express,status:"Intermediate"},
        {skill:"MONGO DB",image:mongo,status:"Intermediate"},
      
    ])
  return (
    <div className='skills' id="skills"
  
    // exit={{x:"-100vw"}}
    >
        <motion.div className='container'
          initial={{x:"100vw"}}
          animate={{x:0}}
        >
        <div className='row head'>
                    <span><span>S</span>kills</span>
        </div>
        <div className='skillinfo'>
{skills.map((item,index)=>(
            <motion.div className='skill-det' key={index}
         whileHover={{scale:"1.04"}}
            
            >
                <img src={item.image} alt={item.image}/>
                <div className='info'>
                    {item.skill}
                </div>
                <div className='badge text-info skill-percent'>
                    {item.status}
                </div>
            </motion.div>
))}
        </div>  
        </motion.div>

    </div>
  )
}

export default Skills
