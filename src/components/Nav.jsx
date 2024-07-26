import React, { useState } from 'react'
import logo from "../logo/logo.png"

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className='w-full '>
                <nav className="bg-[#2F2F2F] ">
                    <div className="max-w-7xl px-2">
                        <div className="flex justify-between h-16">
                                <div className="flex-shrink-0 flex ">
                                    <a href="/" className="text-xl font-bold text-gray-800">
                                        <img className='w-30 h-16' src = {logo}  />

                                    </a>
                                </div>
                            <div className="flex">
                                <div className="hidden sm:-my-px sm:ml-96 sm:flex sm:space-x-8">
                                    {/* <a href="#" className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold font-serif">Home</a> */}
                                    <a href="#" className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold">About</a>
                                    <a href="#" className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold">Education</a>
                                    <a href="#" className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold">Skills</a>
                                    <a href="#" className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold">Projects</a>
                                    <a href="#" className="text-white inline-flex items-center px-1 pt-1 text-xl font-bold">Contact</a>
                                </div>
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    type="button"
                                    className="bg-gray-200 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                    onClick={toggleMenu}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                        <div className="pt-2 pb-3 space-y-1">
                            <a href="#" className="text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium">Home</a>
                            <a href="#" className="text-gray-500 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">About</a>
                            <a href="#" className="text-gray-500 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">Services</a>
                            <a href="#" className="text-gray-500 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav
