import React, { forwardRef } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Experience = forwardRef((props, ref) => {
  const responsibilities = [
    "Designing, maintaining and building reusable, efficient, and reliable code.",
    "Creating the service layer with Angular that acts as a bridge between the presentation layer and data access layer.",
    "Assisting in maintaining and updating existing applications and modules.",
    "Developing and managing the database using MySQL based on user specifications."
  ];

  const technologies = ["Angular", "MySQL", "Service Layer", "Database Design", "Frontend & Backend Bridge"];

  return (
    <div ref={ref} className="px-4 sm:px-6 lg:px-8 py-16 bg-[#2F2F2F] text-white" id="experience">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="p-3 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/20 mb-4 animate-bounce duration-1000">
            <WorkIcon sx={{ fontSize: 48 }} className="text-white" />
          </div>
          <h1 className="font-semibold text-center text-white text-3xl md:text-4xl lg:text-5xl font-poppins relative">
            Experience
            <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform -translate-x-1/2"></span>
          </h1>
        </div>

        {/* Experience Details */}
        <div className="mt-8 flex justify-center">
          <div className="w-full md:w-4/5 lg:w-3/4 bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-md rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 ease-in-out group">
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-gray-700/60 pb-6 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-poppins font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent group-hover:from-indigo-200 group-hover:to-purple-200 transition-all">
                  Software Engineer Level 1
                </h2>
                
                <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-300 text-sm md:text-base font-poppins">
                  <span className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
                    <BusinessIcon fontSize="small" className="text-indigo-400" />
                    Oditek Solutions Pvt Limited
                  </span>
                  <span className="hidden md:inline text-gray-500">|</span>
                  <span className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                    <LocationOnIcon fontSize="small" className="text-purple-400" />
                    Bhubaneswar, Odisha, India
                  </span>
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shadow-inner">
                  <CalendarMonthIcon fontSize="inherit" />
                  Jun 2025 – Present
                </span>
              </div>
            </div>

            {/* Description/Responsibilities */}
            <div className="space-y-4">
              <h3 className="text-gray-200 font-poppins font-semibold text-lg">Key Responsibilities & Contributions:</h3>
              <ul className="space-y-3.5 pl-2">
                {responsibilities.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 mt-2.5"></span>
                    <span className="font-poppins text-base leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies used */}
            <div className="mt-8 pt-6 border-t border-gray-700/60">
              <div className="flex flex-wrap gap-2.5">
                {technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3.5 py-1 rounded-lg text-xs md:text-sm font-poppins bg-gray-800 text-indigo-300 border border-gray-700 hover:border-indigo-500/40 hover:text-white transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Experience;
