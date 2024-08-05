import React, { forwardRef } from 'react';
import { backend, frontend, language, tools } from '../data/SkillData';
import skill from '../images/skills/skill.svg';

const Skill = forwardRef((props, ref) => {
  return (
    <div>
      <div ref={ref}>
        <h1 className="font-semibold text-center text-black text-3xl md:text-4xl lg:text-5xl font-poppins underline mt-0 md:mt-[1rem] md:ml-4">
          Skills
        </h1>
        <div className="w-11/12 m-auto space-y-12 pb-10 rounded-lg bg-white">
          {/* For Programming language */}
          <div className="ml-10">
            <h1 className="text-4xl font-poppins text-blue-600 font-bold dark:text-blue-500 mt-5 underline">
              Programming Language
            </h1>
            <div className="flex flex-wrap space-x-4 sm:space-x-10 mt-4">
              {language.map((item, index) => (
                <div className="w-20 h-20" key={index}>
                  <img src={item.icon} className="w-full h-full" alt={item.name} />
                  <span className="flex justify-center text-black text-sm font-semibold">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* For Frontend */}
          <div className="ml-10">
            <h1 className="text-4xl font-poppins text-blue-600 font-bold dark:text-blue-500 underline">
              Frontend
            </h1>
            <div className="flex flex-wrap space-x-4 gap-y-10 sm:space-x-10 mt-4">
              {frontend.map((item, index) => (
                <div className="w-20 h-20" key={index}>
                  <img src={item.icon} className="w-full h-full" alt={item.name} />
                  <span className="flex justify-center text-black text-sm font-semibold">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* For Backend */}
          <div className="ml-10 mt-10">
            <h1 className="text-4xl font-poppins text-blue-600 font-bold dark:text-blue-500 underline">
              Backend
            </h1>
            <div className="flex flex-wrap space-x-4 gap-y-10 sm:space-x-10 mt-4">
              {backend.map((item, index) => (
                <div className="w-20 h-20" key={index}>
                  <img src={item.icon} className="w-full h-full" alt={item.name} />
                  <span className="flex justify-center text-black text-sm font-semibold">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Tools */}
          <div className="ml-10 mt-10">
            <h1 className="text-4xl font-poppins text-blue-600 font-bold dark:text-blue-500 underline mb-2">
              Tools
            </h1>
            <div className="flex flex-wrap space-x-4 sm:space-x-10 mt-4">
              {tools.map((item, index) => (
                <div className="w-20 h-20" key={index}>
                  <img src={item.icon} className="w-full h-full" alt={item.name} />
                  <span className="flex justify-center text-black text-sm font-semibold">
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
