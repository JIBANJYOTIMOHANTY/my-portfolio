import React, { useState } from 'react'
import logo from "../logo/logo.png"
import { duration } from '@mui/material';

function Nav({educationRef,skillRef,projectRef,contactRef}) {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToEducaiton = (e) => {
        // e.preventDefault();
        educationRef.current.scrollIntoView({ behavior: 'smooth' });
      };
    
    const scrollToSkill = (e) => {
        skillRef.current.scrollIntoView({behavior:'smooth', duration : 1000})
    }

    const scrollToProject = (e) => {
        projectRef.current.scrollIntoView({behavior:'smooth', duration : 1000})
    }

    const scrollToContact = (e) => {
        contactRef.current.scrollIntoView({behavior:'smooth', duration : 1000})
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-[#2F2F2F] p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-bold"><a href="/">MyPortfolio</a></div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 ${isOpen ? 'flex' : 'hidden'}`}>
                        <a href="/" className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold hover:shadow-md hover:shadow-slate-800 hover:rounded-sm cursor-pointer">About</a>

                        <a onClick={scrollToEducaiton} className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold hover:shadow-md hover:shadow-slate-800 hover:rounded-sm cursor-pointer ">Education</a>

                    <a onClick={scrollToSkill} className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold hover:shadow-md hover:shadow-slate-800 hover:rounded-sm cursor-pointer">Skills</a>

                    <a onClick={scrollToProject} className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold hover:shadow-md hover:shadow-slate-800 hover:rounded-sm cursor-pointer">Projects</a>

                    <a onClick={scrollToContact} className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold hover:shadow-md hover:shadow-slate-800 hover:rounded-sm cursor-pointer">Contact</a>
                </div>
            </div>
        </nav >
        </>
    )
}

export default Nav