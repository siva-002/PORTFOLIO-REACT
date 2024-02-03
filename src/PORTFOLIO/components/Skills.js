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


const Skills = () => {
    const [skills,setskills]=useState([
        {skill:"HTML 5",image:html},
        {skill:"CSS 3",image:css},
        {skill:"BOOTSTRAP",image:bootstrap},
        {skill:"JAVASCRIPT",image:js},
        {skill:"REACT JS",image:react},
        {skill:"EXPRESS JS",image:express},
        {skill:"MONGO DB",image:mongo},
        {skill:"MYSQL",image:mysql},
    ])
  return (
    <div className='skills' id="skills">
        <div className='container'>
        <div className='row head'>
                    <span><span>S</span>kills</span>
        </div>
        <div className='skillinfo'>
{skills.map((item)=>(
            <div className='skill-det'>
                <img src={item.image} alt={item.image}/>
                <div className='info'>
                    {item.skill}
                </div>
            </div>
))}
        </div>  
        </div>

    </div>
  )
}

export default Skills