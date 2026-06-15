import React, { forwardRef } from 'react';
import { 
  backendProgramming, 
  frontend, 
  mobile, 
  databases, 
  devopsTools, 
  aiAssistance 
} from '../data/SkillData';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const Skill = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="px-4 sm:px-6 lg:px-8 py-16 bg-transparent text-white" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="p-3 bg-cyan-950/40 text-cyan-400 border border-cyan-500/30 rounded-2xl shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-4 animate-bounce duration-1000">
            <PsychologyIcon sx={{ fontSize: 48 }} />
          </div>
          <h1 className="font-semibold text-center text-white text-3xl md:text-4xl lg:text-5xl font-mono tracking-widest relative">
            &lt;TECH_STACK //&gt;
            <span className="absolute left-1/2 -bottom-2 w-24 h-0.5 bg-cyan-500 rounded-full transform -translate-x-1/2 shadow-[0_0_8px_#06b6d4]"></span>
          </h1>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          
          {/* Backend & Programming */}
          <div className="bg-black/40 border border-cyan-500/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-500/40 transition-all duration-300 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/40"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-500/40"></div>
            <h2 className="text-lg font-mono font-bold text-cyan-400 flex items-center gap-2.5 mb-6 pb-3 border-b border-cyan-500/10">
              <CodeIcon fontSize="small" />
              01 // BACKEND & CORE
            </h2>
            <div className="flex flex-wrap gap-4 justify-start">
              {backendProgramming.map((item, index) => (
                <div className="flex flex-col items-center group w-[4.5rem]" key={index}>
                  <div className="w-14 h-14 p-2 bg-black/60 border border-gray-800 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
                    <img src={item.icon} className="w-full h-full object-contain" alt={item.name} />
                  </div>
                  <span className="mt-2 text-[10px] font-mono text-gray-400 group-hover:text-cyan-400 transition-colors text-center truncate w-full">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Technologies */}
          <div className="bg-black/40 border border-fuchsia-500/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(217,70,239,0.15)] hover:border-fuchsia-500/40 transition-all duration-300 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-fuchsia-500/40"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-fuchsia-500/40"></div>
            <h2 className="text-lg font-mono font-bold text-fuchsia-400 flex items-center gap-2.5 mb-6 pb-3 border-b border-fuchsia-500/10">
              <WebIcon fontSize="small" />
              02 // FRONTEND TECH
            </h2>
            <div className="flex flex-wrap gap-4 justify-start">
              {frontend.map((item, index) => (
                <div className="flex flex-col items-center group w-[4.5rem]" key={index}>
                  <div className="w-14 h-14 p-2 bg-black/60 border border-gray-800 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:border-fuchsia-500/40 transition-all duration-300 shadow-lg">
                    <img src={item.icon} className="w-full h-full object-contain" alt={item.name} />
                  </div>
                  <span className="mt-2 text-[10px] font-mono text-gray-400 group-hover:text-fuchsia-400 transition-colors text-center truncate w-full">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Development */}
          <div className="bg-black/40 border border-cyan-500/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-500/40 transition-all duration-300 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/40"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-500/40"></div>
            <h2 className="text-lg font-mono font-bold text-cyan-400 flex items-center gap-2.5 mb-6 pb-3 border-b border-cyan-500/10">
              <SmartphoneIcon fontSize="small" />
              03 // MOBILE STACK
            </h2>
            <div className="flex flex-wrap gap-4 justify-start">
              {mobile.map((item, index) => (
                <div className="flex flex-col items-center group w-[4.5rem]" key={index}>
                  <div className="w-14 h-14 p-2 bg-black/60 border border-gray-800 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
                    <img src={item.icon} className="w-full h-full object-contain" alt={item.name} />
                  </div>
                  <span className="mt-2 text-[10px] font-mono text-gray-400 group-hover:text-cyan-400 transition-colors text-center truncate w-full">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Databases & Data */}
          <div className="bg-black/40 border border-fuchsia-500/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(217,70,239,0.15)] hover:border-fuchsia-500/40 transition-all duration-300 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-fuchsia-500/40"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-fuchsia-500/40"></div>
            <h2 className="text-lg font-mono font-bold text-fuchsia-400 flex items-center gap-2.5 mb-6 pb-3 border-b border-fuchsia-500/10">
              <StorageIcon fontSize="small" />
              04 // DATA MODULES
            </h2>
            <div className="flex flex-wrap gap-4 justify-start">
              {databases.map((item, index) => (
                <div className="flex flex-col items-center group w-[4.5rem]" key={index}>
                  <div className="w-14 h-14 p-2 bg-black/60 border border-gray-800 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:border-fuchsia-500/40 transition-all duration-300 shadow-lg">
                    <img src={item.icon} className="w-full h-full object-contain" alt={item.name} />
                  </div>
                  <span className="mt-2 text-[10px] font-mono text-gray-400 group-hover:text-fuchsia-400 transition-colors text-center truncate w-full">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="bg-black/40 border border-cyan-500/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-500/40 transition-all duration-300 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/40"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-500/40"></div>
            <h2 className="text-lg font-mono font-bold text-cyan-400 flex items-center gap-2.5 mb-6 pb-3 border-b border-cyan-500/10">
              <BuildIcon fontSize="small" />
              05 // DEVOPS & TOOLS
            </h2>
            <div className="flex flex-wrap gap-4 justify-start">
              {devopsTools.map((item, index) => (
                <div className="flex flex-col items-center group w-[4.5rem]" key={index}>
                  <div className="w-14 h-14 p-2 bg-black/60 border border-gray-800 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
                    <img src={item.icon} className="w-full h-full object-contain" alt={item.name} />
                  </div>
                  <span className="mt-2 text-[10px] font-mono text-gray-400 group-hover:text-cyan-400 transition-colors text-center truncate w-full">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI & Code Assistance */}
          <div className="bg-black/40 border border-fuchsia-500/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(217,70,239,0.15)] hover:border-fuchsia-500/40 transition-all duration-300 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-fuchsia-500/40"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-fuchsia-500/40"></div>
            <h2 className="text-lg font-mono font-bold text-fuchsia-400 flex items-center gap-2.5 mb-6 pb-3 border-b border-fuchsia-500/10">
              <SmartToyIcon fontSize="small" />
              06 // AI ASSISTANTS
            </h2>
            <div className="flex flex-wrap gap-4 justify-start">
              {aiAssistance.map((item, index) => (
                <div className="flex flex-col items-center group w-[4.5rem]" key={index}>
                  <div className="w-14 h-14 p-2 bg-black/60 border border-gray-800 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:border-fuchsia-500/40 transition-all duration-300 shadow-lg">
                    <img src={item.icon} className="w-full h-full object-contain" alt={item.name} />
                  </div>
                  <span className="mt-2 text-[10px] font-mono text-gray-400 group-hover:text-fuchsia-400 transition-colors text-center truncate w-full">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
});

export default Skill;
