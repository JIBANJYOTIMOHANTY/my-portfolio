import React, { useEffect, useState } from 'react'
import jiban from "../images/jiban.jpg"
import LinkedIn from '@mui/icons-material/LinkedIn';
import { GitHub, Instagram } from '@mui/icons-material';

const About = () => {
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTextVisible(true)
        },2000);
        return () => clearTimeout(timer);
    },[])

    
    return (
        <div className='w-screen bg-[#2f2f2f]'>
      <div className='flex flex-col md:flex-row-reverse md:mt-0'>
        {/* Image Section */}
        <section className='w-full md:w-1/2 h-auto mt-16 md:mt-20 md:mr-40 flex justify-center md:justify-end'>
          <img src={jiban} alt="Jiban Jyoti Mohanty" className='w-full md:w-3/4 h-full rounded-xl' />
        </section>

        {/* Text Section */}
        <section className='w-full md:w-1/2 h-auto mt-8 md:mt-40 md:ml-24 p-4'>
          <p className='text-white text-5xl md:text-7xl font-poppins font-semibold animate-typing overflow-hidden whitespace-nowrap'>
            Hi, I am
          </p>
          <p className={`text-white w-full text-3xl md:text-6xl font-poppins font-semibold animate-typing2 overflow-hidden whitespace-nowrap animate-delay-[2s] ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
            Jiban Jyoti Mohanty
          </p>
          <p className='text-white text-2xl md:text-4xl mt-8 font-poppins'>
            Fullstack Developer
          </p>
          <p className='text-white text-xl mt-8 font-poppins'>
            If you'd like to collaborate or have any questions, feel free to reach out to me. <br /> I'm excited to connect with you!
          </p>
          <div className='flex space-x-6 mt-2'>
            <a href="https://www.linkedin.com/in/jiban-jyoti-mohanty-35005021a/">
              <LinkedIn sx={{ fontSize: 40 }} className='hover:shadow-md hover:shadow-white rounded-lg' />
            </a>
            <a href="https://github.com/JIBANJYOTIMOHANTY/">
              <GitHub sx={{ fontSize: 40 }} className='hover:shadow-md hover:shadow-white rounded-lg' />
            </a>
            <a href="https://www.instagram.com/jiban__jyoti__mohanty/">
              <Instagram sx={{ fontSize: 40 }} className='hover:shadow-md hover:shadow-white rounded-lg' />
            </a>
          </div>
        </section>
      </div>
    </div>
    )
}

export default About;
