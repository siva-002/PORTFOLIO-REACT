
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './PORTFOLIO/components/Navbar';
import Index from './PORTFOLIO/components/Index';
import Education from './PORTFOLIO/components/Education';
import Projects from './PORTFOLIO/components/Projects';
import Skills from './PORTFOLIO/components/Skills';
import Contact from './PORTFOLIO/components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { useEffect, useState } from 'react';
import Loader from "./PORTFOLIO/components/Loader"
import { AnimatePresence } from 'framer-motion';
function App() {
    const [load,setload]=useState(true)
    const location=useLocation()
    useEffect(()=>{
      setTimeout(()=>{
        setload(false)
      },4000)
    },[])
  return (
    <div className="App">
      {load? <Loader/>:<>
      <Navbar />
      <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route index path="/" element={ <Index/>} />
        <Route path="/education" element={ <Education/>} />
        <Route path="/projects" element={ <Projects/>} />
        <Route path="/skills" element={ <Skills/>} />
        <Route path="/contact" element={ <Contact/>} />
      </Routes>
      </AnimatePresence>
      </>}
    </div>
  );
}

export default App;
