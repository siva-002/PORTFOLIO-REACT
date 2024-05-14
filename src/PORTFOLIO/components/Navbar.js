<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import './css/Navbar.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location=useLocation()
  const [page,setpage]=useState()
  useEffect(()=>{
    const active=location.pathname.replace("/",'')
    setpage(active)
  },[location])
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <div className="navbar-brand" ><span className='first'>P</span><span className='second'>ortfolio</span></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarLink" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="offcanvas offcanvas-start" id="navbarLink">
   
    <ul className="navbar-nav offcanvas-body ms-lg-auto">
      <div className='offcanvas-header ms-auto'>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
    
        <li className="nav-item p-2 ">
          <Link to="/"><span className={page==""?"active nav-link":"nav-link" }>HOME</span></Link>
          
        </li>
        <li className="nav-item p-2">
          <Link to="/education">  <span className={page=="education"?"active nav-link":"nav-link" }>EDUCATION</span></Link>
        
        </li>
        <li className="nav-item p-2">
        <Link to="/skills"> <span className={page=="skills"?"active nav-link":"nav-link" } >SKILLS</span></Link>
         
        </li>
        <li className="nav-item p-2">
        <Link to="/projects"> <span className={page=="projects"?"active nav-link":"nav-link" } >PROJECTS</span></Link>
         
        </li>
        <li className="nav-item p-2">
        <Link to="/contact">  <span className={page=="contact"?"active nav-link":"nav-link" }>CONTACT</span></Link>
        
        </li>
      
        </ul>
    
    </div>  
  </div>
</nav>
    </div>
  )
}

=======
import React, { useEffect, useState } from 'react'
import './css/Navbar.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location=useLocation()
  const [page,setpage]=useState()
  useEffect(()=>{
    const active=location.pathname.replace("/",'')
    setpage(active)
  },[location])
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <div className="navbar-brand" ><span className='first'>P</span><span className='second'>ortfolio</span></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarLink" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="offcanvas offcanvas-start" id="navbarLink">
   
    <ul className="navbar-nav offcanvas-body ms-lg-auto">
      <div className='offcanvas-header ms-auto'>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
    
        <li className="nav-item p-2 ">
          <Link to="/"><span className={page==""?"active nav-link":"nav-link" }>HOME</span></Link>
          
        </li>
        <li className="nav-item p-2">
          <Link to="/education">  <span className={page=="education"?"active nav-link":"nav-link" }>EDUCATION</span></Link>
        
        </li>
        <li className="nav-item p-2">
        <Link to="/skills"> <span className={page=="skills"?"active nav-link":"nav-link" } >SKILLS</span></Link>
         
        </li>
        <li className="nav-item p-2">
        <Link to="/projects"> <span className={page=="projects"?"active nav-link":"nav-link" } >PROJECTS</span></Link>
         
        </li>
        <li className="nav-item p-2">
        <Link to="/contact">  <span className={page=="contact"?"active nav-link":"nav-link" }>CONTACT</span></Link>
        
        </li>
      
        </ul>
    
    </div>  
  </div>
</nav>
    </div>
  )
}

>>>>>>> 0d5f10f (up)
export default Navbar