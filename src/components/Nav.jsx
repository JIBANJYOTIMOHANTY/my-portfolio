import React, { useState, useEffect } from 'react'
import logo from "../logo/logo.png"

function Nav({educationRef,experienceRef,skillRef,projectRef,contactRef}) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'experience', 'skills', 'education', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 250;

            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToAbout = (e) => {
        e.preventDefault();
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToEducaiton = (e) => {
        e.preventDefault();
        if (educationRef?.current) {
            educationRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToExperience = (e) => {
        e.preventDefault();
        if (experienceRef?.current) {
            experienceRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    const scrollToSkill = (e) => {
        e.preventDefault();
        if (skillRef?.current) {
            skillRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProject = (e) => {
        e.preventDefault();
        if (projectRef?.current) {
            projectRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = (e) => {
        e.preventDefault();
        if (contactRef?.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const getLinkClass = (sectionName) => {
        const isActive = activeSection === sectionName;
        return `px-3 py-1.5 text-xs lg:text-sm font-mono tracking-wider uppercase rounded-lg transition-all duration-200 cursor-pointer ${
            isActive
                ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                : 'text-gray-400 hover:text-cyan-300 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20'
        }`;
    };

    const getMobileLinkClass = (sectionName) => {
        const isActive = activeSection === sectionName;
        return `px-3 py-2 text-sm font-mono tracking-wider uppercase rounded-lg transition-all duration-200 cursor-pointer ${
            isActive
                ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/50'
                : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
        }`;
    };

    return (
        <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#08080C]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)] transition-all duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
                <div className="flex justify-between items-center">
                    <div className="text-xl sm:text-2xl font-bold font-mono tracking-wider">
                        <a href="/" className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
                            &lt;JIBAN.DEV //&gt;
                        </a>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu} 
                            className="text-cyan-400 focus:outline-none p-1.5 hover:bg-cyan-500/10 rounded-lg border border-cyan-500/30 transition-colors"
                            aria-label="Toggle navigation menu"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex md:items-center gap-1 lg:gap-2">
                        <a href="#about" onClick={scrollToAbout} className={getLinkClass('about')}>About</a>
                        <a href="#experience" onClick={scrollToExperience} className={getLinkClass('experience')}>Experience</a>
                        <a href="#skills" onClick={scrollToSkill} className={getLinkClass('skills')}>Skills</a>
                        <a href="#education" onClick={scrollToEducaiton} className={getLinkClass('education')}>Education</a>
                        <a href="#projects" onClick={scrollToProject} className={getLinkClass('projects')}>Projects</a>
                        <a href="#contact" onClick={scrollToContact} className={getLinkClass('contact')}>Contact</a>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="md:hidden mt-3 pt-3 border-t border-cyan-500/20 flex flex-col gap-1.5 animate-fadeIn">
                        <a href="#about" onClick={(e) => { scrollToAbout(e); setIsOpen(false); }} className={getMobileLinkClass('about')}>About</a>
                        <a href="#experience" onClick={(e) => { scrollToExperience(e); setIsOpen(false); }} className={getMobileLinkClass('experience')}>Experience</a>
                        <a href="#skills" onClick={(e) => { scrollToSkill(e); setIsOpen(false); }} className={getMobileLinkClass('skills')}>Skills</a>
                        <a href="#education" onClick={(e) => { scrollToEducaiton(e); setIsOpen(false); }} className={getMobileLinkClass('education')}>Education</a>
                        <a href="#projects" onClick={(e) => { scrollToProject(e); setIsOpen(false); }} className={getMobileLinkClass('projects')}>Projects</a>
                        <a href="#contact" onClick={(e) => { scrollToContact(e); setIsOpen(false); }} className={getMobileLinkClass('contact')}>Contact</a>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Nav