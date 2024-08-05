import React, { forwardRef } from 'react'
import SchoolIcon from '@mui/icons-material/School';

const Education = forwardRef((props,ref) => {
    return (
        <div ref={ref} className="px-4 sm:px-6 md:mt-8 lg:px-8 py-8 bg-[#2F2F2F]" id = "education">
            <div className='flex flex-col items-center justify-center md:flex-row md:items-start'>
                <SchoolIcon sx={{ fontSize: 80, marginBottom:0}} />
            </div>
                <h1 className='font-semibold text-center text-black text-3xl md:text-4xl lg:text-5xl font-poppins underline mt-0 md:mt-0 md:ml-4'>Education</h1>
            <div className='flex flex-col md:flex-row md:space-x-4 mt-10'>
                
                <section className='w-full md:w-1/3 space-y-3 md:ml-2 hover:shadow-lg transition-shadow duration-300 ease-linear hover:shadow-teal-700 cursor-pointer rounded-lg md:m-4 mt-8 md:mt-0'>
                    <h1 className='text-cyan-500 text-3xl mt-5 md:text-4xl font-serif font-bold'>Bachelor's Degree</h1>
                    <h2 className='text-green-500 text-lg md:text-xl font-serif font-bold'>Computer Science & Engineering</h2>
                    <h2 className='text-green-500 text-lg md:text-xl font-serif'>Biju Patnaik University Of Technology, Odisha</h2>
                    <h3 className='text-green-500 text-lg md:text-xl font-normal'>2021-2025</h3>
                    <p className='text-green-500 text-base md:text-lg w-full md:w-3/4 text-justify font-serif'>B.Tech in Computer Science & Engineering (8.1 CGPA). As I am coming from a Computer Science background, I developed several projects. In my studies, I gained proficiency in Programming, Problem Solving, and Analytics. This course helped me develop analytical and problem-solving skills through various subjects and improve my written, verbal communication, and leadership skills.</p>
                </section>

                <section className='w-full md:w-1/3 space-y-3 md:ml-4 hover:shadow-lg transition-shadow duration-300 ease-linear hover:shadow-teal-700 cursor-pointer rounded-lg md:m-4 mt-8 md:mt-0'>
                    <h1 className='text-cyan-500 text-3xl mt-5 md:text-4xl font-serif font-bold'>Intermediate</h1>
                    <h2 className='text-green-500 text-lg md:text-xl font-serif font-bold'>10+2</h2>
                    <h2 className='text-green-500 text-lg md:text-xl font-serif'>Council Of Higher Secondary Education, Odisha</h2>
                    <h3 className='text-green-500 text-lg md:text-xl font-normal'>2019-2021</h3>
                    <p className='text-green-500 text-base md:text-lg w-full md:w-3/4 text-justify font-serif'>10+2 in Science (81.66%). It is also known as high school education or pre-university education. This phase gave me the opportunity to explore a range of subjects and skills. Skills developed include laboratory techniques and safety, and the application of chemical principles to real-world problems. This course provided a comprehensive understanding of fundamental scientific principles.</p>
                </section>
                
                <section className='w-full md:w-1/3 space-y-3 md:ml-4 hover:shadow-lg transition-shadow duration-300 ease-linear hover:shadow-teal-700 cursor-pointer rounded-lg md:m-4 mt-8 md:mt-0'>
                    <h1 className='text-cyan-500 text-3xl mt-5 md:text-4xl font-serif font-bold'>Matriculation</h1>
                    <h2 className='text-green-500 text-lg md:text-xl font-serif font-bold'>10th</h2>
                    <h2 className='text-green-500 text-lg md:text-xl font-serif'>Board of Secondary Education, Odisha</h2>
                    <h3 className='text-green-500 text-lg md:text-xl font-normal'>2019-2021</h3>
                    <p className='text-green-500 text-base md:text-lg w-full md:w-3/4 text-justify font-serif'>In this course, I secured 82.33%. I acquired a broad range of knowledge and skills that provided confidence for further studies. This education was helpful for academic development and career growth. I learned to work collaboratively on group projects, and developed an understanding of ethical behavior, academic integrity, and responsible citizenship.</p>
                </section>

            </div>
        </div>
    )
});

export default Education
