import React from 'react'
import './css/Navbar.css'
import Scrollspy from "react-scrollspy"
const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <div className="navbar-brand" ><span className='first'>P</span><span className='second'>ortfolio</span></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarLink" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="offcanvas offcanvas-start" id="navbarLink">
   
    <Scrollspy items={['home','education']} className="navbar-nav offcanvas-body ms-lg-auto">
      <div className='offcanvas-header ms-auto'>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
    
        <li className="nav-item p-2 ">
          <a className="nav-link " href="#home">HOME</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link" href="#education">EDUCATION</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link" href="#skills">SKILLS</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link" href="#projects">PROJECTS</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link" href="#contact">CONTACT</a>
        </li>
      
        </Scrollspy>
    
    </div>  
  </div>
</nav>
    </div>
  )
}

export default Navbar