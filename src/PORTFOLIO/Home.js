import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Index from './components/Index'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loader from './components/Loader'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
const Home = () => {
  const [load,setload]=useState(true)
  useEffect(()=>{
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault()
  
          const id = this.getAttribute('href').substring(1)
          const targetElement = document.getElementById(id)
          if(id=="education"){
            const elem=document.getElementById("education")
            if(elem.classList.contains('eduslideanim')){
                elem.classList.toggle('eduslideanim')
            }
            elem.classList.toggle('eduslideanim')
          }
          if(id=="skills"){
            const elem=document.getElementById("skills")
            if(elem.classList.contains('eduslideanim')){
                elem.classList.toggle('eduslideanim')
            }
            elem.classList.toggle('eduslideanim')
          }
          if (targetElement) {
              const offset = document.querySelector('.navbar').offsetHeight
              const targetPosition = targetElement.offsetTop - offset
              window.scrollTo({
  
                  top: targetPosition,
                  behavior: 'smooth'
              })
          }
      })      
  })

  })
  useEffect(()=>{
    setTimeout(()=>{
      setload(false)
    },2000)

    
  },[])
  return (
    
    <div className=''>
      {(!load)?(
        <div className="main">
        <Navbar/>
        <Index/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
        </div>
      ):(<Loader/>)}
    </div>
  )
}

export default Home