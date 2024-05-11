import React, { useState } from 'react'
import "./css/Projects.css"
import { motion } from 'framer-motion'
const Projects = () => {
  const [project,setproject]=useState([
    {
      head:"Academic Main Project",
      title:"Career Compass",
      description:"A MERN-Stack powered platform,designed specifically for students,offers a comprehensive set of features tailored to their needs"
    ,link:"https://github.com/siva-002/Career-Compass"
    },
    {
      head:"Academic Mini Project",
      title:"Feedback And Survey System for AURCM",
      description:" Designed a feedback system for our college by utilizing HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL."
    ,link:"https://feedback.autmdu.in/"
    },
    {
      head:"Other Project",
      title:"Chat App",
      description:"Developed an Simple Chat Application with React, Node.js, Express, and MongoDB",
      link:"https://github.com/siva-002/Simple-Chat-App"
    },
    {
      head:"Other Project",
      title:"Quiz App",
      description:"Developed a quiz application using React.js.",
      link:"https://quiz-ten-pi.vercel.app/"
    },
    {
      head:"Other Project",
      title:"Register and Login Page ",
      description:"Designed a front-end page featuring register and login forms using React.js.",
      link:"https://socialmedia-sand.vercel.app/"
    },
 
  ])

  return (
    <motion.div id="projects" className='projects'
    initial={{x:"100vw"}}
    animate={{x:0}}
    >
        <div className='container'>
        <div className='row head'>
                    <span><span>P</span>rojects</span>
        </div>
        <div className="projects-con ">
{project.map((item,index)=>(
              <motion.div className='project-item' key={index}
              whileHover={{scale:"1.03"}}
              >
                <span className='project-head '> {item.head}</span>
                <div className='project-title'>
                  {item.title}                 
                </div>
                <div className='project-description'>{item.description}                 
                {item.link ==""?<div className='progress'>In Progress</div> :
                <a href={item.link} target='_blank'>Click here</a>}
                </div>
              </motion.div>
))}           </div>
          </div>
    </motion.div>
  )
}

export default Projects
