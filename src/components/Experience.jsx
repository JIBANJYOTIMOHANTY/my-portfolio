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
    <div ref={ref} className="px-4 sm:px-6 lg:px-8 py-16 bg-transparent text-white" id="experience">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="p-3 bg-cyan-950/40 text-cyan-400 border border-cyan-500/30 rounded-2xl shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-4 animate-bounce duration-1000">
            <WorkIcon sx={{ fontSize: 48 }} />
          </div>
          <h1 className="font-semibold text-center text-white text-3xl md:text-4xl lg:text-5xl font-mono tracking-widest relative">
            &lt;EXPERIENCE //&gt;
            <span className="absolute left-1/2 -bottom-2 w-24 h-0.5 bg-cyan-500 rounded-full transform -translate-x-1/2 shadow-[0_0_8px_#06b6d4]"></span>
          </h1>
        </div>

        {/* Experience Details */}
        <div className="mt-8 flex justify-center relative">
          <div className="w-full md:w-4/5 lg:w-3/4 bg-black/40 border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:border-cyan-500/40 transition-all duration-300 ease-in-out group relative">
            {/* Cyber corner brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/40"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500/40"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/40"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/40"></div>

            {/* Header info */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-cyan-500/10 pb-6 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 group-hover:from-cyan-300 group-hover:to-fuchsia-400 transition-all">
                  Software Engineer Level 1
                </h2>

                <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-400 text-sm md:text-base font-mono">
                  <span className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                    <BusinessIcon fontSize="small" className="text-cyan-400" />
                    Oditek Solutions
                  </span>
                  <span className="hidden md:inline text-gray-700">|</span>
                  <span className="flex items-center gap-1.5 hover:text-fuchsia-450 transition-colors">
                    <LocationOnIcon fontSize="small" className="text-fuchsia-400" />
                    Bhubaneswar, Odisha, India
                  </span>
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs md:text-sm font-mono font-semibold bg-cyan-950/20 text-cyan-400 border border-cyan-500/30 shadow-inner">
                  <CalendarMonthIcon fontSize="inherit" />
                  Jun 2025 – Present
                </span>
              </div>
            </div>

            {/* Description/Responsibilities */}
            <div className="space-y-4">
              <h3 className="text-gray-300 font-mono text-base uppercase tracking-wider">/* Key Responsibilities */</h3>
              <ul className="space-y-3.5 pl-2">
                {responsibilities.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-200">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-fuchsia-500 shadow-[0_0_8px_#d946ef] mt-2.5"></span>
                    <span className="font-poppins text-base leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies used */}
            <div className="mt-8 pt-6 border-t border-cyan-500/10">
              <div className="flex flex-wrap gap-2.5">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1 rounded font-mono text-xs md:text-sm bg-cyan-950/10 text-cyan-400 border border-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all cursor-default"
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
