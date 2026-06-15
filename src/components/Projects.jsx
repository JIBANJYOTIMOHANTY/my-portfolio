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
    <div ref={ref} className="px-4 sm:px-6 lg:px-8 py-16 bg-transparent text-white" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="p-3 bg-cyan-950/40 text-cyan-400 border border-cyan-500/30 rounded-2xl shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-4 animate-bounce duration-1000">
            <FolderOpenIcon sx={{ fontSize: 48 }} />
          </div>
          <h1 className="font-semibold text-center text-white text-3xl md:text-4xl lg:text-5xl font-mono tracking-widest relative">
            &lt;PROJECTS //&gt;
            <span className="absolute left-1/2 -bottom-2 w-24 h-0.5 bg-cyan-500 rounded-full transform -translate-x-1/2 shadow-[0_0_8px_#06b6d4]"></span>
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {ProjectData.map((item, index) => (
            <div 
              className="bg-black/40 border border-cyan-500/20 rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-500/40 transition-all duration-300 ease-in-out group flex flex-col justify-between relative" 
              key={index}
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/40"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-500/40"></div>
              
              {/* Image Header wrapper */}
              <div className="relative h-48 w-full overflow-hidden border-b border-cyan-500/10 bg-gray-900">
                <div 
                  className="h-full w-full transform group-hover:scale-110 transition duration-500 ease-in-out filter brightness-95"
                  style={{
                    backgroundImage: `url(${item.name})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <span className="p-3 rounded-full bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-black border border-cyan-500/30 transition cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                    <CodeIcon fontSize="small" />
                  </span>
                  <span className="p-3 rounded-full bg-fuchsia-500/10 hover:bg-fuchsia-500 text-fuchsia-400 hover:text-black border border-fuchsia-500/30 transition cursor-pointer shadow-[0_0_10px_rgba(217,70,239,0.2)]">
                    <LaunchIcon fontSize="small" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-mono font-bold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.heading}
                  </h3>
                  <p className="text-gray-400 font-poppins text-xs leading-relaxed mb-4 text-justify">
                    {getDesc(item.heading)}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="mt-4 pt-4 border-t border-cyan-500/10">
                  <div className="flex flex-wrap gap-1.5">
                    {getTags(item.heading).map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-0.5 rounded font-mono text-[10px] md:text-xs bg-cyan-950/10 text-cyan-400 border border-cyan-500/20"
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
