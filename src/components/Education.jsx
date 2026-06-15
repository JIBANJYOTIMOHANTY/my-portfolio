import React, { forwardRef } from 'react'
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Education = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="px-4 sm:px-6 lg:px-8 py-16 bg-[#2F2F2F] text-white" id="education">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="p-3 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/20 mb-4 animate-bounce duration-1000">
            <SchoolIcon sx={{ fontSize: 48 }} className="text-white" />
          </div>
          <h1 className="font-semibold text-center text-white text-3xl md:text-4xl lg:text-5xl font-poppins relative">
            Education
            <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform -translate-x-1/2"></span>
          </h1>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300 ease-in-out group flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <SchoolIcon />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                  2021-2025
                </span>
              </div>
              <h2 className="text-2xl font-poppins font-bold text-white mb-1">Bachelor's Degree</h2>
              <h3 className="text-indigo-300 font-poppins font-semibold text-base mb-2">Computer Science & Engineering</h3>
              <p className="text-gray-400 font-poppins text-xs mb-4">Biju Patnaik University Of Technology, Odisha</p>
              <p className="text-gray-300 font-poppins text-sm leading-relaxed text-justify">
                B.Tech in Computer Science & Engineering (8.1 CGPA). Developed analytical and problem-solving skills, and gained proficiency in programming and algorithms.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300 ease-in-out group flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <AccountBalanceIcon />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                  2019-2021
                </span>
              </div>
              <h2 className="text-2xl font-poppins font-bold text-white mb-1">Intermediate (10+2)</h2>
              <h3 className="text-purple-300 font-poppins font-semibold text-base mb-2">Science Stream (81.66%)</h3>
              <p className="text-gray-400 font-poppins text-xs mb-4">Council Of Higher Secondary Education, Odisha</p>
              <p className="text-gray-300 font-poppins text-sm leading-relaxed text-justify">
                Acquired fundamental scientific knowledge in mathematics, physics, and chemistry. Developed experimental skills and real-world analytical abilities.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2 transition-all duration-300 ease-in-out group flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-pink-500/10 text-pink-400 rounded-xl border border-pink-500/20 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                  <AutoStoriesIcon />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-pink-500/10 text-pink-300 rounded-full border border-pink-500/20">
                  2019
                </span>
              </div>
              <h2 className="text-2xl font-poppins font-bold text-white mb-1">Matriculation (10th)</h2>
              <h3 className="text-pink-300 font-poppins font-semibold text-base mb-2">General Studies (82.33%)</h3>
              <p className="text-gray-400 font-poppins text-xs mb-4">Board of Secondary Education, Odisha</p>
              <p className="text-gray-300 font-poppins text-sm leading-relaxed text-justify">
                Completed secondary education with high marks. Developed a foundation for cooperative team work, critical thinking, and citizenship ethics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default Education;
