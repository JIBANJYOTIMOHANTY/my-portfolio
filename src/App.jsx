import React, { useRef, useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

function App() {
  const educationRef = useRef(null)
  const experienceRef = useRef(null)
  const skillRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)
  
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <React.Fragment>
      <div className="min-h-screen w-full bg-[#2F2F2F] relative overflow-x-hidden text-white selection:bg-indigo-500 selection:text-white font-sans">
        {/* Ambient Glow Background Blobs */}
        <div className="absolute top-20 left-[-10%] w-[35rem] h-[35rem] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute top-[80vh] right-[-10%] w-[40rem] h-[40rem] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute top-[160vh] left-[-5%] w-[35rem] h-[35rem] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute top-[240vh] right-[-5%] w-[40rem] h-[40rem] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none"></div>
        
        {/* Core Sections */}
        <Nav educationRef={educationRef} experienceRef={experienceRef} skillRef={skillRef} projectRef={projectRef} contactRef={contactRef} />
        
        <div className="relative z-10">
          <About />
          <Experience ref={experienceRef} />
          <Skill ref={skillRef} />
          <Education ref={educationRef} />
          <Projects ref={projectRef} />
          <Contact ref={contactRef} />
        </div>
        
        <Footer educationRef={educationRef} experienceRef={experienceRef} skillRef={skillRef} projectRef={projectRef} contactRef={contactRef} />

        {/* Scroll To Top Button */}
        <button 
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-650 hover:to-purple-650 text-white rounded-xl shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          aria-label="Scroll to top"
        >
          <ArrowUpwardIcon fontSize="medium" />
        </button>
      </div>
    </React.Fragment>
  )
}

export default App
