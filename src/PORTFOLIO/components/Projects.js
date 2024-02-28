import React, { useState } from 'react'
import "./css/Projects.css"
const Projects = () => {
  const [project,setproject]=useState([
    {
      head:"Academic Mini Project",
      title:"Feedback And Survey System for AURCM",
      description:" Designed a feedback system for our college by utilizing HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL."
    ,link:"https://feedback.autmdu.in/"
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
    {
      head:"Other Project",
      title:"Chat App",
      description:"Developed an Simple Chat Application with React, Node.js, Express, and MongoDB",
      link:"https://github.com/siva-002/Simple-Chat-App"
    },
  ])

  return (
    <div id="projects" className='projects'>
        <div className='container'>
        <div className='row head'>
                    <span><span>P</span>rojects</span>
        </div>
        <div className="projects-con ">
{project.map((item)=>(
              <div className='project-item'>
                <span className='project-head'> {item.head}</span>
                <div className='project-title'>
                  {item.title}                 
                </div>
                <div className='project-description'>{item.description}                 
                {item.link ==""?<div className='progress'>In Progress</div> :
                <a href={item.link} target='_blank'>Click here</a>}
                </div>
              </div>
))}           </div>
          </div>
    </div>
  )
}

export default Projects
