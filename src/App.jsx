import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'
import A from './components/A'
import Education from './components/Education'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment >
      <div className='h-screen w-screen bg-[#2F2F2F]'>
        <Nav />
        <BrowserRouter>
          <Routes >

            <Route path='/' element={<About />} />
            <Route path='/education' element={<Education />} />
          </Routes>
        </BrowserRouter>
        {/* <About/> */}
        {/* <Education /> */}
        {/* <A /> */}

      </div>
      {/* <h1 className='text-red-600'>hello</h1> */}
    </React.Fragment>
  )
}

export default App
