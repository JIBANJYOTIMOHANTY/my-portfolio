import React, { forwardRef } from 'react'
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Education = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="px-4 sm:px-6 lg:px-8 py-16 bg-transparent text-white" id="education">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="p-3 bg-cyan-950/40 text-cyan-400 border border-cyan-500/30 rounded-2xl shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-4 animate-bounce duration-1000">
            <SchoolIcon sx={{ fontSize: 48 }} />
          </div>
          <h1 className="font-semibold text-center text-white text-3xl md:text-4xl lg:text-5xl font-mono tracking-widest relative">
            &lt;EDUCATION //&gt;
            <span className="absolute left-1/2 -bottom-2 w-24 h-0.5 bg-cyan-500 rounded-full transform -translate-x-1/2 shadow-[0_0_8px_#06b6d4]"></span>
          </h1>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-black/40 border border-cyan-500/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-500/40 transition-all duration-300 ease-in-out group flex flex-col justify-between relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/40"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-500/40"></div>
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-cyan-950/20 text-cyan-400 rounded-xl border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                  <SchoolIcon />
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-cyan-950/20 text-cyan-400 rounded-full border border-cyan-500/30">
                  2021-2025
                </span>
              </div>
              <h2 className="text-2xl font-mono font-bold text-white mb-1">Bachelor's Degree</h2>
              <h3 className="text-cyan-400 font-mono font-semibold text-sm mb-2">&lt;Computer Science /&gt;</h3>
              <p className="text-gray-400 font-poppins text-xs mb-4">Biju Patnaik University Of Technology, Odisha</p>
              <p className="text-gray-300 font-poppins text-sm leading-relaxed text-justify">
                B.Tech in Computer Science & Engineering (8.1 CGPA). Developed analytical and problem-solving skills, and gained proficiency in programming and algorithms.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-black/40 border border-fuchsia-500/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(217,70,239,0.15)] hover:border-fuchsia-500/40 transition-all duration-300 ease-in-out group flex flex-col justify-between relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-fuchsia-500/40"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-fuchsia-500/40"></div>
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-fuchsia-950/20 text-fuchsia-400 rounded-xl border border-fuchsia-500/30 group-hover:bg-fuchsia-500 group-hover:text-black transition-all duration-300">
                  <AccountBalanceIcon />
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-fuchsia-950/20 text-fuchsia-400 rounded-full border border-fuchsia-500/30">
                  2019-2021
                </span>
              </div>
              <h2 className="text-2xl font-mono font-bold text-white mb-1">Intermediate (10+2)</h2>
              <h3 className="text-fuchsia-400 font-mono font-semibold text-sm mb-2">&lt;Science Stream /&gt;</h3>
              <p className="text-gray-400 font-poppins text-xs mb-4">Council Of Higher Secondary Education, Odisha</p>
              <p className="text-gray-300 font-poppins text-sm leading-relaxed text-justify">
                Acquired fundamental scientific knowledge in mathematics, physics, and chemistry. Developed experimental skills and real-world analytical abilities.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-black/40 border border-cyan-500/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-500/40 transition-all duration-300 ease-in-out group flex flex-col justify-between relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/40"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-500/40"></div>
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-cyan-950/20 text-cyan-400 rounded-xl border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                  <AutoStoriesIcon />
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-cyan-950/20 text-cyan-400 rounded-full border border-cyan-500/30">
                  2019
                </span>
              </div>
              <h2 className="text-2xl font-mono font-bold text-white mb-1">Matriculation (10th)</h2>
              <h3 className="text-cyan-400 font-mono font-semibold text-sm mb-2">&lt;General Studies /&gt;</h3>
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
