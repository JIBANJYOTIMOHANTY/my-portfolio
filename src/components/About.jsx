import React, { useEffect, useState } from 'react'
import jiban from "../images/jiban1.jpg"
import LinkedIn from '@mui/icons-material/LinkedIn';
import { GitHub, Instagram } from '@mui/icons-material';

const About = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true)
    }, 1000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <div className="w-screen bg-[#2f2f2f] min-h-[90vh] flex items-center py-12 md:py-20" id="about">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          {/* Image Section */}
          <section className="w-full md:w-1/2 flex justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-35 transition duration-500"></div>
            <div className="relative p-1.5 bg-gradient-to-tr from-gray-700 via-indigo-500/50 to-purple-600/50 rounded-2xl shadow-2xl overflow-hidden max-w-sm md:max-w-md">
              <img
                src={jiban}
                alt="Jiban Jyoti Mohanty"
                className="w-full h-auto object-cover rounded-xl transform hover:scale-102 transition duration-500"
              />
            </div>
          </section>

          {/* Text Section */}
          <section className="w-full md:w-1/2 flex flex-col justify-center text-left">
            <span className="text-indigo-400 font-poppins font-bold tracking-wider text-sm md:text-base uppercase mb-3">
              Welcome to my space
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-poppins font-extrabold tracking-tight mb-2">
              Hi, I am
            </h1>
            <h2 className={`text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-3xl md:text-5xl lg:text-6xl font-poppins font-extrabold transition-opacity duration-1000 ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
              Jiban Jyoti Mohanty
            </h2>
            <h3 className="text-gray-300 text-xl md:text-3xl mt-4 font-poppins font-semibold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              Fullstack Developer
            </h3>
            <p className="text-gray-400 text-base md:text-lg mt-6 font-poppins leading-relaxed max-w-xl">
              If you'd like to collaborate or have any questions, feel free to reach out to me. I'm excited to connect with you and build something amazing together!
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-8">
              <a
                href="https://www.linkedin.com/in/jiban-jyoti-mohanty-35005021a/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gray-800 hover:bg-indigo-600 hover:text-white text-gray-300 border border-gray-700/60 rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
              >
                <LinkedIn sx={{ fontSize: 28 }} />
              </a>
              <a
                href="https://github.com/JIBANJYOTIMOHANTY/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gray-800 hover:bg-purple-600 hover:text-white text-gray-300 border border-gray-700/60 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <GitHub sx={{ fontSize: 28 }} />
              </a>
              <a
                href="https://www.instagram.com/jiban__jyoti__mohanty/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gray-800 hover:bg-pink-600 hover:text-white text-gray-300 border border-gray-700/60 rounded-xl hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
              >
                <Instagram sx={{ fontSize: 28 }} />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About;
