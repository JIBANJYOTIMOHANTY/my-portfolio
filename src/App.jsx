import React, { useRef, useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
      <div className="min-h-screen w-full bg-[#08080C] relative overflow-x-hidden text-gray-200 selection:bg-cyan-500 selection:text-black font-sans bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:32px_32px]">
        {/* Neon Ambient Light Flares */}
        <div className="absolute top-20 left-[-20%] w-[45rem] h-[45rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-[80vh] right-[-20%] w-[45rem] h-[45rem] bg-fuchsia-500/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-[180vh] left-[-15%] w-[45rem] h-[45rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-[280vh] right-[-15%] w-[45rem] h-[45rem] bg-fuchsia-500/5 rounded-full blur-[140px] pointer-events-none"></div>
        
        {/* Toast Notifications */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        {/* Navigation */}
        <Nav educationRef={educationRef} experienceRef={experienceRef} skillRef={skillRef} projectRef={projectRef} contactRef={contactRef} />
        
        {/* Core Layout */}
        <div className="relative z-10 pt-20">
          <About />
          <Experience ref={experienceRef} />
          <Skill ref={skillRef} />
          <Education ref={educationRef} />
          <Projects ref={projectRef} />
          <Contact ref={contactRef} />
        </div>
        
        <Footer educationRef={educationRef} experienceRef={experienceRef} skillRef={skillRef} projectRef={projectRef} contactRef={contactRef} />

        {/* Cyberpunk Glowing Scroll To Top Button */}
        <button 
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-3 bg-black hover:bg-cyan-500 border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-black rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300 cursor-pointer ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          aria-label="Scroll to top"
        >
          <ArrowUpwardIcon fontSize="medium" />
        </button>
      </div>
    </React.Fragment>
  )
}

export default App
