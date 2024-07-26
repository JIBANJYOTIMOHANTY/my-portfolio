import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-[#2F2F2F]'>
        <Nav />
        <About/>
      </div>
      {/* <h1 className='text-red-600'>hello</h1> */}
    </>
  )
}

export default App
