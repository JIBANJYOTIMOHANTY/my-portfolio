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
    <div className="w-full bg-transparent min-h-[85vh] flex items-center" id="about">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          {/* Image Section with Hologram Target lines */}
          <section className="w-full md:w-1/2 flex justify-center relative group">
            {/* Cyberpunk corner bracket styling */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-cyan-400"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-cyan-400"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>

            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-fuchsia-600 rounded-2xl blur-2xl opacity-10 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative p-1 bg-gradient-to-tr from-cyan-500/50 via-gray-900 to-fuchsia-500/50 rounded-2xl shadow-[0_0_25px_rgba(6,182,212,0.15)] overflow-hidden max-w-sm md:max-w-md">
              <img
                src={jiban}
                alt="Jiban Jyoti Mohanty"
                className="w-full h-auto object-cover rounded-xl transform hover:scale-102 transition duration-500 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] pointer-events-none"></div>
            </div>
          </section>

          {/* Text Section */}
          <section className="w-full md:w-1/2 flex flex-col justify-center text-left">
            <span className="text-cyan-400 font-mono tracking-widest text-xs md:text-sm uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              [system_status: online]
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-poppins font-extrabold tracking-tight mb-2">
              Hi, I am
            </h1>
            <h2 className={`text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-extrabold tracking-wide whitespace-nowrap transition-opacity duration-1000 ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
              Jiban Jyoti Mohanty
            </h2>
            <h3 className="text-gray-300 text-xl md:text-3xl mt-4 font-mono font-semibold flex items-center gap-2.5">
              &lt;Fullstack Developer //&gt;
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
                className="p-3 bg-black hover:bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-xl hover:shadow-[0_0_15px_#06b6d4] hover:border-cyan-400 transition-all duration-300"
              >
                <LinkedIn sx={{ fontSize: 28 }} />
              </a>
              <a
                href="https://github.com/JIBANJYOTIMOHANTY/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-black hover:bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30 rounded-xl hover:shadow-[0_0_15px_#d946ef] hover:border-fuchsia-400 transition-all duration-300"
              >
                <GitHub sx={{ fontSize: 28 }} />
              </a>
              <a
                href="https://www.instagram.com/jiban__jyoti__mohanty/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-black hover:bg-pink-500/10 text-pink-400 border border-pink-500/30 rounded-xl hover:shadow-[0_0_15px_#ec4899] hover:border-pink-400 transition-all duration-300"
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
