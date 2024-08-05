import React, { useRef, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'
import A from './components/Footer'
import Education from './components/Education'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)
  const educationRef = useRef(null)
  const skillRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <React.Fragment >
      <div className='md:h-screen w-screen overflow-x-hidden bg-[#2F2F2F]'>
        
        <Nav educationRef={educationRef} skillRef={skillRef} projectRef={projectRef} contactRef={contactRef} />
        <About />
        <Education ref={educationRef} />
        <Skill ref={skillRef} />
        <Projects ref={projectRef} />
        <Contact ref={contactRef} />
        <Footer educationRef={educationRef} skillRef={skillRef} projectRef={projectRef} contactRef={contactRef} />


      </div>
      {/* <h1 className='text-red-600'>hello</h1> */}
    </React.Fragment>
  )
}

export default App
