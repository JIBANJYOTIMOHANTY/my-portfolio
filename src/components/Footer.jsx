import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';

const Footer = ({educationRef,experienceRef,skillRef,projectRef,contactRef}) => {
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
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 border-t border-gray-850">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <h2 className="font-poppins font-bold text-xl mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h2>
            <ul className="space-y-2.5 font-poppins text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a onClick={scrollToExperience} className="hover:text-white transition-colors cursor-pointer">Experience</a></li>
              <li><a onClick={scrollToSkill} className="hover:text-white transition-colors cursor-pointer">Skills</a></li>
              <li><a onClick={scrollToEducaiton} className="hover:text-white transition-colors cursor-pointer">Education</a></li>
              <li><a onClick={scrollToProject} className="hover:text-white transition-colors cursor-pointer">Projects</a></li>
              <li><a onClick={scrollToContact} className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h2 className="font-poppins font-bold text-xl mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Follow Me
            </h2>
            <div className="flex space-x-4 mt-2">
              <a 
                href="https://www.linkedin.com/in/jiban-jyoti-mohanty-35005021a/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-gray-800 hover:bg-indigo-600 hover:text-white text-gray-450 border border-gray-700/60 rounded-xl transition-all duration-355"
              >
                <LinkedIn />
              </a>
              <a 
                href="https://github.com/JIBANJYOTIMOHANTY/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-gray-800 hover:bg-purple-600 hover:text-white text-gray-450 border border-gray-700/60 rounded-xl transition-all duration-355"
              >
                <GitHub />
              </a>
              <a 
                href="https://www.instagram.com/jiban__jyoti__mohanty/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-gray-800 hover:bg-pink-600 hover:text-white text-gray-450 border border-gray-700/60 rounded-xl transition-all duration-355"
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="font-poppins font-bold text-xl mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Contact Details
            </h2>
            <ul className="space-y-3 font-poppins text-gray-450 text-sm">
              <li className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors duration-200">
                <PersonIcon fontSize="inherit" className="text-indigo-400" />
                <span>Jiban Jyoti Mohanty</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors duration-200">
                <EmailIcon fontSize="inherit" className="text-indigo-400" />
                <a href="mailto:jibanjyotimohanty315@gmail.com">jibanjyotimohanty315@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors duration-200">
                <LinkedIn fontSize="inherit" className="text-indigo-400" />
                <a href="https://www.linkedin.com/in/jiban-jyoti-mohanty-35005021a/" target="_blank" rel="noreferrer">LinkedIn Profile</a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors duration-200">
                <GitHub fontSize="inherit" className="text-indigo-400" />
                <a href="https://github.com/JIBANJYOTIMOHANTY" target="_blank" rel="noreferrer">GitHub Profile</a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors duration-200">
                <LocationOnIcon fontSize="inherit" className="text-indigo-400" />
                <span>Cuttack, Odisha, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center font-poppins text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Jiban Jyoti Mohanty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
