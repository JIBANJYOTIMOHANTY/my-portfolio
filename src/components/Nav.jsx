import React, { useState } from 'react'
import logo from "../logo/logo.png"

function Nav({educationRef,experienceRef,skillRef,projectRef,contactRef}) {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToEducaiton = (e) => {
        e.preventDefault();
        educationRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToExperience = (e) => {
        e.preventDefault();
        experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    
    const scrollToSkill = (e) => {
        e.preventDefault();
        skillRef.current.scrollIntoView({behavior:'smooth'})
    }

    const scrollToProject = (e) => {
        e.preventDefault();
        projectRef.current.scrollIntoView({behavior:'smooth'})
    }

    const scrollToContact = (e) => {
        e.preventDefault();
        contactRef.current.scrollIntoView({behavior:'smooth'})
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 z-50 bg-[#08080C]/85 backdrop-blur-md border-b border-cyan-500/30 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold font-mono tracking-wider">
                    <a href="/" className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
                        &lt;JIBAN.DEV //&gt;
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-cyan-400 focus:outline-none p-1 hover:bg-cyan-500/10 rounded border border-cyan-500/30 transition-colors">
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                         </svg>
                    </button>
                </div>
                <div className={`flex-col md:flex md:flex-row md:items-center gap-2 md:gap-6 ${isOpen ? 'flex absolute top-full left-0 w-full bg-[#08080C] p-4 border-b border-cyan-500/30' : 'hidden md:flex'}`}>
                    <a href="#about" className="text-gray-400 hover:text-cyan-400 px-3 py-1.5 text-sm font-mono tracking-widest uppercase cursor-pointer rounded hover:bg-cyan-500/5 border border-transparent hover:border-cyan-500/20 transition-all">About</a>

                    <a href="#experience" onClick={scrollToExperience} className="text-gray-400 hover:text-cyan-400 px-3 py-1.5 text-sm font-mono tracking-widest uppercase cursor-pointer rounded hover:bg-cyan-500/5 border border-transparent hover:border-cyan-500/20 transition-all">Experience</a>

                    <a href="#skills" onClick={scrollToSkill} className="text-gray-400 hover:text-cyan-400 px-3 py-1.5 text-sm font-mono tracking-widest uppercase cursor-pointer rounded hover:bg-cyan-500/5 border border-transparent hover:border-cyan-500/20 transition-all">Skills</a>

                    <a href="#education" onClick={scrollToEducaiton} className="text-gray-400 hover:text-cyan-400 px-3 py-1.5 text-sm font-mono tracking-widest uppercase cursor-pointer rounded hover:bg-cyan-500/5 border border-transparent hover:border-cyan-500/20 transition-all">Education</a>

                    <a href="#projects" onClick={scrollToProject} className="text-gray-400 hover:text-cyan-400 px-3 py-1.5 text-sm font-mono tracking-widest uppercase cursor-pointer rounded hover:bg-cyan-500/5 border border-transparent hover:border-cyan-500/20 transition-all">Projects</a>

                    <a href="#contact" onClick={scrollToContact} className="text-gray-400 hover:text-cyan-400 px-3 py-1.5 text-sm font-mono tracking-widest uppercase cursor-pointer rounded hover:bg-cyan-500/5 border border-transparent hover:border-cyan-500/20 transition-all">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav