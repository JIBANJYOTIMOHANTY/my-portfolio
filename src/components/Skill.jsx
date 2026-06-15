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
    <div ref={ref} className="px-4 sm:px-6 lg:px-8 py-16 bg-[#2F2F2F] text-white" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="p-3 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/20 mb-4 animate-bounce duration-1000">
            <PsychologyIcon sx={{ fontSize: 48 }} className="text-white" />
          </div>
          <h1 className="font-semibold text-center text-white text-3xl md:text-4xl lg:text-5xl font-poppins relative">
            Skills & Tech Stack
            <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform -translate-x-1/2"></span>
          </h1>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          
          {/* Backend & Programming */}
          <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl hover:shadow-indigo-500/5 hover:border-indigo-500/30 transition-all duration-300">
            <h2 className="text-xl font-poppins font-bold text-white flex items-center gap-2.5 mb-6 pb-3 border-b border-gray-700/60">
              <CodeIcon className="text-indigo-400" />
              Backend & Programming
            </h2>
            <div className="flex flex-wrap gap-4 justify-start">
              {backendProgramming.map((item, index) => (
                <div className="flex flex-col items-center group w-[4.5rem]" key={index}>
                  <div className="w-14 h-14 p-2 bg-gray-800/80 border border-gray-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:border-indigo-500/40 transition-all duration-300 shadow-lg">
                    <img src={item.icon} className="w-full h-full object-contain" alt={item.name} />
                  </div>
                  <span className="mt-2 text-[11px] font-semibold font-poppins text-gray-400 group-hover:text-white transition-colors text-center truncate w-full">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Technologies */}
          <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/5 hover:border-purple-500/30 transition-all duration-300">
            <h2 className="text-xl font-poppins font-bold text-white flex items-center gap-2.5 mb-6 pb-3 border-b border-gray-700/60">
              <WebIcon className="text-purple-400" />
              Frontend Technologies
            </h2>
            <div className="flex flex-wrap gap-4 justify-start">
              {frontend.map((item, index) => (
                <div className="flex flex-col items-center group w-[4.5rem]" key={index}>
                  <div className="w-14 h-14 p-2 bg-gray-800/80 border border-gray-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:border-purple-500/40 transition-all duration-300 shadow-lg">
                    <img src={item.icon} className="w-full h-full object-contain" alt={item.name} />
                  </div>
                  <span className="mt-2 text-[11px] font-semibold font-poppins text-gray-400 group-hover:text-white transition-colors text-center truncate w-full">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Development */}
          <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-500/5 hover:border-cyan-500/30 transition-all duration-300">
            <h2 className="text-xl font-poppins font-bold text-white flex items-center gap-2.5 mb-6 pb-3 border-b border-gray-700/60">
              <SmartphoneIcon className="text-cyan-400" />
              Mobile Development
            </h2>
            <div className="flex flex-wrap gap-4 justify-start">
              {mobile.map((item, index) => (
                <div className="flex flex-col items-center group w-[4.5rem]" key={index}>
                  <div className="w-14 h-14 p-2 bg-gray-800/80 border border-gray-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
                    <img src={item.icon} className="w-full h-full object-contain" alt={item.name} />
                  </div>
                  <span className="mt-2 text-[11px] font-semibold font-poppins text-gray-400 group-hover:text-white transition-colors text-center truncate w-full">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Databases & Data */}
          <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl hover:shadow-emerald-500/5 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-xl font-poppins font-bold text-white flex items-center gap-2.5 mb-6 pb-3 border-b border-gray-700/60">
              <StorageIcon className="text-emerald-400" />
              Databases & Data
            </h2>
            <div className="flex flex-wrap gap-4 justify-start">
              {databases.map((item, index) => (
                <div className="flex flex-col items-center group w-[4.5rem]" key={index}>
                  <div className="w-14 h-14 p-2 bg-gray-800/80 border border-gray-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:border-emerald-500/40 transition-all duration-300 shadow-lg">
                    <img src={item.icon} className="w-full h-full object-contain" alt={item.name} />
                  </div>
                  <span className="mt-2 text-[11px] font-semibold font-poppins text-gray-400 group-hover:text-white transition-colors text-center truncate w-full">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl hover:shadow-pink-500/5 hover:border-pink-500/30 transition-all duration-300">
            <h2 className="text-xl font-poppins font-bold text-white flex items-center gap-2.5 mb-6 pb-3 border-b border-gray-700/60">
              <BuildIcon className="text-pink-400" />
              DevOps & Tools
            </h2>
            <div className="flex flex-wrap gap-4 justify-start">
              {devopsTools.map((item, index) => (
                <div className="flex flex-col items-center group w-[4.5rem]" key={index}>
                  <div className="w-14 h-14 p-2 bg-gray-800/80 border border-gray-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:border-pink-500/40 transition-all duration-300 shadow-lg">
                    <img src={item.icon} className="w-full h-full object-contain" alt={item.name} />
                  </div>
                  <span className="mt-2 text-[11px] font-semibold font-poppins text-gray-400 group-hover:text-white transition-colors text-center truncate w-full">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI & Code Assistance */}
          <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl hover:shadow-amber-500/5 hover:border-amber-500/30 transition-all duration-300">
            <h2 className="text-xl font-poppins font-bold text-white flex items-center gap-2.5 mb-6 pb-3 border-b border-gray-700/60">
              <SmartToyIcon className="text-amber-400" />
              AI & Code Assistance
            </h2>
            <div className="flex flex-wrap gap-4 justify-start">
              {aiAssistance.map((item, index) => (
                <div className="flex flex-col items-center group w-[4.5rem]" key={index}>
                  <div className="w-14 h-14 p-2 bg-gray-800/80 border border-gray-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:border-amber-500/40 transition-all duration-300 shadow-lg">
                    <img src={item.icon} className="w-full h-full object-contain" alt={item.name} />
                  </div>
                  <span className="mt-2 text-[11px] font-semibold font-poppins text-gray-400 group-hover:text-white transition-colors text-center truncate w-full">
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
