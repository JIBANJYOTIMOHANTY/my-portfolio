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
    <footer className="bg-gradient-to-b from-[#08080C] to-black text-white py-12 border-t border-cyan-500/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <h2 className="font-mono font-bold text-lg mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent uppercase tracking-wider">
              // Quick Links
            </h2>
            <ul className="space-y-2.5 font-mono text-gray-400 text-sm">
              <li><a href="/" className="hover:text-cyan-400 transition-colors cursor-pointer">&gt; About</a></li>
              <li><a onClick={scrollToExperience} className="hover:text-cyan-400 transition-colors cursor-pointer">&gt; Experience</a></li>
              <li><a onClick={scrollToSkill} className="hover:text-cyan-400 transition-colors cursor-pointer">&gt; Skills</a></li>
              <li><a onClick={scrollToEducaiton} className="hover:text-cyan-400 transition-colors cursor-pointer">&gt; Education</a></li>
              <li><a onClick={scrollToProject} className="hover:text-cyan-400 transition-colors cursor-pointer">&gt; Projects</a></li>
              <li><a onClick={scrollToContact} className="hover:text-cyan-400 transition-colors cursor-pointer">&gt; Contact</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h2 className="font-mono font-bold text-lg mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent uppercase tracking-wider">
              // Follow Me
            </h2>
            <div className="flex space-x-4 mt-2">
              <a 
                href="https://www.linkedin.com/in/jiban-jyoti-mohanty-35005021a/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-black hover:bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-xl hover:shadow-[0_0_15px_#06b6d4] hover:border-cyan-400 transition-all duration-300"
              >
                <LinkedIn />
              </a>
              <a 
                href="https://github.com/JIBANJYOTIMOHANTY/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-black hover:bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30 rounded-xl hover:shadow-[0_0_15px_#d946ef] hover:border-fuchsia-400 transition-all duration-300"
              >
                <GitHub />
              </a>
              <a 
                href="https://www.instagram.com/jiban__jyoti__mohanty/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-black hover:bg-pink-500/10 text-pink-400 border border-pink-500/30 rounded-xl hover:shadow-[0_0_15px_#ec4899] hover:border-pink-400 transition-all duration-300"
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="font-mono font-bold text-lg mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent uppercase tracking-wider">
              // Contact Details
            </h2>
            <ul className="space-y-3 font-mono text-gray-405 text-sm">
              <li className="flex items-center gap-2.5 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <PersonIcon fontSize="inherit" className="text-cyan-450" />
                <span>Jiban Jyoti Mohanty</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <EmailIcon fontSize="inherit" className="text-cyan-450" />
                <a href="mailto:jibanjyotimohanty315@gmail.com">jibanjyotimohanty315@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <LinkedIn fontSize="inherit" className="text-cyan-450" />
                <a href="https://www.linkedin.com/in/jiban-jyoti-mohanty-35005021a/" target="_blank" rel="noreferrer">LinkedIn Profile</a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <GitHub fontSize="inherit" className="text-cyan-450" />
                <a href="https://github.com/JIBANJYOTIMOHANTY" target="_blank" rel="noreferrer">GitHub Profile</a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <LocationOnIcon fontSize="inherit" className="text-cyan-450" />
                <span>Cuttack, Odisha, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cyan-500/10 text-center font-mono text-xs text-gray-650">
          <p>&copy; {new Date().getFullYear()} Jiban Jyoti Mohanty. [all_systems_secured]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
