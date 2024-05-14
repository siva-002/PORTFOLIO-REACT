import React, { useState } from 'react'
import "./css/Projects.css"
import { motion } from 'framer-motion'
const Projects = () => {
  const [project,setproject]=useState([
    {
      head:"Academic Main Project",
      title:"Career Compass",
      description:"This project contains modules of Realtime Chatting, Aptitude Preparation, Discussion Forum and an Event Module."
    ,link:"https://github.com/siva-002/Career-Compass",
    output:"https://chat-frontend-blush.vercel.app/"
    },
    {
      head:"Academic Mini Project",
      title:"Feedback And Survey System for AURCM",
      description:" Designed a feedback system for our college by utilizing HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL."
    ,link:"https://github.com/siva-002/FeedBackSystem",
    output:"https://feedback.autmdu.in/"
    },
    {
      head:"Other Project",
      title:"Chat App",
      description:"Developed an Simple Chat Application with React, Node.js, Express, and MongoDB.",
      link:"https://github.com/siva-002/Simple-Chat-App",
    },
    {
      head:"Other Project",
      title:"CRUD Operation in MERN Stack",
      description:"The Admin Can able to login to the System and can able to Create, Read, Edit and Delete an Employee.",
      link:"https://github.com/siva-002/MERNTASK-INTERVIEW",
    },
    {
      head:"Other Project",
      title:"Quiz App",
      description:"Simple Quiz Application with predefined questions, quiz will submitted when user answer all questions and results will be displayed to the user.",
      link:"https://github.com/siva-002/React-QuizProject",
      output:"https://quiz-ten-pi.vercel.app/"
    },
    {
      head:"Other Project",
      title:"Register and Login Page ",
      description:"Designed a front-end page featuring register and login forms using React.js.",
      link:"https://github.com/siva-002/React-RegistrationForm",
      output:"https://socialmedia-sand.vercel.app/"
    },
 
  ])

  return (
    <motion.div id="projects" className='projects'
    initial={{scale:0.1,opacity:0}}
    animate={{scale:1,opacity:1}}
    transition={{duration:0.9}}
  
    >
        <motion.div className='container'
            
         
        >
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
                <div className='output-details'>               
                {item.link !=""&&<a href={item.link} target='_blank'>Source Code</a>}
                {item.output&&<a href={item.output} target='_blank' className='output'>Output</a>}
                </div>
                </div>
              </motion.div>
))}           </div>
          </motion.div>
    </motion.div>
  )
}

export default Projects
