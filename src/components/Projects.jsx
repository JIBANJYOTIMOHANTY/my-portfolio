import React, { forwardRef } from 'react'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import { ProjectData } from '../data/ProjectData'

const Projects = forwardRef((props, ref) => {
  // Let's create some representative tags for the project titles to make them look extremely professional
  const getTags = (title) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('employee') || titleLower.includes('management')) {
      return ['React', 'SpringBoot', 'MySQL', 'REST API'];
    }
    if (titleLower.includes('cricket') || titleLower.includes('score')) {
      return ['React JS', 'Tailwind CSS', 'API Integration'];
    }
    if (titleLower.includes('calling') || titleLower.includes('call')) {
      return ['WebRTC', 'React', 'Node.js', 'Socket.io'];
    }
    if (titleLower.includes('quiz')) {
      return ['HTML5', 'CSS3', 'JavaScript', 'State Management'];
    }
    if (titleLower.includes('todo') || titleLower.includes('list')) {
      return ['React JS', 'Local Storage', 'Tailwind'];
    }
    return ['HTML5', 'CSS3', 'JavaScript'];
  };

  const getDesc = (title) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('employee') || titleLower.includes('management')) {
      return 'A enterprise grade system to track employee data, assign roles, manage performance registers, and structure organization hierarchies.';
    }
    if (titleLower.includes('cricket') || titleLower.includes('score')) {
      return 'Live match dashboard displaying instant score statistics, commentaries, and bowler/batsman run rates via a third party sports API.';
    }
    if (titleLower.includes('calling')) {
      return 'Real-time peer-to-peer web communication portal facilitating clean audio/video streaming directly inside browser sandboxes.';
    }
    if (titleLower.includes('quiz')) {
      return 'Interactive web questionnaire application featuring progress charts, timed evaluations, and animated final score cards.';
    }
    return 'Interactive and feature-rich utility tool built with clean design paradigms, offering high responsiveness and smooth UI operations.';
  };

  return (
    <div ref={ref} className="px-4 sm:px-6 lg:px-8 py-16 bg-[#2F2F2F] text-white" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="p-3 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/20 mb-4 animate-bounce duration-1000">
            <FolderOpenIcon sx={{ fontSize: 48 }} className="text-white" />
          </div>
          <h1 className="font-semibold text-center text-white text-3xl md:text-4xl lg:text-5xl font-poppins relative">
            Projects
            <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform -translate-x-1/2"></span>
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {ProjectData.map((item, index) => (
            <div 
              className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-md rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300 ease-in-out group flex flex-col justify-between" 
              key={index}
            >
              {/* Image Header wrapper */}
              <div className="relative h-48 w-full overflow-hidden border-b border-gray-700/60 bg-gray-900">
                <div 
                  className="h-full w-full transform group-hover:scale-110 transition duration-500 ease-in-out"
                  style={{
                    backgroundImage: `url(${item.name})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <span className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition cursor-pointer">
                    <CodeIcon fontSize="small" />
                  </span>
                  <span className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition cursor-pointer">
                    <LaunchIcon fontSize="small" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-poppins font-bold text-xl text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {item.heading}
                  </h3>
                  <p className="text-gray-400 font-poppins text-xs leading-relaxed mb-4 text-justify">
                    {getDesc(item.heading)}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="mt-4 pt-4 border-t border-gray-700/60">
                  <div className="flex flex-wrap gap-1.5">
                    {getTags(item.heading).map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-0.5 rounded text-[10px] md:text-xs font-poppins bg-gray-800 text-indigo-300 border border-gray-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
});

export default Projects
