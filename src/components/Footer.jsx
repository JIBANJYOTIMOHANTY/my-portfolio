import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import React from 'react';

const Footer = ({educationRef,skillRef,projectRef,contactRef}) => {
  const scrollToEducaiton = (e) => {
    // e.preventDefault();
    console.log("hello");
    
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
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="font-semibold text-xl mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="/" className="hover:underline cursor-pointer">About</a></li>
              <li className="mb-2"><a onClick={scrollToEducaiton} className="hover:underline cursor-pointer">Education</a></li>
              <li className="mb-2"><a onClick={scrollToSkill} className="hover:underline cursor-pointer">Skills</a></li>
              <li className="mb-2"><a onClick={scrollToProject} className="hover:underline cursor-pointer">Projects</a></li>
              <li className="mb-2"><a onClick={scrollToContact} className="hover:underline cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="font-semibold text-xl mb-4">Follow Me</h2>
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
          </div>

          

          {/* Column 4 */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h2 className="font-semibold text-xl mb-4">Contact Me</h2>
            <ul>
              <li className="mb-2"><a className="hover:underline cursor-pointer">Jiban Jyoti Mohanty</a></li>
              <li className="mb-2"><a className="hover:underline cursor-pointer">jibanjyotimohanty315@gmail.com</a></li>
              <li className="mb-2"><a className="hover:underline cursor-pointer">+91 9827411727</a></li>
              <li className="mb-2"><a className="hover:underline cursor-pointer">Cuttack, Odisha, India</a></li>
            </ul>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
