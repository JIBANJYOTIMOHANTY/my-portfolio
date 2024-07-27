import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment >
      <div className='h-screen w-screen bg-[#2F2F2F]'>
        <Nav />
        <About/>
        
      </div>
      {/* <h1 className='text-red-600'>hello</h1> */}
    </React.Fragment>
  )
}

export default App
