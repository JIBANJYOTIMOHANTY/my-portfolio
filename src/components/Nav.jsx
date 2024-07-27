import React, { useState } from 'react'
import logo from "../logo/logo.png"

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

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
                        <a href="/" className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold hover:shadow-md hover:shadow-slate-800 hover:rounded-sm">About</a>
                        <a href="education" className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold hover:shadow-md hover:shadow-slate-800 hover:rounded-sm">Education</a>
                        <a href="#skills" className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold hover:shadow-md hover:shadow-slate-800 hover:rounded-sm">Skills</a>
                        <a href="#projects" className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold hover:shadow-md hover:shadow-slate-800 hover:rounded-sm">Projects</a>
                        <a href="#contact" className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold hover:shadow-md hover:shadow-slate-800 hover:rounded-sm">Contact</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav