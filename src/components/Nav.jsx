import React, { useState } from 'react'
import logo from "../logo/logo.png"

function Nav({educationRef,experienceRef,skillRef,projectRef,contactRef}) {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToEducaiton = (e) => {
        educationRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToExperience = (e) => {
        experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    
    const scrollToSkill = (e) => {
        skillRef.current.scrollIntoView({behavior:'smooth'})
    }

    const scrollToProject = (e) => {
        projectRef.current.scrollIntoView({behavior:'smooth'})
    }

    const scrollToContact = (e) => {
        contactRef.current.scrollIntoView({behavior:'smooth'})
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 z-50 bg-[#2F2F2F]/90 backdrop-blur-md border-b border-gray-800/60 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold font-poppins">
                    <a href="/" className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                        MyPortfolio
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none p-1 hover:bg-gray-800/40 rounded-lg transition-colors">
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                         </svg>
                    </button>
                </div>
                <div className={`flex-col md:flex md:flex-row md:items-center gap-2 md:gap-6 ${isOpen ? 'flex absolute top-full left-0 w-full bg-[#2F2F2F] p-4 border-b border-gray-800' : 'hidden md:flex'}`}>
                    <a href="/" className="text-gray-300 hover:text-white px-2 py-1.5 text-base font-poppins font-semibold cursor-pointer rounded-lg hover:bg-gray-800/40 transition-all">About</a>

                    <a onClick={scrollToExperience} className="text-gray-300 hover:text-white px-2 py-1.5 text-base font-poppins font-semibold cursor-pointer rounded-lg hover:bg-gray-800/40 transition-all">Experience</a>

                    <a onClick={scrollToSkill} className="text-gray-300 hover:text-white px-2 py-1.5 text-base font-poppins font-semibold cursor-pointer rounded-lg hover:bg-gray-800/40 transition-all">Skills</a>

                    <a onClick={scrollToEducaiton} className="text-gray-300 hover:text-white px-2 py-1.5 text-base font-poppins font-semibold cursor-pointer rounded-lg hover:bg-gray-800/40 transition-all">Education</a>

                    <a onClick={scrollToProject} className="text-gray-300 hover:text-white px-2 py-1.5 text-base font-poppins font-semibold cursor-pointer rounded-lg hover:bg-gray-800/40 transition-all">Projects</a>

                    <a onClick={scrollToContact} className="text-gray-300 hover:text-white px-2 py-1.5 text-base font-poppins font-semibold cursor-pointer rounded-lg hover:bg-gray-800/40 transition-all">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav