import React, { forwardRef } from 'react'
import EmpMng from '../images/projects/EmpMng.png'
import cricket from '../images/projects/cricket.jpg'
import quiz from '../images/projects/Quiz.jpg'
import { ProjectData } from '../data/ProjectData'

const Projects = forwardRef((props,ref) => {
  return (
    <div >
      <h1 className='font-semibold text-center mt-5 text-black text-3xl md:text-4xl lg:text-5xl font-poppins underline md:mt-10 md:ml-4'>Projects</h1>
      <div ref={ref} className='md:grid md:grid-cols-3 md:mr-5'>
        {ProjectData.map((item, index) =>
          <div className=' rounded-xl m-5 hover:shadow-lg transition-shadow duration-300 ease-linear hover:shadow-white cursor-pointer' key={index}>
            <h4 className='font-poppins font-bold text-2xl text-white text-center'>{item.heading}</h4>
            <section
              className='h-[15rem] md:h-[15rem] w-full rounded-xl '
              style={{
                backgroundImage: `url(${item.name})`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >

            </section>
          </div>
        )}
      </div>
    </div>
  )
});

export default Projects
